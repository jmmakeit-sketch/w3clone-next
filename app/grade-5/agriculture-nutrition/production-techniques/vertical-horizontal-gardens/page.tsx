import React from 'react';

export default function VerticalHorizontalGardens() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="border-b pb-4">
        <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Strand 4.2</span>
        <h1 className="text-3xl font-extrabold text-slate-800 mt-1">Innovative Spatial Gardening</h1>
        <p className="text-slate-600 mt-2">Designing multi-directional growth structures to combat limited land and space profiles.</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Syllabus Material Targets</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {['Sacks & Gunny bags', 'Plastic Drink Bottles', 'Available Structural Walls', 'PVC/Plastic Pipes'].map((material, index) => (
            <div key={index} className="p-4 border border-slate-100 rounded-xl bg-slate-50 text-slate-700">
              <span className="text-xs font-bold text-slate-400 block mb-1">Material 0{index + 1}</span>
              <span className="font-semibold text-sm block">{material}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 pt-2">
        <div className="p-4 border border-emerald-100 bg-emerald-50/50 rounded-xl">
          <h3 className="font-bold text-emerald-950">Horizontal Innovations</h3>
          <p className="text-xs text-slate-600 mt-1">Arranging localized containers laterally along ground strips, platforms, or stacked tier steps.</p>
        </div>
        <div className="p-4 border border-emerald-100 bg-emerald-50/50 rounded-xl">
          <h3 className="font-bold text-emerald-950">Vertical Innovations</h3>
          <p className="text-xs text-slate-600 mt-1">Suspending growing containers upwards along vertical frameworks, structural fences, hanging lines, or pipes.</p>
        </div>
      </div>
    </div>
  );
}
