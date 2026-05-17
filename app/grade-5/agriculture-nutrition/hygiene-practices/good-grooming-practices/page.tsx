import React from 'react';

export default function GoodGroomingPractices() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="border-b pb-4">
        <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Strand 3.1</span>
        <h1 className="text-3xl font-extrabold text-slate-800 mt-1">Good Grooming Habits</h1>
        <p className="text-slate-600 mt-2">Developing daily health habits, behavioral etiquette, and appropriate situational presentation.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 text-slate-700">
        <div className="space-y-2">
          <h3 className="font-bold text-slate-800">Dressing & Presentation</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Learners are guided to evaluate and practice appropriate dressing modes for various life situations, ensuring items are cleaned, maintained, and worn respectfully for each activity.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="font-bold text-slate-800">Etiquette during Tasks</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Good grooming extends beyond neatness. It embeds everyday manners, interpersonal respect, and proper hygienic carriage while executing heavy household and school chores.
          </p>
        </div>
      </div>
    </div>
  );
}
