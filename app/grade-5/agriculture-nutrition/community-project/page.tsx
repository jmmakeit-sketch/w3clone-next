import React from 'react';
import Link from 'next/link';

export default function CommunityProjectHub() {
  const projectPhases = [
    {
      step: "01",
      title: "Problem Identification",
      bg: "bg-emerald-50 border-emerald-200 text-emerald-800",
      badge: "Week 1-2",
      desc: "Surveying local homesteads to map soil degradation, unmanaged organic waste vectors, or poor crop moisture conservation approaches."
    },
    {
      step: "02",
      title: "Resource & Solution Mapping",
      bg: "bg-sky-50 border-sky-200 text-sky-800",
      badge: "Week 3-4",
      desc: "Designing localized organic waste pits, sourcing safe deterrents for wild animal crop destruction, and collecting discarded plastics for innovative gardens."
    },
    {
      step: "03",
      title: "Community Execution Plan",
      bg: "bg-amber-50 border-amber-200 text-amber-800",
      badge: "Week 5-7",
      desc: "Setting up functional demonstration models (like vertical spatial arrays or hermetic grain units) in community spaces to educate neighbors."
    },
    {
      step: "04",
      title: "Reflective Exhibition",
      bg: "bg-purple-50 border-purple-200 text-purple-800",
      badge: "Week 8",
      desc: "Compiling learner activity portfolios, tracking collective feedback, and reviewing non-formal community impact metrics."
    }
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      {/* Breadcrumb Navigation */}
      <div className="text-xs font-semibold text-slate-500 space-x-2">
        <Link href="/grade-5/agriculture-nutrition" className="hover:text-slate-800 hover:underline">
          Grade 5 Agriculture & Nutrition
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-bold">Community Project Hub</span>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-amber-700 to-amber-900 text-white p-8 rounded-2xl shadow-sm space-y-3">
        <span className="bg-amber-600/50 text-amber-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-amber-500/30">
          Appendix I & II — Core Capstone
        </span>
        <h1 className="text-3xl md:text-4xl font-black">Integrated Community Service Learning Project</h1>
        <p className="text-amber-100 text-sm max-w-3xl leading-relaxed">
          An experiential cross-subject framework designed to channel classroom agronomic insights, waste safety strategies, and innovative gardening techniques directly into solving critical localized community issues.
        </p>
      </div>

      {/* Strategic Project Matrix */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Syllabus-Mapped Implementation Roadmap</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {projectPhases.map((phase) => (
            <div key={phase.step} className={`border p-5 rounded-xl space-y-3 shadow-xs flex flex-col justify-between ${phase.bg}`}>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-black opacity-40">{phase.step}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/80 px-2 py-0.5 rounded border border-inherit">
                    {phase.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold">{phase.title}</h3>
                <p className="text-xs leading-relaxed opacity-90">{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cross-Subject Core Values Ledger */}
      <div className="grid md:grid-cols-3 gap-4 border-t pt-6">
        <div className="p-4 bg-slate-50 border rounded-xl space-y-1">
          <span className="text-sm font-bold text-slate-800 block">💡 Core Competency</span>
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong>Citizenship & Collaboration:</strong> Learners work hand-in-hand with local agricultural officers, community leaders, and peers to secure local food frameworks.
          </p>
        </div>
        <div className="p-4 bg-slate-50 border rounded-xl space-y-1">
          <span className="text-sm font-bold text-slate-800 block">🌿 Embedded Values</span>
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong>Social Justice & Responsibility:</strong> Bridging environmental equity gaps by deploying sustainable soil care and crop safety models directly to disadvantaged households.
          </p>
        </div>
        <div className="p-4 bg-slate-50 border rounded-xl space-y-1">
          <span className="text-sm font-bold text-slate-800 block">⛓️ Non-Formal Pathways</span>
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong>Agriculture Clubs Partnership:</strong> Translating project outcomes directly into persistent institutional actions like 4-K Clubs and Environmental Youth Action panels.
          </p>
        </div>
      </div>
    </div>
  );
}
