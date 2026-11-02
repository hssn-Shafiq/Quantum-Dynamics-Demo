import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, IMAGES, PROJECTS, SERVICES } from '../data/companyData';
import {
  ArrowRight,
  ShieldCheck,
  FileDown,
  Building,
  Flame,
  Zap,
  Hammer,
  Truck,
  CheckCircle2,
  ChevronRight,
  Layers,
  Award,
  Factory
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageId) => void;
  onOpenRfq: () => void;
  onOpenProfile: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onOpenRfq, onOpenProfile }) => {
  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />

        {/* Ambient subtle glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-16 sm:pb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20">
                <Factory className="w-3.5 h-3.5" />
                <span>Quantum Dynamics (Public) Limited</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight text-white text-balance">
                Engineering the Future with Industrial Precision
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Established mechanical contracting, heavy steel fabrication, and industrial construction firm. Delivering high-pressure piping, refinery modules, power boilers, and civil infrastructure across Pakistan.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenRfq}
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-md transition-all shadow-lg shadow-amber-900/30 flex items-center gap-2"
                >
                  <span>Request Project Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenProfile}
                  className="px-5 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-md transition-all flex items-center gap-2"
                >
                  <FileDown className="w-4 h-4 text-amber-400" />
                  <span>Company Profile (PDF)</span>
                </button>
              </div>

              {/* Quick Trust Credentials */}
              <div className="pt-4 border-t border-slate-800/90 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>ISO 9001 / 45001 Certified</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>ASME & API Standards</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-sky-400" />
                  <span>15,000 m² Port Qasim Yard</span>
                </span>
              </div>
            </div>

            {/* Right Focal Carrier Image (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 aspect-16/10 sm:aspect-4/3">
                <img
                  src={IMAGES.hero}
                  alt="Quantum Dynamics industrial construction and heavy engineering site at twilight"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-slate-900/90 backdrop-blur-md rounded-lg border border-slate-700 text-xs">
                  <div className="flex items-center justify-between text-amber-400 font-semibold mb-1">
                    <span>Field Operations & Erection</span>
                    <span className="text-slate-400 font-mono text-[11px]">Ref: QDCL-FIELD</span>
                  </div>
                  <p className="text-slate-300 text-[11px]">
                    Heavy equipment rigging, structural steel assembly, and process piping installation under stringent ASME Section IX specifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Key Metrics Strip - Positioned full-width below the hero split */}
        <div className="bg-slate-900 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.stats.map((stat, i) => (
              <div key={i} className="text-center sm:text-left border-l-0 sm:border-l sm:first:border-l-0 border-slate-800 sm:pl-6">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading font-mono tabular-nums tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              Multidisciplinary Contracting
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading tracking-tight mt-1">
              Core Engineering & Construction Services
            </h2>
          </div>
          <button
            onClick={() => {
              onNavigate('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-semibold text-slate-900 hover:text-amber-600 transition-colors flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>Explore All 6 Service Disciplines</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 6).map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group"
            >
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded font-semibold">
                  0{index + 1}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {service.tagline}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-500 font-medium">
                    {service.standards[0]}
                  </span>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-slate-800 hover:text-amber-600 transition-colors flex items-center gap-1"
                  >
                    <span>Capabilities</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Target Industries Grid */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Proven Sector Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
              Serving Critical Industrial Sectors
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              From high-pressure hydrocarbon terminals to megawatt power plants and cement lines, our engineering complies with global codes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-950/70 border border-slate-800 rounded-lg space-y-3 hover:border-slate-700 transition-colors">
              <div className="w-10 h-10 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-white">Oil & Gas Refining & Storage</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Bulk hydrocarbon storage terminals (API 650), gas compressor stations, high-pressure reception pipelines, and refinery modular installations.
              </p>
              <div className="text-[11px] text-slate-500 pt-1">
                Clients: OGDCL · PARCO · PSO · MOL Pakistan
              </div>
            </div>

            <div className="p-6 bg-slate-950/70 border border-slate-800 rounded-lg space-y-3 hover:border-slate-700 transition-colors">
              <div className="w-10 h-10 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-white">Thermal & Hydro Power</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Turbine hall structural steel, P91/P22 high-pressure steam pipelines, boiler water feed loops, and cooling water penstock piping.
              </p>
              <div className="text-[11px] text-slate-500 pt-1">
                Clients: HUBCO · K-Electric · WAPDA · Engro Power
              </div>
            </div>

            <div className="p-6 bg-slate-950/70 border border-slate-800 rounded-lg space-y-3 hover:border-slate-700 transition-colors">
              <div className="w-10 h-10 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-white">Cement Manufacturing Lines</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rotary kiln shell segment erection, multi-cyclone preheaters, vertical roller mills, and high-capacity clinker storage sheds.
              </p>
              <div className="text-[11px] text-slate-500 pt-1">
                Clients: Lucky Cement · Bestway · DG Khan · Fauji Cement
              </div>
            </div>

            <div className="p-6 bg-slate-950/70 border border-slate-800 rounded-lg space-y-3 hover:border-slate-700 transition-colors">
              <div className="w-10 h-10 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-white">Fertilizers & Chemicals</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Urea prilling towers, primary reformer headers, exotic alloy high-pressure piping, and annual planned shutdown maintenance.
              </p>
              <div className="text-[11px] text-slate-500 pt-1">
                Clients: Fauji Fertilizer (FFC) · Engro Fertilizers · Fatima
              </div>
            </div>

            <div className="p-6 bg-slate-950/70 border border-slate-800 rounded-lg space-y-3 hover:border-slate-700 transition-colors">
              <div className="w-10 h-10 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Hammer className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-white">Heavy Steel Fabrication</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pre-engineered buildings, pipe racks, industrial platforms, and custom built-up plate girders fabricated in our 15,000 m² yard.
              </p>
              <div className="text-[11px] text-slate-500 pt-1">
                Capacity: 1,200 Metric Tons / Month
              </div>
            </div>

            <div className="p-6 bg-slate-950/70 border border-slate-800 rounded-lg space-y-3 hover:border-slate-700 transition-colors">
              <div className="w-10 h-10 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-white">Civil & Transport Infrastructure</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Steel girder bridges, deep machine piling, massive equipment foundations, and multi-bay logistics warehouses.
              </p>
              <div className="text-[11px] text-slate-500 pt-1">
                Standards: AASHTO LRFD · ACI 318 · AWS D1.5
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              Track Record of Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading tracking-tight mt-1">
              Featured Reference Projects
            </h2>
          </div>
          <button
            onClick={() => {
              onNavigate('projects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-semibold text-slate-900 hover:text-amber-600 transition-colors flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>View Complete Project Portfolio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PROJECTS.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="relative h-48 bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-slate-950/80 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded">
                  {project.tonnageOrScale}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-amber-600 tracking-wider">
                    {project.categoryLabel} · {project.location}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-heading leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed pt-1">
                    {project.scope}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Delivered: {project.year}</span>
                  <button
                    onClick={() => {
                      onNavigate('projects');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1"
                  >
                    <span>Project Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HSE & Safety Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                Uncompromising Safety Culture
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
                Zero Harm Philosophy & 5.2M+ Safe Man-Hours
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                At Quantum Dynamics (Public) Limited, every operation begins and ends with safety. We enforce mandatory 100% PPE compliance, daily pre-task toolbox talks, dynamic Job Safety Analysis (JSA), and certified scaffolding protocols across all project sites in Pakistan.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ISO 45001:2018 Certified</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Certified Riggers & Welders</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Daily Job Safety Analysis (JSA)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-lg border border-slate-200 shadow-xs text-center space-y-3">
              <div className="text-3xl font-extrabold font-heading text-slate-950 font-mono">
                5,240,000+
              </div>
              <div className="text-xs font-bold uppercase text-amber-600 tracking-wider">
                Safe Man-Hours Without LTI
              </div>
              <p className="text-[11px] text-slate-500">
                Audited safety record covering heavy erection, high-altitude structural assembly, and confined space operations.
              </p>
              <button
                onClick={() => onNavigate('hse')}
                className="w-full py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
              >
                View HSE & Quality Policy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-extrabold font-heading text-white">
              Planning Your Next Industrial Construction Project?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Connect with our senior engineering estimators. We deliver technical proposals, preliminary scheduling, and detailed costings.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenRfq}
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-md transition-colors shadow-md"
            >
              Request a Quotation
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-3 text-xs sm:text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
            >
              Contact Offices
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
