import React from 'react';
import { grade5AgriNutritionContent } from '../../data/content';

export default function FryingMethodsDynamic() {
  const data = grade5AgriNutritionContent["food-production-processes"].subStrands["frying-methods"];

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="border-b pb-4">
        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md tracking-wider">
          SUB-STRAND {data.id}
        </span>
        <h1 className="text-3xl font-extrabold text-slate-800 mt-2">{data.title}</h1>
        <p className="text-slate-600 text-sm mt-1">Allocated Lessons: {data.lessons} periods</p>
      </div>

      <div className="bg-slate-50 border p-4 rounded-xl">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Key Inquiry Question</h3>
        <p className="text-base font-semibold text-slate-800 mt-1">"{data.inquiryQuestion}"</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-800">Learning Objectives</h2>
          <ul className="space-y-1.5">
            {data.objectives.map((obj, i) => (
              <li key={i} className="text-sm text-slate-600 flex items-start">
                <span className="text-emerald-500 mr-2">✓</span> {obj}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-800">Suggested Experiences</h2>
          <ul className="space-y-1.5">
            {data.experiences.map((exp, i) => (
              <li key={i} className="text-sm text-slate-600 flex items-start">
                <span className="text-slate-400 mr-2">👉</span> {exp}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t pt-4 grid sm:grid-cols-3 gap-4 text-xs">
        <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100">
          <span className="font-bold text-blue-900 block">Core Competencies</span>
          <p className="text-slate-600 mt-1"><strong>{data.coreCompetencies.name}:</strong> {data.coreCompetencies.description}</p>
        </div>
        <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-100">
          <span className="font-bold text-amber-900 block">Values & PCIs</span>
          <p className="text-slate-600 mt-1"><strong>{data.values.name}:</strong> {data.values.description}</p>
        </div>
        <div className="p-3 bg-purple-50/50 rounded-xl border border-purple-100">
          <span className="font-bold text-purple-900 block">Cross-Subject Link</span>
          <p className="text-slate-600 mt-1">{data.crossSubjectLink}</p>
        </div>
      </div>
    </div>
  );
}
