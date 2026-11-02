import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, IMAGES, LEADERSHIP_TEAM, MACHINERY_INVENTORY } from '../data/companyData';
import {
  ShieldCheck,
  Award,
  Building2,
  CheckCircle2,
  Compass,
  Target,
  Wrench,
  Search,
  Users,
  FileDown
} from 'lucide-react';

interface AboutProps {
  onNavigate: (page: PageId) => void;
  onOpenRfq: () => void;
  onOpenProfile: () => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate, onOpenRfq, onOpenProfile }) => {
  const [machineryFilter, setMachineryFilter] = useState('');

  const filteredMachinery = MACHINERY_INVENTORY.filter((item) =>
    item.name.toLowerCase().includes(machineryFilter.toLowerCase()) ||
    item.category.toLowerCase().includes(machineryFilter.toLowerCase())
  );

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-14 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20">
              Corporate Introduction & History
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
              Engineering Excellence Built on Over Two Decades of Trust
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Quantum Dynamics (Public) Limited (formerly known as QDPL) is a premier engineering, heavy steel fabrication, and mechanical contracting company registered in Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Overview & Evolution */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              From QDPL to Public Limited
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
              Our Evolution & Heritage
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Established with an unyielding commitment to heavy industrial engineering, Quantum Dynamics has grown from an agile contracting outfit into a full-scale corporate entity capable of delivering multi-thousand-ton structural fabrication and turnkey mechanical erection.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our formal transition to <strong>Quantum Dynamics (Public) Limited (QDCL)</strong> reflects our heightened capital governance, enhanced bonding capacity, and expanded physical infrastructure — including our 15,000 square meter heavy fabrication yard in Port Qasim, Karachi.
            </p>

            <div className="p-4 bg-slate-100 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1">
              <div><strong className="text-slate-900">Legal Corporate Name:</strong> Quantum Dynamics (Public) Limited</div>
              <div><strong className="text-slate-900">Official Web Domain:</strong> {COMPANY_INFO.domain}</div>
              <div><strong className="text-slate-900">Statutory Framework:</strong> SECP Public Limited Company · Pakistan</div>
              <div><strong className="text-slate-900">Executive Headquarters:</strong> Sector I-9/2, Islamabad</div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenProfile}
                className="px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-amber-600 rounded-md transition-colors flex items-center gap-2"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Full Company Profile (PDF)</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-lg aspect-4/3">
              <img
                src={IMAGES.steelFabrication}
                alt="Inside Quantum Dynamics heavy steel fabrication workshop"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                <span className="font-bold text-amber-400 font-heading">Port Qasim Fabrication Complex</span>
                <p className="text-[11px] text-slate-300">
                  Fully equipped with CNC plasma profiling, SAW automatic welding columns, and indoor 50-ton gantry crane bays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Core Values */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-950 font-heading">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To be the most dependable and technically proficient engineering, fabrication, and industrial construction contracting group in the region, recognized for zero-compromise safety, technical integrity, and uncompromising project delivery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-950 font-heading">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To execute mission-critical heavy industrial installations safely and on schedule through rigorous adherence to ASME/API codes, continuous technical skill upgrading, cutting-edge fabrication tooling, and proactive partnership with our clients.
              </p>
            </div>
          </div>

          {/* 5 Core Values */}
          <div>
            <h3 className="text-xl font-bold text-slate-950 font-heading text-center mb-8">
              Our Five Guiding Pillars
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-white p-5 rounded-lg border border-slate-200 text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-xs font-bold">1</div>
                <h4 className="text-sm font-bold text-slate-900 font-heading">Zero Harm Safety</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Safety is our non-negotiable prerequisite across all jobsites and fabrication bays.</p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-200 text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mx-auto text-xs font-bold">2</div>
                <h4 className="text-sm font-bold text-slate-900 font-heading">Technical Precision</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Strict adherence to ASME, API, and AWS engineering codes with zero tolerance for defects.</p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-200 text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto text-xs font-bold">3</div>
                <h4 className="text-sm font-bold text-slate-900 font-heading">Delivery Certainty</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Respecting turnaround windows, shutdown milestones, and contractual handover dates.</p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-200 text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mx-auto text-xs font-bold">4</div>
                <h4 className="text-sm font-bold text-slate-900 font-heading">Corporate Integrity</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Transparent commercial pricing, verified material test reports, and ethical bidding.</p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-200 text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mx-auto text-xs font-bold">5</div>
                <h4 className="text-sm font-bold text-slate-900 font-heading">Environmental Care</h4>
                <p className="text-xs text-slate-600 leading-relaxed">ISO 14001:2015 environmental standards controlling emissions and industrial waste.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Engineering Board */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
            Executive Governance
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading tracking-tight mt-1">
            Engineering Leadership & Management
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Led by seasoned professional engineers with multi-decade records in major industrial and EPC infrastructure projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LEADERSHIP_TEAM.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-950 font-heading">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-semibold text-amber-600">
                      {leader.role}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {leader.experience}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {leader.qualifications}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {leader.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>PEC Registered Professional Engineer</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Heavy Fabrication Yard & Machinery Inventory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-xl p-8 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Port Qasim Fabrication Complex
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
                Heavy Machinery & Workshop Tooling
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                15,000 sq. meter yard equipped for 1,200 MT/month structural steel output, high-pressure piping spools, and heavy plate bending.
              </p>
            </div>

            {/* Filter Search */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search equipment..."
                value={machineryFilter}
                onChange={(e) => setMachineryFilter(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-slate-800 border border-slate-700 rounded text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto border border-slate-800 rounded-lg">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-slate-300 font-semibold border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Equipment / Fleet Description</th>
                  <th className="py-3 px-4">Operational Category</th>
                  <th className="py-3 px-4">Rated Capacity & Specification</th>
                  <th className="py-3 px-4 text-right">Fleet Quantity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300 text-xs">
                {filteredMachinery.map((item, i) => (
                  <tr key={i} className="hover:bg-slate-800/50">
                    <td className="py-2.5 px-4 font-medium text-white">{item.name}</td>
                    <td className="py-2.5 px-4 text-slate-400">{item.category}</td>
                    <td className="py-2.5 px-4 font-mono text-[11px] text-amber-300">{item.capacity}</td>
                    <td className="py-2.5 px-4 text-right font-mono font-bold text-white">{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-xs text-slate-400">
            <div>Yard Address: Yard 14, Phase II, Port Qasim Industrial Zone, Karachi</div>
            <button
              onClick={onOpenRfq}
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
            >
              Inquire About Yard Fabrication Capacity
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
