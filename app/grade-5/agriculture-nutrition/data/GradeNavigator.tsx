import React from 'react';
import Link from 'next/link';

interface GradeNavigatorProps {
  currentGrade: '4' | '5' | '6';
}

export default function GradeNavigator({ currentGrade }: GradeNavigatorProps) {
  const grades = [
    { id: '4', label: 'Grade 4', href: '/grade-4/agriculture-nutrition', color: 'hover:text-emerald-600 hover:bg-emerald-50 border-emerald-200 text-emerald-800 bg-emerald-50/40' },
    { id: '5', label: 'Grade 5', href: '/grade-5/agriculture-nutrition', color: 'hover:text-teal-600 hover:bg-teal-50 border-teal-200 text-teal-800 bg-teal-50/40' },
    { id: '6', label: 'Grade 6', href: '/grade-6/agriculture-nutrition', color: 'hover:text-blue-600 hover:bg-blue-50 border-blue-200 text-blue-800 bg-blue-50/40' },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 max-w-7xl mx-auto mb-2">
      <div className="flex items-center space-x-3">
        <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Upper Primary Curriculum Navigator
        </span>
      </div>
      <div className="flex items-center space-x-2 w-full sm:w-auto justify-center">
        {grades.map((grade) => {
          const isActive = currentGrade === grade.id;
          return (
            <Link
              key={grade.id}
              href={grade.href}
              className={`flex-1 sm:flex-none text-center px-4 py-2 rounded-xl text-xs font-bold tracking-tight transition-all duration-150 border ${
                isActive
                  ? 'bg-slate-900 border-slate-950 text-white shadow-xs scale-102'
                  : 'bg-white border-slate-200 text-slate-600 ' + grade.color
              }`}
            >
              {grade.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
