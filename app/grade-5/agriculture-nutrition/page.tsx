import React from 'react';
import Link from 'next/link';

const strands = [
  {
    id: "1.0",
    title: "Conservation of Resources",
    color: "border-green-200 bg-green-50/40 text-green-700",
    iconBg: "bg-green-100 text-green-800",
    links: [
      { name: "1.1 Soil Conservation (Waste Pits)", path: "/grade-5/agriculture-nutrition/conservation-of-resources/soil-conservation" },
      { name: "1.2 Water Conservation (Moisture)", path: "/grade-5/agriculture-nutrition/conservation-of-resources/water-conservation" },
      { name: "1.3 Conserving Wild Animals (Repellents)", path: "/grade-5/agriculture-nutrition/conservation-of-resources/conserving-wild-animals" },
    ]
  },
  {
    id: "2.0",
    title: "Food Production Processes",
    color: "border-emerald-200 bg-emerald-50/40 text-emerald-700",
    iconBg: "bg-emerald-100 text-emerald-800",
    links: [
      { name: "2.1 Growing Vegetables (Nursery)", path: "/grade-5/agriculture-nutrition/food-production-processes/growing-vegetables" },
      { name: "2.2 Uses of Domestic Animals", path: "/grade-5/agriculture-nutrition/food-production-processes/uses-of-domestic-animals" },
      { name: "2.3 Preservation of Cereals & Pulses", path: "/grade-5/agriculture-nutrition/food-production-processes/preservation-of-cereals-pulses" },
      { name: "2.4 Food Nutrients & Health", path: "/grade-5/agriculture-nutrition/food-production-processes/food-nutrients" },
      { name: "2.5 Dry & Deep Frying Safety", path: "/grade-5/agriculture-nutrition/food-production-processes/frying-methods" },
    ]
  },
  {
    id: "3.0",
    title: "Hygiene Practices",
    color: "border-sky-200 bg-sky-50/40 text-sky-700",
    iconBg: "bg-sky-100 text-sky-800",
    links: [
      { name: "3.1 Good Grooming Habits", path: "/grade-5/agriculture-nutrition/hygiene-practices/good-grooming-practices" },
      { name: "3.2 Home Hygiene & Surfaces", path: "/grade-5/agriculture-nutrition/hygiene-practices/home-hygiene" },
      { name: "3.3 Laundering Cotton Items", path: "/grade-5/agriculture-nutrition/hygiene-practices/laundering-cotton-items" },
    ]
  },
  {
    id: "4.0",
    title: "Production Techniques",
    color: "border-purple-200 bg-purple-50/40 text-purple-700",
    iconBg: "bg-purple-100 text-purple-800",
    links: [
      { name: "4.1 Repairing Garments (Stitches)", path: "/grade-5/agriculture-nutrition/production-techniques/repairing-garments" },
      { name: "4.2 Innovative Spatial Gardens", path: "/grade-5/agriculture-nutrition/production-techniques/vertical-horizontal-gardens" },
    ]
  }
];

export default function AgricultureNutritionDashboard() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8 rounded-2xl shadow-sm">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Primary School Portal</span>
        <h1 className="text-4xl font-black mt-1">Grade 5 Agriculture & Nutrition</h1>
        <p className="text-slate-300 mt-2 max-w-2xl text-sm leading-relaxed">
          Syllabus-mapped learning modules anchored on the 2024 Revised Kenya Institute of Curriculum Development (KICD) framework.
        </p>
      </div>

      {/* Grid Layout of Strands */}
      <div className="grid md:grid-cols-2 gap-6">
        {strands.map((strand) => (
          <div key={strand.id} className={`border p-5 rounded-2xl space-y-4 shadow-sm transition-all hover:shadow-md ${strand.color}`}>
            <div className="flex items-center space-x-3">
              <span className={`text-xs font-black px-2.5 py-1 rounded-md tracking-wider ${strand.iconBg}`}>
                STRAND {strand.id}
              </span>
              <h2 className="text-xl font-bold text-slate-800">{strand.title}</h2>
            </div>
            
            <ul className="space-y-2 bg-white/80 p-3 rounded-xl border border-slate-100">
              {strand.links.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.path} 
                    className="flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 hover:underline p-1.5 rounded transition-colors"
                  >
                    <span className="text-slate-300 mr-2">🗂️</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Full-Width Capstone CSL Section */}
      <div className="border border-amber-200 bg-amber-50/30 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2 py-0.5 rounded">APPENDIX I & II</span>
            <h2 className="text-lg font-bold text-slate-800">Integrated Community Service Learning Project</h2>
          </div>
          <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
            Annual cross-subject experiential module bridging classroom agronomic theory with real-world ecosystem troubleshooting, community outreach, and non-formal action paths.
          </p>
        </div>
        <div>
          <Link 
            href="/grade-5/agriculture-nutrition/community-project" 
            className="inline-flex items-center bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl tracking-wide transition-colors shadow-sm whitespace-nowrap"
          >
            Launch Project Hub →
          </Link>
        </div>
      </div>
    </div>
  );
}
