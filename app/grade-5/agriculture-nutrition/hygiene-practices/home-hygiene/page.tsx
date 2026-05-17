import React from 'react';

export default function HomeHygiene() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="border-b pb-4">
        <span className="text-sm font-semibold text-sky-600 uppercase tracking-wider">Strand 3.2</span>
        <h1 className="text-3xl font-extrabold text-slate-800 mt-1">Home Hygiene & Surface Care</h1>
        <p className="text-slate-600 mt-2">Managing household environments by choosing specific cleaning workflows for varying materials.</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Syllabus Material Surface Typologies</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-3">
          {['Earthen Floors', 'Cemented Surfaces', 'Tiled Floors', 'Wooden Layouts', 'Glass Windows'].map((surface, idx) => (
            <div key={idx} className="p-3 border rounded-xl bg-slate-50 text-center font-medium text-sm text-slate-700 border-slate-200">
              {surface}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-sky-50 border border-sky-100 p-4 rounded-xl text-slate-700 text-sm">
        <strong>Preventative Health Cross-Link:</strong> Clean surfaces are treated as direct barriers against pathogen transmission channels. This links directly to the prevention of communicable diseases studied in Science & Technology.
      </div>
    </div>
  );
}
