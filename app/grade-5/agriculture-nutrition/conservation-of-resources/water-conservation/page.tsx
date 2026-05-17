import React from 'react';

export default function WaterConservation() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="border-b pb-4">
        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Strand 1.2</span>
        <h1 className="text-3xl font-extrabold text-slate-800 mt-1">Water Conservation: Moisture Retention</h1>
        <p className="text-slate-600 mt-2">Sustaining soil moisture profiles through strategic crop management methods.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
        <div><strong className="text-blue-900">Core Strategies:</strong> Mulching, Shading, Cover Cropping</div>
        <div><strong className="text-blue-900">Inquiry Question:</strong> How can we conserve soil water in household gardening?</div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Moisture-Retention Experiment Framework</h2>
        <p className="text-slate-600 leading-relaxed">
          To measure the effectiveness of water conservation, establish two parallel observation zones:
        </p>
        <table className="w-full text-left border-collapse border border-slate-200">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-2 border border-slate-200 font-semibold">Zone A (Experimental)</th>
              <th className="p-2 border border-slate-200 font-semibold">Zone B (Control Baseline)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-slate-200 text-slate-600">Crops are thoroughly mulched with organic materials, shaded, or under active cover crops.</td>
              <td className="p-2 border border-slate-200 text-slate-600">Crops are left completely un-mulched with bare open soil layers exposed to sunlight.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
