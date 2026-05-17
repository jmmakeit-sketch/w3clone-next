import React from 'react';
import Link from 'next/link';
import { grade5AgriNutritionContent } from './data/content';

export default function Grade5AgriNutritionDashboard() {
  const strands = Object.entries(grade5AgriNutritionContent);

  // Quick stat aggregators
  const totalSubStrands = strands.reduce((acc, [_, strand]) => acc + Object.keys(strand.subStrands).length, 0);
  const totalLessons = strands.reduce((acc, [_, strand]) => {
    return acc + Object.values(strand.subStrands).reduce((sum, sub) => sum + sub.lessons, 0);
  }, 0);

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 md:p-8 max-w-6xl mx-auto space-y-8">
      
      {/* Header Profile Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">
            Primary School Ecosystem
          </span>
          <h1 className="text-3xl font-black text-slate-800 mt-2">Grade 5 Agriculture & Nutrition</h1>
          <p className="text-slate-500 text-sm mt-1">
            Fully aligned with the Kenya Institute of Curriculum Development (KICD) CBC Framework.
          </p>
        </div>
        
        {/* Dynamic Metric Badges */}
        <div className="flex gap-3 text-xs w-full md:w-auto">
          <div className="bg-slate-900 text-white p-3 rounded-xl flex-1 md:flex-initial text-center md:text-left min-w-[100px]">
            <span className="block font-medium opacity-70">Total Strands</span>
            <span className="text-xl font-black mt-0.5 block">{strands.length} Units</span>
          </div>
          <div className="bg-emerald-600 text-white p-3 rounded-xl flex-1 md:flex-initial text-center md:text-left min-w-[100px]">
            <span className="block font-medium opacity-70">Syllabus Hours</span>
            <span className="text-xl font-black mt-0.5 block">{totalLessons} Periods</span>
          </div>
        </div>
      </div>

      {/* Capstone Project Focus Panel */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-950 text-white p-6 rounded-2xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1 max-w-2xl">
          <span className="text-[10px] uppercase font-black bg-amber-700/60 text-amber-200 px-2 py-0.5 rounded tracking-wider border border-amber-600/30">
            Featured Active Capstone
          </span>
          <h3 className="text-lg font-bold">Integrated Community Service Learning (CSL) Project</h3>
          <p className="text-amber-100 text-xs leading-relaxed">
            Execute experiential community solutions covering localized waste pits, safe wild animal deterrents, and innovative spatial gardens (Appendix I & II).
          </p>
        </div>
        <Link 
          href="/grade-5/agriculture-nutrition/community-project" 
          className="bg-white text-amber-950 font-bold text-xs px-4 py-2.5 rounded-lg hover:bg-amber-50 transition-colors whitespace-nowrap shadow-xs"
        >
          Open Action Hub →
        </Link>
      </div>

      {/* Main Strands Explorer Matrix */}
      <div className="space-y-4">
        <h2 className="text-xl font-black text-slate-800">Curriculum Content Explorer</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {strands.map(([key, strand]) => (
            <div key={strand.id} className="bg-white border border-slate-200 rounded-2xl shadow-xs p-5 flex flex-col justify-between space-y-4">
              
              {/* Strand Header */}
              <div className="border-b pb-3">
                <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                  Strand {strand.id}
                </span>
                <h3 className="text-lg font-bold text-slate-800 mt-0.5">{strand.title}</h3>
              </div>

              {/* Sub-strands Submenu Router Links */}
              <div className="space-y-2 flex-grow">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Select Sub-strand Target:
                </span>
                <div className="grid gap-1.5">
                  {Object.entries(strand.subStrands).map(([subKey, sub]) => (
                    <Link
                      key={sub.id}
                      href={`/grade-5/agriculture-nutrition/${key}/${subKey}`}
                      className="group flex justify-between items-center bg-slate-50 hover:bg-emerald-50/60 border border-slate-100 hover:border-emerald-200 p-2.5 rounded-xl transition-all duration-150"
                    >
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-emerald-900 transition-colors">
                          {sub.title}
                        </span>
                        <span className="text-[10px] text-slate-400 mt-0.5">
                          Inquiry: {sub.inquiryQuestion.substring(0, 55)}...
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 bg-white border px-2 py-0.5 rounded group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all shadow-2xs">
                        {sub.lessons}P →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
