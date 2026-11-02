import React, { useState } from 'react';
import { COMPANY_INFO, HSE_STANDARDS, MACHINERY_INVENTORY, PROJECTS, SERVICES } from '../data/companyData';
import { X, FileDown, Printer, ChevronLeft, ChevronRight, ShieldCheck, CheckCircle2, Award, Building2 } from 'lucide-react';

interface CompanyProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRfq: () => void;
}

export const CompanyProfileModal: React.FC<CompanyProfileModalProps> = ({
  isOpen,
  onClose,
  onOpenRfq,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 5;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate a printable/downloadable text or trigger print dialog for saving as PDF
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-slate-300">
        {/* Header Bar */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-amber-500 text-slate-950 font-bold flex items-center justify-center font-heading text-sm">
              QD
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold font-heading">
                Quantum Dynamics (Public) Limited — Official Corporate Profile
              </h3>
              <p className="text-[11px] text-slate-400">
                Document Ref: QDCL-CORP-PROF-2026-V1 · Domain: {COMPANY_INFO.domain}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print Document"
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors hidden sm:inline-flex"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white rounded flex items-center gap-1.5 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Page Switcher Tabs */}
        <div className="bg-slate-100 border-b border-slate-200 px-6 py-2 flex items-center justify-between text-xs overflow-x-auto">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-3 py-1 rounded font-medium whitespace-nowrap transition-colors ${
                  currentPage === pageNum
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200 font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Page {pageNum} {pageNum === 1 ? '(Executive Summary)' : pageNum === 2 ? '(Services)' : pageNum === 3 ? '(Fabrication Yard)' : pageNum === 4 ? '(Projects)' : '(HSE & Quality)'}
              </button>
            ))}
          </div>
          <div className="hidden sm:flex items-center gap-1 text-slate-500 font-mono">
            <span>{currentPage}</span> of <span>{totalPages}</span>
          </div>
        </div>

        {/* Printable/Scrollable Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-white font-sans text-slate-800 space-y-6">
          {currentPage === 1 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b-2 border-slate-900 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div>
                  <span className="text-amber-600 font-bold text-xs uppercase tracking-wider">
                    Corporate Engineering & Construction Profile
                  </span>
                  <h1 className="text-3xl font-extrabold text-slate-950 font-heading">
                    Quantum Dynamics (Public) Limited
                  </h1>
                  <p className="text-sm text-slate-600 mt-1 italic">
                    Engineering the Future · Registered with SECP as a Public Limited Entity
                  </p>
                </div>
                <div className="text-xs text-right sm:text-right text-slate-600">
                  <p><strong>Official Web:</strong> {COMPANY_INFO.domain}</p>
                  <p><strong>Primary Tel:</strong> {COMPANY_INFO.phonePrimary}</p>
                  <p><strong>Email:</strong> {COMPANY_INFO.emailGeneral}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
                {COMPANY_INFO.stats.map((s, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                      {s.value}
                    </div>
                    <div className="text-[11px] text-slate-500 uppercase mt-0.5 font-medium">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 font-heading border-b pb-1">
                  01. Executive Overview & Corporate Evolution
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Quantum Dynamics (Public) Limited (formerly operating as QDPL) is an established Pakistan-based engineering, heavy structural steel fabrication, and industrial mechanical/civil contracting enterprise. With over two decades of technical delivery, QDCL provides turnkey solutions across Oil & Gas, Petrochemicals, Power Generation, Cement, and Heavy Infrastructure.
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The company operates a dedicated 15,000 m² heavy steel fabrication yard at Port Qasim, Karachi, supported by administrative engineering headquarters in Islamabad and regional liaisons in Lahore. The company adheres strictly to ASME, API, and AWS international codes, maintaining certifications in ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                    Our Vision
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To be the leading indigenous engineering and heavy fabrication contractor recognized regionally for zero-compromise safety, technical precision, and on-schedule execution of mission-critical industrial facilities.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                    Our Core Mission
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To deliver heavy engineering, structural steel, piping, and construction services through trained professionals, advanced machinery, and rigorous QA/QC practices, creating enduring value for our industrial clients.
                  </p>
                </div>
              </div>
            </div>
          )}

          {currentPage === 2 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b-2 border-slate-900 pb-2">
                <h2 className="text-xl font-bold text-slate-950 font-heading">
                  02. Core Engineering & Construction Services
                </h2>
                <p className="text-xs text-slate-500">Comprehensive multidisciplinary execution capabilities</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICES.map((srv) => (
                  <div key={srv.id} className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                    <h3 className="text-xs font-bold text-slate-900 font-heading">
                      {srv.title}
                    </h3>
                    <p className="text-[11px] text-slate-600 leading-normal">
                      {srv.description}
                    </p>
                    <div className="text-[10px] text-slate-500 font-medium">
                      <span className="font-semibold text-slate-700">Standards:</span> {srv.standards.join(' · ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentPage === 3 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b-2 border-slate-900 pb-2">
                <h2 className="text-xl font-bold text-slate-950 font-heading">
                  03. Heavy Fabrication Facility & Machinery Inventory
                </h2>
                <p className="text-xs text-slate-500">Port Qasim Industrial Yard & Dedicated Mechanical Fleet</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2 text-xs">
                <div className="font-bold text-slate-900">Yard Specifications (Port Qasim, Karachi):</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-600 text-[11px]">
                  <div>· Total Area: 15,000 sq. meters</div>
                  <div>· Covered Shop: 5,500 sq. meters</div>
                  <div>· Monthly Steel Capacity: 1,200 MT</div>
                  <div>· Blast Chamber: SA 2.5 Continuous</div>
                </div>
              </div>

              <div className="overflow-x-auto border border-slate-200 rounded-lg">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="py-2.5 px-3">Equipment / Machinery</th>
                      <th className="py-2.5 px-3">Discipline</th>
                      <th className="py-2.5 px-3">Rated Specification</th>
                      <th className="py-2.5 px-3 text-right">Units</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600 text-[11px]">
                    {MACHINERY_INVENTORY.map((m, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="py-2 px-3 font-medium text-slate-800">{m.name}</td>
                        <td className="py-2 px-3">{m.category}</td>
                        <td className="py-2 px-3">{m.capacity}</td>
                        <td className="py-2 px-3 text-right font-mono font-semibold">{m.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {currentPage === 4 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b-2 border-slate-900 pb-2">
                <h2 className="text-xl font-bold text-slate-950 font-heading">
                  04. Selected Major Project Track Record
                </h2>
                <p className="text-xs text-slate-500">Representative reference projects delivered across Pakistan</p>
              </div>

              <div className="space-y-3">
                {PROJECTS.map((p) => (
                  <div key={p.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex flex-col sm:flex-row justify-between gap-3 text-xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 font-heading">{p.title}</span>
                        <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-medium">{p.categoryLabel}</span>
                      </div>
                      <p className="text-slate-600 text-[11px]">{p.scope}</p>
                      <div className="text-[10px] text-slate-500">
                        Location: {p.location} · Client: {p.client}
                      </div>
                    </div>
                    <div className="text-right sm:text-right shrink-0">
                      <div className="font-bold text-slate-900 font-mono text-[11px]">{p.tonnageOrScale}</div>
                      <div className="text-[10px] text-slate-500">Delivered {p.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentPage === 5 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b-2 border-slate-900 pb-2">
                <h2 className="text-xl font-bold text-slate-950 font-heading">
                  05. HSE Commitments, QA/QC & Official Contacts
                </h2>
                <p className="text-xs text-slate-500">Statutory certifications, contact points, and RFQ submission</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {HSE_STANDARDS.map((h, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span className="font-bold text-xs text-slate-900">{h.code}: {h.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-600">{h.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-slate-900 text-white rounded-lg space-y-3 text-xs">
                <h4 className="font-bold font-heading text-amber-400">
                  Headquarters & Procurement Inquiries
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300 text-[11px]">
                  <div>
                    <strong>Head Office:</strong>
                    <p>{COMPANY_INFO.headOffice}</p>
                  </div>
                  <div>
                    <strong>Fabrication Yard:</strong>
                    <p>{COMPANY_INFO.fabricationYard}</p>
                  </div>
                  <div>
                    <strong>Direct Lines:</strong>
                    <p>{COMPANY_INFO.phonePrimary} · {COMPANY_INFO.phoneDirect}</p>
                  </div>
                  <div>
                    <strong>Direct Mailboxes:</strong>
                    <p>{COMPANY_INFO.emailGeneral} · {COMPANY_INFO.emailProjects}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Bar */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Previous Page</span>
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
            >
              <span>Next Page</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenRfq();
            }}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-amber-600 rounded transition-colors"
          >
            Submit Enquiry Based on Profile
          </button>
        </div>
      </div>
    </div>
  );
};
