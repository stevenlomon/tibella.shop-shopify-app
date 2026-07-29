import React from 'react';

interface BeliefShiftProps {
  reasonNumber: number;
  title: string;
  vocQuote: string;
  vocAuthor: string;
  children: React.ReactNode;
}

export const BeliefShiftSection: React.FC<BeliefShiftProps> = ({
  reasonNumber,
  title,
  vocQuote,
  vocAuthor,
  children,
}) => {
  return (
    <section className="my-12 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-3xl mx-auto">
      <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
        Belief Shift #{reasonNumber}
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
        {title}
      </h2>

      {/* VOC Blockquote */}
      <blockquote className="p-4 mb-6 border-l-4 border-amber-500 bg-amber-50/60 rounded-r-lg italic text-slate-800">
        "{vocQuote}"
        <cite className="block font-semibold not-italic text-sm text-slate-600 mt-2">
          — {vocAuthor}
        </cite>
      </blockquote>

      {/* Body Content */}
      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
};