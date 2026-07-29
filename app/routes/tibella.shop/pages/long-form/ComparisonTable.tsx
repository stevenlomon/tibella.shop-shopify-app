import React from 'react';

export const ComparisonTable: React.FC = () => {
  return (
    <section className="my-16 max-w-4xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-8">
        How Tibella Compares to Traditional Options
      </h2>

      <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
        <table className="w-full text-left border-collapse bg-white">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-900">
              <th className="p-4 font-semibold">Feature / Solution</th>
              <th className="p-4 font-bold text-amber-700 bg-amber-50/50">Tibella TTNS</th>
              <th className="p-4 font-semibold text-slate-600">OAB Meds</th>
              <th className="p-4 font-semibold text-slate-600">Kegels / PT</th>
              <th className="p-4 font-semibold text-slate-600">Pads</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            <tr>
              <td className="p-4 font-medium text-slate-900">Targets Root Nerve Signal</td>
              <td className="p-4 font-bold text-emerald-600 bg-amber-50/30">YES (Direct)</td>
              <td className="p-4 text-slate-500">NO (Suppresses system)</td>
              <td className="p-4 text-slate-500">NO (Muscle only)</td>
              <td className="p-4 text-slate-500">NO (Catches leaks)</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-slate-900">Zero Side Effects</td>
              <td className="p-4 font-bold text-emerald-600 bg-amber-50/30">YES</td>
              <td className="p-4 text-rose-600 font-medium">NO (Dry mouth, fog)</td>
              <td className="p-4 text-slate-500">Can tighten muscles</td>
              <td className="p-4 text-emerald-600">YES</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-slate-900">One-Time Cost</td>
              <td className="p-4 font-bold text-slate-900 bg-amber-50/30">$59</td>
              <td className="p-4 text-slate-500">$600–$1,200/yr</td>
              <td className="p-4 text-slate-500">$500–$2,000</td>
              <td className="p-4 text-slate-500">$300–$600/yr</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-slate-900">Dementia Risk Risk</td>
              <td className="p-4 font-bold text-emerald-600 bg-amber-50/30">ZERO</td>
              <td className="p-4 text-rose-600 font-medium">Associated up to 49%</td>
              <td className="p-4 text-emerald-600">ZERO</td>
              <td className="p-4 text-emerald-600">ZERO</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};