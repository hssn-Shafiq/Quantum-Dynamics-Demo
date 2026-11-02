import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Mail, FileDown, Menu, X, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenRfq: () => void;
  onOpenProfile: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenRfq,
  onOpenProfile,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About QD' },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries' },
    { id: 'projects', label: 'Projects & Experience' },
    { id: 'hse', label: 'HSE & Quality' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 text-xs py-1.5 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="text-amber-400 font-semibold uppercase tracking-wider text-[11px]">Domain:</span>
              <span className="text-white font-mono">{COMPANY_INFO.domain}</span>
            </span>
            <span aria-hidden="true" className="text-slate-700">|</span>
            <a
              href={`tel:${COMPANY_INFO.phonePrimary}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{COMPANY_INFO.phonePrimary}</span>
            </a>
            <span aria-hidden="true" className="text-slate-700">|</span>
            <a
              href={`mailto:${COMPANY_INFO.emailGeneral}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>{COMPANY_INFO.emailGeneral}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>ISO 9001 · ISO 45001 · ASME Compliant</span>
            </span>
            <button
              onClick={onOpenProfile}
              className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-medium transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download Company Profile (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Following Top Bar Contract: Zone 1 (Brand) - Zone 2 (4-6 links) - Zone 3 (1 action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Single text wordmark with industrial presence */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-600 rounded"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded bg-slate-900 flex items-center justify-center font-heading font-extrabold text-white text-base tracking-tighter shadow-sm border border-slate-800">
              <span className="text-amber-500">Q</span>D
            </div>
            <div>
              <div className="text-lg font-extrabold tracking-tight text-slate-950 font-heading leading-tight whitespace-nowrap shrink-0 group-hover:text-amber-600 transition-colors">
                QUANTUM DYNAMICS
              </div>
              <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider whitespace-nowrap">
                (Public) Limited · Engineering & Construction
              </div>
            </div>
          </div>
        </button>

        {/* Zone 2: Single-line clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 font-medium ${
                  isActive
                    ? 'text-slate-950 border-amber-500 font-semibold'
                    : 'text-slate-600 border-transparent hover:text-slate-950 hover:border-slate-300'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenRfq}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-md hover:bg-amber-600 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
          >
            <span>Request a Quote / RFQ</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-md transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-1 pb-4 border-b border-slate-100">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3 py-2.5 rounded text-sm font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-amber-50 text-amber-900 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>

          <div className="pt-4 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRfq();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-900 rounded-md hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
            >
              <span>Submit RFQ / Enquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProfile();
              }}
              className="w-full py-2 px-4 text-xs font-medium text-slate-700 bg-slate-100 rounded-md hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              <FileDown className="w-4 h-4 text-amber-600" />
              <span>Company Profile (PDF Booklet)</span>
            </button>

            <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="font-mono">{COMPANY_INFO.phonePrimary}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-600" />
                <a href={`mailto:${COMPANY_INFO.emailGeneral}`}>{COMPANY_INFO.emailGeneral}</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
