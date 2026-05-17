import React from 'react';

export default function FryingMethods() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="border-b pb-4">
        <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Strand 2.5</span>
        <h1 className="text-3xl font-extrabold text-slate-800 mt-1">Frying Methods: Dry Fat & Deep Frying</h1>
        <p className="text-slate-600 mt-2">Mastering thermal culinary arts with high situational awareness and fire safety measures.</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Technical Cooking Classifications</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-xl border-slate-100 bg-slate-50">
            <h3 className="font-bold text-slate-800">Dry Fat Frying</h3>
            <p className="text-sm text-slate-600 mt-1">Cooking foods containing high natural oil layers (e.g., bacon, sausages) in a pan where no explicit external fat additions are needed.</p>
          </div>
          <div className="p-4 border rounded-xl border-slate-100 bg-slate-50">
            <h3 className="font-bold text-slate-800">Deep Frying</h3>
            <p className="text-sm text-slate-600 mt-1">Submerging clean, prepared food components entirely into specialized high-temperature cooking oils or hot fats.</p>
          </div>
        </div>
      </div>

      <div className="p-4 border border-rose-200 bg-rose-50 rounded-xl text-rose-950 text-sm">
        <strong className="block mb-1">⚠️ Safety First-Aid & Hazard Framework:</strong>
        Frying modules mandate strict compliance rules regarding hot fat handling. If accidents or splash-backs occur, immediately coordinate burn/scald mitigation procedures detailed inside Science & Technology first-aid principles.
      </div>
    </div>
  );
}
