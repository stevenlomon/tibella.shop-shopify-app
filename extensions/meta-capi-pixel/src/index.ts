import { register } from "@shopify/web-pixels-extension";

// This looks like React props... because we use the same tool in our toolbox: Object Destructuring! "Expect an object as 
// the first argument, unpack its analytics and browser properties, and assign them directly to local variables of the same 
// name." If we were to use standard parameters and no destructuring it would look like:
// register((context) => {
//   const analytics = context.analytics;
//   const browser = context.browser;
register(({ analytics, browser }) => {
  // Unlike the tracking script me and my brother have used on GHL sites, this Shopify Web Pixel won't use a single "click"
  // event listener. Instead, we use Shopify native Event Subscription!
  // The `register` function expects a callback function. 
  // The destructured `analytics` property is what allows this via the `.subscribe()` method. We *subscribe* to the 
  // 'checkout_completed' event in order to send it to Meta!
  analytics.subscribe('checkout_completed', async (event) => {
    // Unlike my old tracking script, instead of using a `getCookie` helper function relying on `document.cookie`, we use 
    // Shopify's native and asynchronous `browser.cookie` API! 
    const fbc = await browser.cookie.get('_fbc');
    const fbp = await browser.cookie.get('_fbp');

    // This will help tremendously down later when extracting PII for the payload since it will allow to do so using zero DOM scraping!
    const checkout = event.data.checkout;

    // In my old script I relied on the main thread DOM's global `window.location.search` string. Here instead we extract 
    // the URL string from Shopify's own `event` context. Since `url` is just a string, we cannot query parameters directly
    // from it. This is where the `URL` class shines! By instantiating const urlObj = new URL(url), urlObj.searchParams.get('utm_source') 
    // becomes immediately available without needing to manually parse question marks or ampersands.
    const url = event.context.window.location.href;
    const urlObj = new URL(url);
    const utmData = {
      utm_source: urlObj.searchParams.get('utm_source') || "",
      utm_medium: urlObj.searchParams.get('utm_medium') || "",
      utm_campaign: urlObj.searchParams.get('utm_campaign') || "",
      utm_content: urlObj.searchParams.get('utm_content') || "",
      utm_term: urlObj.searchParams.get('utm_term') || "",
    };

    const payload = {
      event_id: event.id, // Shopify provides a guaranteed unique UUID for event deduplication!
      event_name: "Purchase", // The focus now in E-commerce is "Purchase" rather than "Lead"
      event_time: Math.floor(new Date(event.timestamp).getTime() / 1000),
      event_source_url: url,
      action_source: "website",
      user_data: {
        // Access normalized PII natively. Zero DOM scraping required!
        email: checkout.email,
        first_name: checkout.shippingAddress?.firstName,
        last_name: checkout.shippingAddress?.lastName,
        phone: checkout.shippingAddress?.phone,
        fbc: fbc,
        fbp: fbp,
        user_agent: event.context.navigator.userAgent,

        // Shopify provides location data automatically which also is a massive win for EMQ scores!
        city: checkout.shippingAddress?.city,
        state: checkout.shippingAddress?.provinceCode,
        zip: checkout.shippingAddress?.zip,
        country: checkout.shippingAddress?.countryCode
      },
      custom_data: {
        ...utmData,
        currency: checkout.currencyCode,
        value: checkout.subtotalPrice?.amount
      }
    };

    // Send directly to our Render deployed Python Server at https://tibella-shop-shopify-app.onrender.com
    fetch("https://tibella-shop-shopify-app.onrender.com/process-event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true // `keepalive: true` is a standard browser Fetch API flag. It instructs the browser to keep the HTTP POST request 
      // alive in the background even if the user immediately closes the browser tab or navigates to another page. Shopify explicitly
      // requires `keepalive: true` in Web Pixels, guarantees on our part that the browser won't abort the request when the checkout tab
      // unloads or redirects, greatly increasing the odds that the payload reaches our Python server
    }).catch((e) => console.error("CAPI Send Failed", e));
  });
});