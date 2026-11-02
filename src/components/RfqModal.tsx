import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';
import { X, CheckCircle2, Upload, FileText, Send, Building2, Phone, Mail } from 'lucide-react';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const RfqModal: React.FC<RfqModalProps> = ({ isOpen, onClose, defaultService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    serviceId: defaultService || 'mechanical-contracting',
    industry: 'oil-gas',
    scopeDetails: '',
    tonnage: '',
    targetDate: '',
  });

  const [attachedFileName, setAttachedFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable form routing to info@qdcl.com.pk / projects@qdcl.com.pk
    setTimeout(() => {
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      setSubmittedRef(`QDCL-RFQ-2026-${randomCode}`);
      setIsSubmitting(false);
    }, 600);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFileName(e.target.files[0].name);
    }
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setAttachedFileName(null);
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      serviceId: defaultService || 'mechanical-contracting',
      industry: 'oil-gas',
      scopeDetails: '',
      tonnage: '',
      targetDate: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-300">
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div>
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
              Procurement & Engineering Tendering
            </span>
            <h3 className="text-base sm:text-lg font-bold font-heading">
              Request for Quotation (RFQ) & Project Inquiry
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedRef ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-extrabold text-slate-900 font-heading">
                Tender Inquiry Successfully Routed
              </h4>
              <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                Your request has been dispatched to our engineering estimation office at <strong className="text-slate-800">projects@qdcl.com.pk</strong>.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 max-w-sm mx-auto text-xs text-slate-700">
              <div className="text-slate-500 mb-1">Official Inquiry Tracking Number</div>
              <div className="text-lg font-mono font-bold text-amber-600">{submittedRef}</div>
              <div className="text-[11px] text-slate-400 mt-1">
                Estimated review turnaround: within 24 business hours
              </div>
            </div>

            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
              >
                Close & Return to Website
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div className="text-xs text-slate-500 pb-1">
              Complete the project specifications below. For urgent requirements, please contact our contracts desk at <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="text-amber-600 font-semibold">{COMPANY_INFO.phonePrimary}</a>.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Engr. Asim Mehmood"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Fauji Fertilizer Co. / National Refinery"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Official Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Contact Phone / Mobile *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+92 300 1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Required Service Discipline *
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-white"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Industry Sector *
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-white"
                >
                  <option value="oil-gas">Oil & Gas (Upstream / Downstream)</option>
                  <option value="petrochemicals">Petrochemicals & Chemicals</option>
                  <option value="power-generation">Power Generation & BOP</option>
                  <option value="cement-manufacturing">Cement Manufacturing Lines</option>
                  <option value="fertilizer-plants">Fertilizer & Chemical Plants</option>
                  <option value="heavy-infrastructure">Heavy Civil & Infrastructure</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Estimated Tonnage / Scope Scale
                </label>
                <input
                  type="text"
                  placeholder="e.g. 850 MT Steel / 12km Piping / 4 Tanks"
                  value={formData.tonnage}
                  onChange={(e) => setFormData({ ...formData, tonnage: e.target.value })}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Target Mobilization / Start
                </label>
                <input
                  type="text"
                  placeholder="e.g. Q3 2026 / Immediate Outage"
                  value={formData.targetDate}
                  onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Project Scope Summary & Technical Specifications *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Please outline site location, key codes (e.g. ASME B31.3, API 650), materials, and expected contractor scope..."
                value={formData.scopeDetails}
                onChange={(e) => setFormData({ ...formData, scopeDetails: e.target.value })}
                className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>

            {/* File Attachment Upload */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Attach BOQ, Tender Document, or Drawings (Optional)
              </label>
              <div className="relative border border-dashed border-slate-300 rounded-lg p-3 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.dwg,.doc,.docx,.xls,.xlsx"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
                  <Upload className="w-4 h-4 text-amber-600" />
                  <span>
                    {attachedFileName ? (
                      <strong className="text-slate-900">{attachedFileName}</strong>
                    ) : (
                      'Click or drag PDF, Excel BOQ, or DWG drawings (Up to 25MB)'
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-100">
              <span className="text-[11px] text-slate-400">
                Routed to: projects@qdcl.com.pk & info@qdcl.com.pk
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-amber-600 rounded-md transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  {isSubmitting ? (
                    <span>Routing Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Tender RFQ</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
