import React from 'react';

export default function FoodNutrients() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="border-b pb-4">
        <span className="text-sm font-semibold text-rose-600 uppercase tracking-wider">Strand 2.4</span>
        <h1 className="text-3xl font-extrabold text-slate-800 mt-1">Food Nutrients & Dietary Classification</h1>
        <p className="text-slate-600 mt-2">Categorizing everyday foods by major nutrients to design health-promoting meals.</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 border rounded-xl bg-amber-50/50 border-amber-200">
          <h3 className="font-bold text-amber-950 text-sm">Carbohydrates</h3>
          <p className="text-xs text-slate-600 mt-1">Energy-giving foods supporting cellular functions and physical stamina.</p>
        </div>
        <div className="p-4 border rounded-xl bg-emerald-50/50 border-emerald-200">
          <h3 className="font-bold text-emerald-950 text-sm">Vitamins & Minerals</h3>
          <p className="text-xs text-slate-600 mt-1">Protective foods crucial for immunity and disease prevention profiles.</p>
        </div>
        <div className="p-4 border rounded-xl bg-blue-50/50 border-blue-200">
          <h3 className="font-bold text-blue-950 text-sm">Proteins</h3>
          <p className="text-xs text-slate-600 mt-1">Body-building blocks necessary for tissue growth, repair, and synthesis.</p>
        </div>
        <div className="p-4 border rounded-xl bg-purple-50/50 border-purple-200">
          <h3 className="font-bold text-purple-950 text-sm">Fats</h3>
          <p className="text-xs text-slate-600 mt-1">Concentrated energy reserves protecting critical anatomical systems.</p>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm text-slate-700">
        <span className="font-bold text-slate-800 block mb-1">Cross-Subject Alignment:</span>
        Learners explicitly connect balanced nutritional intake to the active prevention of non-communicable diseases covered within Science & Technology modules.
      </div>
    </div>
  );
}
