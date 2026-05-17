import React from 'react';

export default function LaunderingCottonItems() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="border-b pb-4">
        <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Strand 3.3</span>
        <h1 className="text-3xl font-extrabold text-slate-800 mt-1">Laundering Cotton Items</h1>
        <p className="text-slate-600 mt-2">Mastering fabric laundering steps to maintain textiles and promote excellent personal hygiene.</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Core Laundry Classifications</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="p-4 border rounded-xl border-slate-200 bg-slate-50">
            <h3 className="font-bold text-slate-800 mb-1">White Cotton Items</h3>
            <p className="text-slate-600">Requires processing flows optimized for stain removal, brightness, and boiling resistance without running colors.</p>
          </div>
          <div className="p-4 border rounded-xl border-slate-200 bg-slate-50">
            <h3 className="font-bold text-slate-800 mb-1">Fast-Coloured Cotton Items</h3>
            <p className="text-slate-600">Requires processing loops focused on temperature regulation and rinsing to retain dye structures while removing dirt particles.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
