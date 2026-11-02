import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES } from '../data/companyData';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Layers,
  Sparkles,
  FileText,
  Sliders,
  Award
} from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: PageId) => void;
  onOpenRfq: (serviceId?: string) => void;
  onOpenProfile: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate, onOpenRfq, onOpenProfile }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);
  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  // Interactive Scope Estimator state
  const [estimatorDiscipline, setEstimatorDiscipline] = useState<'fabrication' | 'piping' | 'mechanical' | 'shutdown'>('fabrication');
  const [estimatorVolume, setEstimatorVolume] = useState<'small' | 'medium' | 'large'>('medium');

  const estimatorDetails = {
    fabrication: {
      small: { scale: '< 500 Metric Tons', timeline: '6 to 8 Weeks', crew: '40 Fabricators & Fitters', codes: 'AISC 360, AWS D1.1', cranes: '2x 50-Ton Cranes' },
      medium: { scale: '500 – 2,000 Metric Tons', timeline: '12 to 16 Weeks', crew: '120 Fabricators & Certified Welders', codes: 'AISC 360, AWS D1.1, EN 1090-2', cranes: '4x Gantry & Mobile Cranes' },
      large: { scale: '> 2,000 Metric Tons Mega Structure', timeline: '20 to 28 Weeks', crew: '250+ Multi-Discipline Team', codes: 'AISC 360, AWS D1.1, SA 2.5 Coating', cranes: 'Tandem 150T + Crawler Cranes' },
    },
    piping: {
      small: { scale: '< 5,000 Diameter-Inches Spooling', timeline: '4 to 6 Weeks', crew: '30 ASME IX Welders', codes: 'ASME B31.3 Process Piping', cranes: 'Mobile Yard Rigging' },
      medium: { scale: '5,000 – 25,000 Diameter-Inches', timeline: '10 to 14 Weeks', crew: '80 ASME IX TIG/Arc Welders', codes: 'ASME B31.3 / B31.1, PWHT', cranes: 'Automated Positioners + PWHT Consoles' },
      large: { scale: '> 25,000 Dia-Inches + Cross Country', timeline: '16 to 24 Weeks', crew: '180 Certified Welders & NDT Crew', codes: 'ASME B31.3, API 1104, 100% RT', cranes: 'Heavy Pipeline Trenching Rig' },
    },
    mechanical: {
      small: { scale: 'Individual Vessel / Skid Erection', timeline: '3 to 5 Weeks', crew: '25 Heavy Riggers & Millwrights', codes: 'API 650, ASME Sec VIII', cranes: '1x 100-Ton Hydraulic Crane' },
      medium: { scale: 'Turbine / Compressor Train Erection', timeline: '8 to 12 Weeks', crew: '60 Millwrights & Laser Aligners', codes: 'API 686, ASME Sec I & VIII', cranes: '2x 150-Ton Cranes + Jacking Skid' },
      large: { scale: 'Turnkey Power / Boiler BOP Package', timeline: '16 to 24 Weeks', crew: '160 Specialists', codes: 'ASME Sec I Power Boilers, API 650', cranes: '300-Ton Heavy Crawler Rig' },
    },
    shutdown: {
      small: { scale: '7-14 Days Fast-Track Unit Outage', timeline: '7 to 14 Days (24/7)', crew: '150 Round-the-clock Technicians', codes: 'API 510/570 Inspection Protocols', cranes: 'Dedicated Turnaround Fleet' },
      medium: { scale: '15-28 Days Full Plant Overhaul', timeline: '15 to 28 Days (24/7)', crew: '400 Multi-Discipline Tradesmen', codes: 'API 510/570, Hydro-blasting', cranes: 'Multi-crane Bundle Pullers' },
      large: { scale: '> 30 Days Major Refinery Revamp', timeline: '30 to 45 Days (24/7)', crew: '650+ Mobilized Workforce', codes: 'Full MDR & Statutory Re-certification', cranes: 'Full Heavy Outage Machinery Fleet' },
    },
  };

  const currentEstimate = estimatorDetails[estimatorDiscipline][estimatorVolume];

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20">
              Contracting Capabilities
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
              Comprehensive Mechanical, Fabrication & Civil Engineering
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Quantum Dynamics (Public) Limited provides turnkey execution from workshop pre-fabrication at Port Qasim to heavy on-site installation, welding, and statutory commissioning.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Service Disciplines Browser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Service Selector Tabs */}
          <div className="w-full lg:w-1/3 bg-white border border-slate-200 rounded-xl p-3 shadow-xs space-y-1">
            <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              Select Discipline
            </div>
            {SERVICES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setSelectedServiceId(s.id)}
                className={`w-full text-left px-3.5 py-3 rounded-lg text-xs font-medium transition-all flex items-center justify-between ${
                  selectedServiceId === s.id
                    ? 'bg-slate-900 text-white shadow-xs font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>
                  0{idx + 1}. {s.title}
                </span>
                <ArrowRight className={`w-3.5 h-3.5 ${selectedServiceId === s.id ? 'text-amber-400' : 'text-slate-400'}`} />
              </button>
            ))}
          </div>

          {/* Active Service Showcase Card */}
          <div className="w-full lg:w-2/3 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs space-y-6 p-6 sm:p-8">
            <div className="relative rounded-lg overflow-hidden h-64 sm:h-72 bg-slate-100">
              <img
                src={activeService.image}
                alt={activeService.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
                  Service Specification
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  {activeService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {activeService.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Core Execution Capabilities
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                {activeService.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-900 block mb-1">Applicable Engineering Codes:</span>
                <span className="text-slate-600">{activeService.standards.join(' · ')}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-900 block mb-1">Machinery & Fleet Deployed:</span>
                <span className="text-slate-600">{activeService.equipment.join(' · ')}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Available for single-discipline subcontracting or turnkey EPC packages.
              </span>
              <button
                onClick={() => onOpenRfq(activeService.id)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-md transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <span>Request Scope Quotation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Project Scope & Work Estimator Tool */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-xl p-8 sm:p-10 space-y-8 border border-slate-800">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Interactive Planning Tool
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
              Industrial Scope & Mobilization Estimator
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Select your expected discipline and scale to view typical delivery timelines, engineering codes, and dedicated resource deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  1. Project Discipline
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => setEstimatorDiscipline('fabrication')}
                    className={`p-2.5 rounded border text-left font-medium transition-colors ${
                      estimatorDiscipline === 'fabrication'
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                    }`}
                  >
                    Structural Steel
                  </button>
                  <button
                    onClick={() => setEstimatorDiscipline('piping')}
                    className={`p-2.5 rounded border text-left font-medium transition-colors ${
                      estimatorDiscipline === 'piping'
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                    }`}
                  >
                    Process Piping
                  </button>
                  <button
                    onClick={() => setEstimatorDiscipline('mechanical')}
                    className={`p-2.5 rounded border text-left font-medium transition-colors ${
                      estimatorDiscipline === 'mechanical'
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                    }`}
                  >
                    Mechanical Erection
                  </button>
                  <button
                    onClick={() => setEstimatorDiscipline('shutdown')}
                    className={`p-2.5 rounded border text-left font-medium transition-colors ${
                      estimatorDiscipline === 'shutdown'
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                    }`}
                  >
                    Plant Turnaround
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  2. Approximate Scale / Volume
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {(['small', 'medium', 'large'] as const).map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setEstimatorVolume(lvl)}
                      className={`py-2 px-3 rounded border text-center font-medium capitalize transition-colors ${
                        estimatorVolume === lvl
                          ? 'bg-white text-slate-950 border-white font-bold'
                          : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                      }`}
                    >
                      {lvl} Package
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Typical Project Parameters
                </span>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded">
                  ESTIMATE GUIDE ONLY
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-slate-900 rounded border border-slate-800">
                  <div className="text-slate-400 text-[11px]">Work Scope Scale</div>
                  <div className="text-sm font-bold text-white mt-0.5">{currentEstimate.scale}</div>
                </div>

                <div className="p-3 bg-slate-900 rounded border border-slate-800">
                  <div className="text-slate-400 text-[11px]">Estimated Duration</div>
                  <div className="text-sm font-bold text-white mt-0.5">{currentEstimate.timeline}</div>
                </div>

                <div className="p-3 bg-slate-900 rounded border border-slate-800">
                  <div className="text-slate-400 text-[11px]">Mobilized Workforce</div>
                  <div className="text-sm font-bold text-white mt-0.5">{currentEstimate.crew}</div>
                </div>

                <div className="p-3 bg-slate-900 rounded border border-slate-800">
                  <div className="text-slate-400 text-[11px]">Machinery Fleet</div>
                  <div className="text-sm font-bold text-white mt-0.5">{currentEstimate.cranes}</div>
                </div>
              </div>

              <div className="p-3 bg-slate-900/60 rounded text-[11px] text-slate-300 border border-slate-800">
                <span className="font-semibold text-amber-300">Statutory Codes:</span> {currentEstimate.codes}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => onOpenRfq()}
                  className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded transition-colors flex items-center gap-2"
                >
                  <span>Submit Exact BOQ / Tender for this Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
