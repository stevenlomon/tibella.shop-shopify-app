import React from 'react';

export const HeroBanner: React.FC = () => {
  return (
    <header className="w-full bg-amber-50/50 border-b border-amber-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Category Announcement Badge */}
        <span className="inline-block bg-amber-600 text-white text-xs md:text-sm font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
          OVERACTIVE BLADDER &amp; NOCTURIA BREAKTHROUGH
        </span>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
          The "Ankle-to-Bladder" Signal: How 32,000+ Menopausal Women Are Quieting Misfiring Bladder Nerves from Home
        </h1>

        {/* Subheadline with VOC hooks */}
        <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-8 max-w-3xl mx-auto">
          If you go from <span className="font-semibold text-amber-900">"I don't have to pee"</span> to <span className="font-semibold text-amber-900">"I'm peeing"</span> in about 12 seconds—or if your bladder completely gives up when you pull into your driveway—your bladder isn't broken. It's getting bad instructions from a misfiring nerve.
        </p>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left border-t border-amber-200/60 pt-6">
          <div className="flex items-center space-x-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span className="text-sm text-slate-700">20+ Yrs Urology Science</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span className="text-sm text-slate-700">100% Drug-Free &amp; Safe</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span className="text-sm text-slate-700">30 Min/Day While Relaxing</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span className="text-sm text-slate-700">90-Day Money-Back Trial</span>
          </div>
        </div>
      </div>
    </header>
  );
};