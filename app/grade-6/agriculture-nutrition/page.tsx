import React from 'react';
import Link from 'next/link';
import { grade6ContentMatrix } from '../../grade-5/agriculture-nutrition/data/grade6Content';

import GradeNavigator from '../../grade-5/agriculture-nutrition/data/GradeNavigator';

export default function Grade6AgricultureDashboard() {
  const strandsG6 = Object.entries(grade6ContentMatrix);

  // Runtime metric calculations from the schema
  const totalStrands = strandsG6.length;
  const totalLessons = strandsG6.reduce((acc, [_, strand]) => {
    return acc + Object.values(strand.subStrands).reduce((sum, sub) => sum + sub.lessons, 0);
  }, 0);

  return (
    <div className="p-6 max-w-7xl`n      <GradeNavigator currentGrade="6" /> mx-auto space-y-8 bg-slate-50/50 min-h-screen">
      
      {/* Upper Primary KICD Grade 6 Capstone Banner */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 rounded-3xl p-6 md:p-8 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center space-x-2 bg-blue-700/50 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
            <span>🇰🇪 KICD KPSEA Level Hub</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">Grade 6 Agriculture & Nutrition</h1>
          <p className="text-blue-100 max-w-2xl text-sm md:text-base font-medium">
            Capstone upper primary coursework managing commercial agroforestry nurseries, sloped soil engineering, small livestock husbandry, and synthetic textile care.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 translate-x-10 translate-y-10 font-black text-9xl pointer-events-none">G6</div>
      </div>

      {/* Analytics Metric Bar */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-xs flex items-center space-x-4">
          <div className="p-3 bg-blue-50 rounded-xl text-blue-700 font-black text-xl">03</div>
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Target Standard</span>
            <span className="text-lg font-bold text-slate-800">Grade 6 (KPSEA Exam Year)</span>
          </div>
        </div>
        <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-xs flex items-center space-x-4">
          <div className="p-3 bg-indigo-50 rounded-xl text-indigo-700 font-black text-xl">{totalStrands}</div>
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Active Strands</span>
            <span className="text-lg font-bold text-slate-800">{totalStrands} Operational Pillars</span>
          </div>
        </div>
        <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-xs flex items-center space-x-4">
          <div className="p-3 bg-purple-50 rounded-xl text-purple-700 font-black text-xl">{totalLessons}</div>
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Syllabus Hours</span>
            <span className="text-lg font-bold text-slate-800">{totalLessons} Monitored Periods</span>
          </div>
        </div>
      </div>

      {/* Dynamic Curriculum Matrix Map */}
      <div className="space-y-4">
        <h2 className="text-xl font-black text-slate-800">Curriculum Content Explorer</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {strandsG6.map(([key, strand]) => (
            <div key={strand.id} className="bg-white border border-slate-200 rounded-2xl shadow-xs p-5 flex flex-col justify-between space-y-4">
              
              {/* Strand Identification */}
              <div className="border-b pb-3">
                <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                  Strand {strand.id}
                </span>
                <h3 className="text-lg font-bold text-slate-800 mt-0.5">{strand.title}</h3>
              </div>

              {/* Sub-strand Card Iteration */}
              <div className="space-y-2 flex-grow">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Select Sub-strand Target:
                </span>
                <div className="grid gap-1.5">
                  {Object.entries(strand.subStrands).map(([subKey, sub]) => (
                    <Link
                      key={sub.id}
                      href={`/grade-6/agriculture-nutrition/${key}/${subKey}`}
                      className="group flex justify-between items-center bg-slate-50 hover:bg-blue-50/60 border border-slate-100 hover:border-blue-200 p-2.5 rounded-xl transition-all duration-150"
                    >
                      <div className="flex flex-col pr-4">
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-blue-900 transition-colors">
                          {sub.title}
                        </span>
                        <span className="text-[10px] text-slate-400 mt-0.5 truncate max-w-[280px] sm:max-w-md">
                          Inquiry: {sub.inquiryQuestion}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 bg-white border px-2 py-0.5 rounded shrink-0 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shadow-2xs">
                        {sub.lessons}P
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

