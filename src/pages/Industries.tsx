import React, { useState } from 'react';
import { PageId } from '../types';
import { INDUSTRIES } from '../data/companyData';
import {
  Flame,
  Zap,
  Building,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  ShieldCheck,
  Award
} from 'lucide-react';

interface IndustriesProps {
  onNavigate: (page: PageId) => void;
  onOpenRfq: () => void;
  onOpenProfile: () => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onNavigate, onOpenRfq, onOpenProfile }) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(INDUSTRIES[0].id);
  const activeIndustry = INDUSTRIES.find((ind) => ind.id === selectedIndustryId) || INDUSTRIES[0];

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20">
              Sector Expertise
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
              Powering Critical Heavy Industrial Sectors
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Quantum Dynamics (Public) Limited brings specialized engineering acumen, ASME-certified welders, and heavy rigging assets tailored to the unique technical and safety demands of key national industries.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Navigation Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {INDUSTRIES.map((ind) => {
            const isActive = ind.id === selectedIndustryId;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustryId(ind.id)}
                className={`p-3.5 rounded-lg border text-center transition-all flex flex-col items-center justify-center gap-2 ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-amber-500'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span className="text-xs font-bold font-heading">{ind.title}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Industry Deep Dive */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs p-6 sm:p-10 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                Industrial Sector Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
                {activeIndustry.title}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 italic">
                {activeIndustry.subtitle}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeIndustry.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                {activeIndustry.keyCodes.map((code, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-100 text-slate-800 font-mono text-[11px] px-2.5 py-1 rounded border border-slate-200 font-medium"
                  >
                    Code: {code}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm aspect-4/3 relative">
                <img
                  src={activeIndustry.image}
                  alt={activeIndustry.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                  <div className="font-bold text-amber-400 font-heading">QDCL Project Footprint</div>
                  <div className="text-[11px] text-slate-300">Certified for high hazard zone execution</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Applications & Reference Clients */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-200">
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Key Sector Applications Delivered by QDCL
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                {activeIndustry.applications.map((app, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Major Client & Project References in Pakistan
              </h4>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2 text-xs">
                <div className="text-slate-600">
                  QDCL engineers and technicians have executed works for leading operators:
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {activeIndustry.keyClients.map((client, idx) => (
                    <span
                      key={idx}
                      className="bg-white px-3 py-1.5 rounded border border-slate-200 text-slate-800 font-semibold shadow-2xs text-xs"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
            <span className="text-xs text-slate-500">
              Need technical documentation, vendor pre-qualification, or preliminary design review?
            </span>
            <button
              onClick={onOpenRfq}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-amber-600 rounded-md transition-colors flex items-center gap-1.5"
            >
              <span>Submit Sector Tender RFQ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Cross-Sector Industrial Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-100 rounded-xl p-8 border border-slate-200 space-y-6">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold font-heading text-slate-950">
              Global Engineering Code Compliance
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Every weld, foundation, and structural member fabricated by Quantum Dynamics is inspected and verified according to statutory international engineering codes.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900 font-mono">ASME Sec VIII / I</div>
              <div className="text-[11px] text-slate-500">Pressure vessels, boiler drums & heat exchanger code.</div>
            </div>

            <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900 font-mono">API 650 & 620</div>
              <div className="text-[11px] text-slate-500">Atmospheric and low-pressure crude hydrocarbon storage tanks.</div>
            </div>

            <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900 font-mono">AWS D1.1 / D1.5</div>
              <div className="text-[11px] text-slate-500">Structural steel and highway bridge welding inspection.</div>
            </div>

            <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900 font-mono">ASME B31.3 / B31.1</div>
              <div className="text-[11px] text-slate-500">Chemical process piping & high-pressure steam power piping.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
