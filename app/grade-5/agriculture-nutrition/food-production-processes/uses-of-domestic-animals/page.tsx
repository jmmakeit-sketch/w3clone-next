import React from 'react';

export default function UsesOfDomesticAnimals() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="border-b pb-4">
        <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Strand 2.2</span>
        <h1 className="text-3xl font-extrabold text-slate-800 mt-1">Uses of Domestic Animals in Food Production</h1>
        <p className="text-slate-600 mt-2">Analyzing direct and indirect contributions of targeted domestic species to food security.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 text-slate-700">
        <div className="p-4 border rounded-xl bg-slate-50">
          <h3 className="font-bold text-slate-800 mb-2">Scoped Species</h3>
          <p className="text-sm">Bees, rabbits, camels, fish, pigs, donkeys, dogs, and cats.</p>
        </div>
        <div className="p-4 border rounded-xl bg-slate-50">
          <h3 className="font-bold text-slate-800 mb-2">Key Competency</h3>
          <p className="text-sm">Communication and Collaboration through class presentations mapping animals to their direct utility.</p>
        </div>
      </div>
    </div>
  );
}
