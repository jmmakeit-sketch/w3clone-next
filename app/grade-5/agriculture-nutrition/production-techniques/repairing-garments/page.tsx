import React from 'react';

export default function RepairingGarments() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="border-b pb-4">
        <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Strand 4.1</span>
        <h1 className="text-3xl font-extrabold text-slate-800 mt-1">Repairing Garments</h1>
        <p className="text-slate-600 mt-2">Mastering stitch-work fundamentals to repair worn textiles and optimize household financial savings.</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Operational Stitches Blueprint</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border border-purple-100 bg-purple-50/30 rounded-xl">
            <h3 className="font-bold text-purple-950">Running Stitch</h3>
            <p className="text-sm text-slate-600 mt-1">A simple straight stitch looping continuously through fabric layers. Ideal for basic basting or initial alignments.</p>
          </div>
          <div className="p-4 border border-purple-100 bg-purple-50/30 rounded-xl">
            <h3 className="font-bold text-purple-950">Back Stitch</h3>
            <p className="text-sm text-slate-600 mt-1">A strong, overlapping stitch sequence where each loop circles back into the previous entry space. Used directly to seal structurally weak areas.</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm text-slate-700">
        <span className="font-bold text-slate-800 block mb-1">Target Assessment Output:</span>
        Learners must apply these hand-sewing methodologies to successfully bridge and repair a <strong>gapping seam</strong> on their daily wear garments.
      </div>
    </div>
  );
}
