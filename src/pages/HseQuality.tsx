import React from 'react';
import { PageId } from '../types';
import { HSE_STANDARDS } from '../data/companyData';
import {
  ShieldCheck,
  HardHat,
  AlertTriangle,
  Award,
  CheckCircle2,
  FileCheck,
  Eye,
  Activity,
  Zap,
  Flame,
  FileDown
} from 'lucide-react';

interface HseQualityProps {
  onNavigate: (page: PageId) => void;
  onOpenRfq: () => void;
  onOpenProfile: () => void;
}

export const HseQuality: React.FC<HseQualityProps> = ({ onNavigate, onOpenRfq, onOpenProfile }) => {
  const ppeItems = [
    { name: 'EN 397 Industrial Hard Hats', detail: 'Mandatory color-coded safety helmets across all active zones.' },
    { name: 'EN ISO 20345 Steel-Toe Boots', detail: 'Impact and puncture-resistant steel midsole protective footwear.' },
    { name: 'EN 166 Impact Eye Protection', detail: 'High-velocity safety glasses with side shields and welding visors.' },
    { name: 'Flame Retardant Workwear (FRC)', detail: 'High-visibility certified flame-retardant coveralls on all plant sites.' },
    { name: 'EN 361 Fall Arrest Harnesses', detail: 'Full-body harnesses with twin lanyards and shock absorbers for work > 1.8m.' },
    { name: 'EN 388 Mechanical Gloves', detail: 'Cut-resistant and thermal gloves tailored for rigging and welding duties.' },
  ];

  const lifeSavingRules = [
    { title: 'Work Authorization', desc: 'Never begin hot work, confined space entry, or heavy lifting without a validated Permit to Work (PTW).' },
    { title: 'Energy Isolation (LOTO)', desc: 'Verify complete lockout and tagout of electrical, mechanical, and pressure sources before intervention.' },
    { title: 'Confined Space Entry', desc: 'Continuous atmospheric gas testing, dedicated standby watch, and verified rescue plan in place.' },
    { title: 'Bypassing Safety Controls', desc: 'Safety interlocks, relief valves, or machine guards must never be bypassed without written approval.' },
    { title: 'Fall Protection', desc: '100% positive tie-off required when working at heights exceeding 1.8 meters.' },
    { title: 'Suspended Loads', desc: 'Never walk or position personnel under a crane boom, hoisted pipe spool, or suspended load.' },
  ];

  const qaMethods = [
    { code: 'RT / CR', name: 'Radiographic Examination', desc: '100% volumetric weld inspection on high-pressure piping and API 650 tank butt welds.' },
    { code: 'UT / PAUT', name: 'Phased Array Ultrasonic', desc: 'Advanced ultrasonic flaw detection and thickness mapping for heavy structural plate welds.' },
    { code: 'MT / MPI', name: 'Magnetic Particle Testing', desc: 'Surface and sub-surface crack detection on ferromagnetic fillet welds and lifting lugs.' },
    { code: 'PT / DPT', name: 'Liquid Dye Penetrant', desc: 'Testing for stainless steel, alloy joints, and root run integrity on non-magnetic metals.' },
    { code: 'Hydro', name: 'Hydrostatic Pressure Testing', desc: 'Digital pressure data logging up to 600 bar to verify vessel and pipe hermetic integrity.' },
    { code: 'PMI', name: 'Positive Material Identification', desc: 'Handheld XRF alloy verification to ensure no material mix-ups in critical alloy circuits.' },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20">
              Zero Harm & Engineering Integrity
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
              Health, Safety, Environment & Quality (HSEQ)
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              At Quantum Dynamics (Public) Limited, safety and quality are not merely compliance items — they form the operational foundation of every weld, structural lift, and foundation pour.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Performance Snapshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                Our Non-Negotiable Commitment
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
                The "Zero Harm" Operating Principle
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Quantum Dynamics operates under an unequivocal Stop Work Authority (SWA) policy: every employee and subcontractor, regardless of hierarchy, is empowered and mandated to halt any task immediately if conditions are deemed unsafe.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-center">
                  <div className="text-2xl font-bold font-heading text-slate-950 font-mono">5.2M+</div>
                  <div className="text-[11px] text-slate-500 uppercase mt-0.5 font-medium">Safe Hours (Zero LTI)</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-center">
                  <div className="text-2xl font-bold font-heading text-slate-950 font-mono">0</div>
                  <div className="text-[11px] text-slate-500 uppercase mt-0.5 font-medium">Workplace Fatalities</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-center">
                  <div className="text-2xl font-bold font-heading text-slate-950 font-mono">100%</div>
                  <div className="text-[11px] text-slate-500 uppercase mt-0.5 font-medium">Daily Toolbox Compliance</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-900 text-white p-6 rounded-lg space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Stop Work Authority</span>
              </div>
              <h3 className="text-base font-bold font-heading">
                Every Worker Has the Power to Stop Work
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Safety trumps schedule. If any crew member identifies an uncontrolled hazard, lifting deviation, or defective rigging gear, work is halted with zero retribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mandatory PPE Policy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
            Site Protection
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading tracking-tight mt-1">
            Mandatory Personal Protective Equipment (PPE)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Standard mandatory gear enforced across all QDCL project sites, client plants, and Port Qasim yard facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ppeItems.map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2">
                <HardHat className="w-4 h-4 text-amber-600" />
                <h4 className="text-sm font-bold text-slate-900 font-heading">{item.name}</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Life Saving Rules */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Golden Directives
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
              Quantum Dynamics Life Saving Rules
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Mandatory rules strictly audited during every shift to prevent high-potential industrial incidents.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifeSavingRules.map((rule, idx) => (
              <div key={idx} className="p-5 bg-slate-950/80 rounded-lg border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-400">
                  <span className="font-mono text-xs font-bold bg-amber-500/10 px-2 py-0.5 rounded">
                    0{idx + 1}
                  </span>
                  <h4 className="text-sm font-bold font-heading text-white">{rule.title}</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Management & NDT Testing Protocols */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              Quality Assurance & Verification
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading tracking-tight mt-1">
              QA/QC & Non-Destructive Testing (NDT) Protocols
            </h2>
          </div>
          <button
            onClick={onOpenProfile}
            className="text-xs font-semibold text-slate-900 hover:text-amber-600 transition-colors flex items-center gap-1.5"
          >
            <FileDown className="w-4 h-4 text-amber-600" />
            <span>Download QA/QC Manual Summary</span>
          </button>
        </div>

        {/* ISO Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HSE_STANDARDS.map((s, idx) => (
            <div key={idx} className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-600" />
                <h4 className="text-sm font-bold text-slate-900 font-heading">{s.code}</h4>
              </div>
              <div className="text-xs font-semibold text-slate-800">{s.title}</div>
              <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* NDT Methods */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
          <div className="max-w-2xl">
            <h3 className="text-lg font-bold font-heading text-slate-950">
              ASNT Level II / III Non-Destructive Testing Methods Deployed
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Performed by ASNT and PCN certified inspectors in accordance with ASME Section V and client project specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {qaMethods.map((m, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-slate-900 font-heading">{m.name}</span>
                  <span className="text-[10px] font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-bold">
                    {m.code}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-2 text-xs text-slate-500 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <span>Third-Party Inspection (TPI) experience with Bureau Veritas, SGS Pakistan, TÜV Austria, and Velosi.</span>
            <button
              onClick={onOpenRfq}
              className="font-semibold text-amber-600 hover:text-amber-700 shrink-0"
            >
              Inquire About QA/QC Dossiers →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
