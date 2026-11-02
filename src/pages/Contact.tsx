import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, SERVICES } from '../data/companyData';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Upload,
  FileDown,
  Building2,
  Navigation,
  Globe
} from 'lucide-react';

interface ContactProps {
  onNavigate: (page: PageId) => void;
  onOpenRfq: () => void;
  onOpenProfile: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigate, onOpenRfq, onOpenProfile }) => {
  const [activeLocation, setActiveLocation] = useState<'islamabad' | 'karachi' | 'lahore'>('islamabad');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'mechanical-contracting',
    message: '',
  });

  const [attachedFile, setAttachedFile] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const code = Math.floor(1000 + Math.random() * 9000);
      setConfirmationCode(`QDCL-ENQ-2026-${code}`);
      setIsSubmitting(false);
    }, 600);
  };

  const locationDetails = {
    islamabad: {
      title: 'Corporate Headquarters',
      city: 'Islamabad, Capital Territory',
      address: COMPANY_INFO.headOffice,
      phone: COMPANY_INFO.phonePrimary,
      email: COMPANY_INFO.emailGeneral,
      type: 'Executive Administration, Project Controls, Tendering & Contracts',
      hours: 'Monday – Friday: 08:30 – 17:30 PKT',
      latLng: '33.6693° N, 73.0485° E',
    },
    karachi: {
      title: 'Heavy Fabrication Yard & Logistics Base',
      city: 'Port Qasim Industrial Zone, Karachi',
      address: COMPANY_INFO.fabricationYard,
      phone: COMPANY_INFO.phoneYard,
      email: COMPANY_INFO.emailProjects,
      type: '15,000 m² Heavy Steel Fabrication, Blast Chambers, Cranes & Staging',
      hours: 'Operations: 24/7 Shift Schedules (Office: Mon – Sat 08:00 – 17:00)',
      latLng: '24.7865° N, 67.3512° E',
    },
    lahore: {
      title: 'Regional Project Liaison Office',
      city: 'Gulberg III, Lahore, Punjab',
      address: COMPANY_INFO.regionalOffice,
      phone: COMPANY_INFO.phoneDirect,
      email: COMPANY_INFO.emailGeneral,
      type: 'Punjab Regional Operations & Site Coordination',
      hours: 'Monday – Friday: 09:00 – 17:00 PKT',
      latLng: '31.5204° N, 74.3587° E',
    },
  };

  const curLoc = locationDetails[activeLocation];

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20">
              Procurement & Contracts Desk
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
              Contact Quantum Dynamics (Public) Limited
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Connect directly with our engineering contracts team, submit project Bills of Quantities (BOQ), or schedule a technical site visit to our Port Qasim heavy fabrication yard.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Direct Contact Details & Enquiry Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info & Directory (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-5">
              <h3 className="text-lg font-bold font-heading text-slate-950 border-b pb-3">
                Official Communications Directory
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">General Inquiries & Tenders:</strong>
                    <a
                      href={`tel:${COMPANY_INFO.phonePrimary}`}
                      className="text-amber-600 hover:text-amber-700 font-mono font-semibold"
                    >
                      {COMPANY_INFO.phonePrimary}
                    </a>
                    <div className="text-slate-500 text-[11px]">Direct Line: {COMPANY_INFO.phoneDirect}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Official Email Aliases:</strong>
                    <div className="space-y-0.5 pt-0.5">
                      <div>
                        <span className="text-slate-500">General: </span>
                        <a href={`mailto:${COMPANY_INFO.emailGeneral}`} className="text-amber-600 hover:text-amber-700 font-medium">
                          {COMPANY_INFO.emailGeneral}
                        </a>
                      </div>
                      <div>
                        <span className="text-slate-500">Tenders & RFQs: </span>
                        <a href={`mailto:${COMPANY_INFO.emailProjects}`} className="text-amber-600 hover:text-amber-700 font-medium">
                          {COMPANY_INFO.emailProjects}
                        </a>
                      </div>
                      <div>
                        <span className="text-slate-500">Careers & HR: </span>
                        <a href={`mailto:${COMPANY_INFO.emailCareers}`} className="text-amber-600 hover:text-amber-700 font-medium">
                          {COMPANY_INFO.emailCareers}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Web Domain & Safeguards:</strong>
                    <div className="text-slate-600 font-mono">{COMPANY_INFO.domain}</div>
                    <div className="text-[11px] text-slate-400">
                      Cloudflare Protected Static Infrastructure
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={onOpenProfile}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <FileDown className="w-4 h-4 text-amber-600" />
                  <span>Download Company Profile PDF Booklet</span>
                </button>
              </div>
            </div>

            {/* Response Time Notice */}
            <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
              <strong className="text-slate-900 block">Tender Response Policy:</strong>
              <p>
                All project inquiries and RFQ documents submitted through this portal are logged directly to the estimation desk and acknowledged within 24 working hours.
              </p>
            </div>
          </div>

          {/* Right: Interactive Contact & Tender Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
            {confirmationCode ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-slate-950">
                  Enquiry Dispatched Successfully
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out to Quantum Dynamics (Public) Limited. Your enquiry has been received by our contracts desk.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 max-w-sm mx-auto text-xs">
                  <div className="text-slate-500 mb-1">Assigned Tracking Reference</div>
                  <div className="text-lg font-mono font-bold text-amber-600">{confirmationCode}</div>
                  <div className="text-[11px] text-slate-400 mt-1">Routed to info@qdcl.com.pk & projects@qdcl.com.pk</div>
                </div>
                <button
                  onClick={() => {
                    setConfirmationCode(null);
                    setFormData({ name: '', company: '', email: '', phone: '', service: 'mechanical-contracting', message: '' });
                    setAttachedFile(null);
                  }}
                  className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md"
                >
                  Submit Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b pb-3">
                  <h3 className="text-lg font-bold font-heading text-slate-950">
                    Direct Project & Tender Enquiry
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fields marked with asterisk (*) are required for procurement review.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      placeholder="Organization name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="corporate@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 0000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Primary Service of Interest *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
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
                    Message / Technical Scope Description *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide details regarding project location, scope, required timeline, and applicable specifications..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>

                {/* File Upload Simulator */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Attach Tender Specification or BOQ File (Optional)
                  </label>
                  <div className="relative border border-dashed border-slate-300 rounded-lg p-3 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                    <input
                      type="file"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setAttachedFile(e.target.files[0].name);
                        }
                      }}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
                      <Upload className="w-4 h-4 text-amber-600" />
                      <span>{attachedFile ? attachedFile : 'Attach file (PDF, XLSX, DWG up to 25MB)'}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    Protected by Cloudflare Email Shield
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-amber-600 rounded-md transition-colors flex items-center gap-1.5 shadow-xs"
                  >
                    {isSubmitting ? 'Routing Message...' : 'Transmit Enquiry'}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Facility Locations & Map Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-xl p-8 sm:p-10 space-y-8 border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Physical Operations & Facilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
                Offices & Heavy Fabrication Yard Map
              </h2>
            </div>

            {/* Location selector tabs */}
            <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg">
              <button
                onClick={() => setActiveLocation('islamabad')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  activeLocation === 'islamabad'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Islamabad HQ
              </button>
              <button
                onClick={() => setActiveLocation('karachi')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  activeLocation === 'karachi'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Port Qasim Yard
              </button>
              <button
                onClick={() => setActiveLocation('lahore')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  activeLocation === 'lahore'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Lahore Liaison
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Location details card (5 cols) */}
            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-lg p-6 space-y-4">
              <div>
                <span className="text-[11px] uppercase font-bold text-amber-400 tracking-wider">
                  {curLoc.city}
                </span>
                <h3 className="text-xl font-bold font-heading text-white mt-1">
                  {curLoc.title}
                </h3>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{curLoc.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                  <a href={`tel:${curLoc.phone}`} className="font-mono text-white hover:text-amber-400">
                    {curLoc.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                  <a href={`mailto:${curLoc.email}`} className="text-white hover:text-amber-400">
                    {curLoc.email}
                  </a>
                </div>
                <div className="flex items-start gap-2.5 pt-1">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{curLoc.hours}</span>
                </div>
              </div>

              <div className="p-3 bg-slate-900 rounded border border-slate-800 text-[11px] text-slate-400">
                <span className="text-slate-200 font-semibold block mb-0.5">Facility Function:</span>
                {curLoc.type}
              </div>

              <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>GPS: {curLoc.latLng}</span>
                <span className="text-emerald-400 font-semibold">Active & Operational</span>
              </div>
            </div>

            {/* Interactive Schematic Location Visualizer (7 cols) */}
            <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-lg p-6 relative overflow-hidden h-72 flex flex-col justify-between">
              {/* Subtle map grid styling */}
              <div className="absolute inset-0 bg-grid-pattern-dark opacity-30" />

              <div className="relative z-10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span className="font-mono text-slate-300">GEO-COORDINATES: {curLoc.latLng}</span>
                </div>
                <span className="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded font-mono">
                  SITE-REF: {activeLocation.toUpperCase()}
                </span>
              </div>

              {/* Central Pin Landmark */}
              <div className="relative z-10 text-center my-auto space-y-2">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center mx-auto shadow-lg animate-pulse">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <div className="font-bold text-sm text-white font-heading">
                  {curLoc.title}
                </div>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  {curLoc.address}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-2">
                <span>Heavy Transport Gate Access Available 24/7</span>
                <span className="text-slate-300 font-medium">Secured Industrial Zone</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
