import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Mail, MapPin, FileDown, ShieldCheck, ArrowUpRight, Award, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenRfq: () => void;
  onOpenProfile: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenRfq, onOpenProfile }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top CTA Band */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-xl p-8 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
              Ready for Engineering & Fabrication Excellence
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1 mb-2">
              Have an Upcoming Industrial Tender or Project?
            </h3>
            <p className="text-sm text-slate-400">
              Submit your Bills of Quantities (BOQ), mechanical drawings, or project requirements. Our estimation team responds within 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenRfq}
              className="px-5 py-3 text-sm font-semibold text-white bg-amber-600 rounded-md hover:bg-amber-500 transition-colors shadow-md flex items-center gap-2"
            >
              <span>Submit Project RFQ</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenProfile}
              className="px-4 py-3 text-sm font-medium text-slate-200 bg-slate-800 border border-slate-700 rounded-md hover:bg-slate-700 transition-colors flex items-center gap-2"
            >
              <FileDown className="w-4 h-4 text-amber-400" />
              <span>Download PDF Profile</span>
            </button>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Corporate Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center font-heading font-extrabold text-slate-950 text-sm">
                QD
              </div>
              <div>
                <h4 className="text-base font-extrabold text-white font-heading tracking-tight">
                  QUANTUM DYNAMICS
                </h4>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                  (Public) Limited
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Established multi-disciplinary engineering, heavy steel fabrication, and industrial construction contracting firm serving Oil & Gas, Power, Cement, and Infrastructure sectors.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div><span className="text-slate-200 font-semibold">Official Domain:</span> {COMPANY_INFO.domain}</div>
              <div><span className="text-slate-200 font-semibold">Incorporation:</span> SECP Registered Public Limited Co.</div>
              <div><span className="text-slate-200 font-semibold">Legacy Reference:</span> Formerly QDPL</div>
            </div>
          </div>

          {/* Col 2: Services & Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Engineering Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Mechanical Contracting & Erection
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Heavy Structural Steel Fabrication
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Industrial Process Piping & Pipelines
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Civil Works & Heavy Equipment Foundations
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Plant Outages & Shutdown Maintenance
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Non-Destructive Testing (NDT) & QA/QC
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Sectors & Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Target Industries
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('industries')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Oil & Gas Processing & Storage
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('industries')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Petrochemicals & Specialty Chemicals
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('industries')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Thermal & Hydro Power Generation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('industries')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Cement Kilns & Clinker Systems
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('industries')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Fertilizer Plants & Urea Granulation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('industries')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Heavy Transportation Bridges & Infrastructure
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Locations & Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Offices & Fabrication Yards
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200">Head Office:</strong>
                  <p>Plot 42-B, Industrial Area, Sector I-9/2, Islamabad, Pakistan</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200">Heavy Fabrication Yard:</strong>
                  <p>Yard 14, Phase II, Port Qasim Industrial Zone, Karachi</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="text-slate-200 hover:text-white font-mono">
                  {COMPANY_INFO.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.emailGeneral}`} className="text-slate-200 hover:text-white">
                  {COMPANY_INFO.emailGeneral}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Badges Strip */}
        <div className="py-6 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ISO 9001:2015 (QMS)</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ISO 45001:2018 (HSE)</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ISO 14001:2015 (EMS)</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Award className="w-4 h-4 text-amber-400" />
              <span>ASME Sec VIII & AWS D1.1</span>
            </span>
          </div>
          <div className="text-[11px] text-slate-500">
            Routing mailboxes: info@qdcl.com.pk · projects@qdcl.com.pk · hr@qdcl.com.pk
          </div>
        </div>

        {/* Bottom Copyright & Legal Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} Quantum Dynamics (Public) Limited. All rights reserved. Registered in Pakistan.
          </p>
          <div className="flex items-center gap-4">
            <button onClick={() => handleNav('about')} className="hover:text-slate-400 transition-colors">Corporate Governance</button>
            <span>·</span>
            <button onClick={() => handleNav('hse')} className="hover:text-slate-400 transition-colors">HSE Commitment</button>
            <span>·</span>
            <button onClick={() => handleNav('contact')} className="hover:text-slate-400 transition-colors">Tender Inquiries</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
