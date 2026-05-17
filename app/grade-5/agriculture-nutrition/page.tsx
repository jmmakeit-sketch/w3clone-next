import React from 'react';
import Link from 'next/link';
import GradeNavigator from './data/GradeNavigator';
import * as g5Data from './data/content';

export default function Grade5AgricultureDashboard() {
  // Dynamically grab all exported strand objects safely regardless of their exact prefix
  const strandsG5 = Object.entries(g5Data).filter(([_, val]) => val && typeof val === 'object' && 'id' in val);
  
  const totalStrands = strandsG5.length;
  const totalLessons = strandsG5.reduce((acc, [_, strand]: [string, any]) => {
    return acc + Object.values(strand.subStrands).reduce((sum: number, sub: any) => sum + sub.lessons, 0);
  }, 0);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 bg-slate-50/50 min-h-screen">
      <GradeNavigator currentGrade="5" />
      
      <div className="bg-gradient-to-r from-teal-800 to-emerald-900 rounded-3xl p-6 md:p-8 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center space-x-2 bg-teal-700/50 border border-teal-500/30 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
            <span>🇰🇪 KICD CBC Curriculum Hub</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">Grade 5 Agriculture & Nutrition</h1>
          <p className="text-teal-100 max-w-2xl text-sm md:text-base font-medium">
            Dynamic upper primary matrix map tracking ecological soil care, multi-tiered urban garden layout mechanics, and food hygiene techniques.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 translate-x-10 translate-y-10 font-black text-9xl pointer-events-none">G5</div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-xs flex items-center space-x-4">
          <div className="p-3 bg-teal-50 rounded-xl text-teal-700 font-black text-xl">02</div>
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Target Grade</span>
            <span className="text-lg font-bold text-slate-800">Grade 5 Upper Primary</span>
          </div>
        </div>
        <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-xs flex items-center space-x-4">
          <div className="p-3 bg-emerald-50 rounded-xl text-emerald-700 font-black text-xl">{totalStrands}</div>
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Core Syllabus Strands</span>
            <span className="text-lg font-bold text-slate-800">{totalStrands} Active Frameworks</span>
          </div>
        </div>
        <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-xs flex items-center space-x-4">
          <div className="p-3 bg-purple-50 rounded-xl text-purple-700 font-black text-xl">{totalLessons}</div>
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Syllabus Hours</span>
            <span className="text-lg font-bold text-slate-800">{totalLessons} Tracked Periods</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-black text-slate-800">Curriculum Content Explorer</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {strandsG5.map(([key, strand]: [string, any]) => (
            <div key={strand.id} className="bg-white border border-slate-200 rounded-2xl shadow-xs p-5 flex flex-col justify-between space-y-4">
              <div className="border-b pb-3">
                <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Strand {strand.id}</span>
                <h3 className="text-lg font-bold text-slate-800 mt-0.5">{strand.title}</h3>
              </div>
              <div className="space-y-2 flex-grow">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Select Sub-strand Target:</span>
                <div className="grid gap-1.5">
                  {Object.entries(strand.subStrands).map(([subKey, sub]: [string, any]) => (
                    <Link
                      key={sub.id}
                      href={`/grade-5/agriculture-nutrition/${key}/${subKey}`}
                      className="group flex justify-between items-center bg-slate-50 hover:bg-teal-50/60 border border-slate-100 hover:border-teal-200 p-2.5 rounded-xl transition-all duration-150"
                    >
                      <div className="flex flex-col pr-4">
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-teal-900 transition-colors">{sub.title}</span>
                        <span className="text-[10px] text-slate-400 mt-0.5 truncate max-w-[280px] sm:max-w-md">Inquiry: {sub.inquiryQuestion}</span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 bg-white border px-2 py-0.5 rounded shrink-0 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-all shadow-2xs">{sub.lessons}P</span>
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
