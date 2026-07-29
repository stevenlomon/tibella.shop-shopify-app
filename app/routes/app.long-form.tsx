import { HeroBanner } from './tibella.shop/pages/long-form/HeroBanner';
import { BeliefShiftSection } from './tibella.shop/pages/long-form/BeliefShiftSection';
import { ComparisonTable } from './tibella.shop/pages/long-form/ComparisonTable';
import { OfferSelector } from './tibella.shop/pages/long-form/OfferSelection';

export default function LongFormPage() {
  return (
    <>
      {/* Dev CDN stylesheet for instant Tailwind styling in admin preview */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      />

      <div className="min-h-screen bg-slate-50 py-8 font-sans">
        <HeroBanner />
        <main className="max-w-4xl mx-auto px-4">
          <BeliefShiftSection
            reasonNumber={1}
            title="The 'Latchkey Bladder' Trap Is Real (And It Isn't 'Just Aging')"
            vocQuote="I can hold it for 45 minutes... but the second I pull into my driveway, my bladder just completely gives up."
            vocAuthor="r/Menopause"
          >
            <p>
              If you find yourself mapping every single public bathroom before leaving the house, you are not alone.
            </p>
          </BeliefShiftSection>
          <ComparisonTable />
          <OfferSelector />
        </main>
      </div>
    </>
  )
};