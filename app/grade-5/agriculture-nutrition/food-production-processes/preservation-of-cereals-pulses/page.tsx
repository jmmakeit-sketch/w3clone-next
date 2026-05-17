import React from 'react';

export default function PreservationOfCerealsPulses() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="border-b pb-4">
        <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Strand 2.3</span>
        <h1 className="text-3xl font-extrabold text-slate-800 mt-1">Preservation of Cereals and Pulses</h1>
        <p className="text-slate-600 mt-2">Preventing food spoilage and wastage through localized traditional and modern storage solutions.</p>
      </div>
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-slate-800">Core Preservation Methods</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong>Sun Drying:</strong> Reducing moisture contents completely to prevent mold growth.</li>
          <li><strong>Use of Ash:</strong> Mixing specific fine ash layers with grains to deter insect pests.</li>
          <li><strong>Airtight Containers:</strong> Depriving aerobic pests and fungi of oxygen.</li>
        </ul>
      </div>
    </div>
  );
}
