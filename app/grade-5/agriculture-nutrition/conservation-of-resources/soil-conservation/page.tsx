import React from 'react';

export default function SoilConservation() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="border-b pb-4">
        <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">Strand 1.1</span>
        <h1 className="text-3xl font-extrabold text-slate-800 mt-1">Soil Conservation: Organic Waste Pits</h1>
        <p className="text-slate-600 mt-2">Discovering sites for soil improvement and returning structural plant remains back to the earth.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <div><h4 className="text-xs font-bold text-slate-400 uppercase">Time Allocation</h4><p className="text-sm font-medium text-slate-700">8 Lessons</p></div>
        <div><h4 className="text-xs font-bold text-slate-400 uppercase">Key Value</h4><p className="text-sm font-medium text-slate-700">Unity & Environmental Recycling</p></div>
        <div><h4 className="text-xs font-bold text-slate-400 uppercase">Core Competency</h4><p className="text-sm font-medium text-slate-700">Critical Thinking & Observation</p></div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-800">1. Identifying Poor Soil Sites</h2>
        <p className="text-slate-600 leading-relaxed">
          Before building an amendment area, look for regions within the school compound showing signs of depletion: stunting crop growth, highly compacted layout layers, or severe soil color bleaching.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-800">2. Constructing the Organic Waste Pit</h2>
        <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl text-slate-700">
          <strong className="block text-emerald-800 mb-1">Practical Activity Layout:</strong>
          Dig an organic waste pit down in your designated area to dump plant residues, appropriate food scraps, and kitchen organic matter. Plant test crops right inside or around older decomposed residue sites to actively trace nutrient recovery.
        </div>
      </section>
    </div>
  );
}
