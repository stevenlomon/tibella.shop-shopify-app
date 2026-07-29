import React, { useState } from 'react';

interface OfferOption {
  id: string;
  variantId: string; // Real Shopify Variant GID or Numeric ID
  title: string;
  price: number;
  perUnitPrice: number;
  savingsBadge?: string;
  popular?: boolean;
}

const OFFERS: OfferOption[] = [
  {
    id: '1-unit',
    variantId: '49948075210000', // Example variant ID
    title: '1x Tibella System',
    price: 59,
    perUnitPrice: 59,
  },
  {
    id: '2-pack',
    variantId: '49948075220000',
    title: '2-Pack System (Home & Travel)',
    price: 99,
    perUnitPrice: 49.5,
    savingsBadge: 'SAVE $19',
    popular: true,
  },
  {
    id: '4-pack',
    variantId: '49948075230000',
    title: '4-Pack Family Bundle',
    price: 149,
    perUnitPrice: 37.25,
    savingsBadge: 'SAVE $87',
  },
];

export const OfferSelector: React.FC = () => {
  const [selectedOffer, setSelectedOffer] = useState<OfferOption>(OFFERS[1]); // Default to 2-Pack
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Directly pushes to Shopify Cart API and redirects to checkout
  const handleCheckout = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [{ id: selectedOffer.variantId, quantity: 1 }],
        }),
      });

      if (response.ok) {
        window.location.href = '/checkout';
      } else {
        console.error('Failed to add to cart');
      }
    } catch (err) {
      console.error('Checkout error', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white border-2 border-amber-500 rounded-3xl shadow-xl my-12">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-slate-900">Select Your Tibella Package</h3>
        <p className="text-sm text-slate-600 mt-1">Includes 90-Day Money-Back Guarantee + Free US Shipping</p>
      </div>

      <div className="space-y-4 mb-6">
        {OFFERS.map((offer) => {
          const isSelected = selectedOffer.id === offer.id;
          return (
            <div
              key={offer.id}
              onClick={() => setSelectedOffer(offer)}
              className={`relative cursor-pointer p-4 rounded-2xl border-2 transition-all flex items-center justify-between ${
                isSelected
                  ? 'border-amber-600 bg-amber-50/50 shadow-md'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {offer.popular && (
                <span className="absolute -top-3 right-4 bg-amber-600 text-white text-xs font-bold uppercase px-2 py-0.5 rounded-full">
                  Most Popular
                </span>
              )}

              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="offer"
                  checked={isSelected}
                  onChange={() => setSelectedOffer(offer)}
                  className="w-5 h-5 text-amber-600 accent-amber-600"
                />
                <div>
                  <div className="font-bold text-slate-900">{offer.title}</div>
                  <div className="text-xs text-slate-500">${offer.perUnitPrice.toFixed(2)} / unit</div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xl font-black text-slate-900">${offer.price}</div>
                {offer.savingsBadge && (
                  <span className="text-xs font-bold text-emerald-600">{offer.savingsBadge}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={handleCheckout}
        disabled={isSubmitting}
        className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white text-lg font-bold rounded-2xl shadow-lg transition-transform active:scale-95 disabled:opacity-50"
      >
        {isSubmitting ? 'Redirecting...' : `CLAIM YOUR 90-DAY RISK-FREE TRIAL ($${selectedOffer.price})`}
      </button>

      <div className="flex items-center justify-center space-x-4 mt-4 text-xs text-slate-500">
        <span>🔒 256-Bit SSL Encryption</span>
        <span>•</span>
        <span>🚚 Fast US Delivery</span>
      </div>
    </div>
  );
};