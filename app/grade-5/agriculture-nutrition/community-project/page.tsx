import React from 'react';

export default function CommunityServiceLearning() {
  const steps = [
    { title: "1. Preparation Phase", desc: "Map core competencies, source local materials, align stakeholder timelines (parents/teachers), and set up observation checklists." },
    { title: "2. Implementation Phase", desc: "Assign structured group roles, track continuous activity participation, and run formative rubric evaluations on the process." },
    { title: "3. Reflection Loop", desc: "Conduct peer self-evaluation circles mapping what succeeded, what failed, what can be done differently, and key takeaways." }
  ];

  const initiatives = [
    { title: "Soil Conservation Action", work: "Identify erosion or nutrient-deficient layouts in the school community and implement structural remediation." },
    { title: "Water Preservation Audit", work: "Map structural water wastage leakage points on school premises and install micro-catchment solutions." },
    { title: "Avian Biodiversity Support", work: "Design and build localized bird feeding tables using excess kitchen food scraps to nourish wild birds safely." }
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      {/* Header Banner */}
      <div className="border-b pb-4">
        <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Appendix 1 & 2</span>
        <h1 className="text-3xl font-extrabold text-slate-800 mt-1">Integrated Community Service Learning (CSL)</h1>
        <p className="text-slate-600 mt-2">Connecting classroom agronomic theories to real-life eco-system problems and community interactions.</p>
      </div>

      {/* CSL Methodology Steps */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800">The Whole School Approach (WSA) Iteration Cycle</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <div key={index} className="p-4 border rounded-xl bg-slate-50 border-slate-200">
              <h3 className="font-bold text-slate-800 text-base mb-1">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Non-Formal Initiatives Matrix */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Suggested Syllabus Non-Formal Activities</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {initiatives.map((init, index) => (
            <div key={index} className="p-4 border border-amber-100 bg-amber-50/30 rounded-xl">
              <h3 className="font-bold text-amber-950 text-sm flex items-center">
                <span className="mr-2">🌱</span> {init.title}
              </h3>
              <p className="text-xs text-slate-700 mt-2 leading-relaxed">{init.work}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Evaluation Safeguard Note */}
      <div className="p-4 border border-slate-200 rounded-xl bg-slate-100 text-xs text-slate-600 leading-relaxed">
        <strong>KICD Assessment Criteria Notice:</strong> CSL evaluations are group-centric. Instructors deploy explicit metrics to grade both the live active process loop and the final functional outputs, tracking Core Competency execution alongside basic subject knowledge.
      </div>
    </div>
  );
}
