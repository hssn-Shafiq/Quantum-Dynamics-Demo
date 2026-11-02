import React, { useState } from 'react';
import { PageId, ProjectItem } from '../types';
import { PROJECTS } from '../data/companyData';
import {
  Search,
  Filter,
  MapPin,
  Calendar,
  CheckCircle2,
  X,
  ArrowRight,
  ShieldCheck,
  Building,
  Layers
} from 'lucide-react';

interface ProjectsProps {
  onNavigate: (page: PageId) => void;
  onOpenRfq: () => void;
  onOpenProfile: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onNavigate, onOpenRfq, onOpenProfile }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'oil-gas', label: 'Oil & Gas' },
    { id: 'power', label: 'Power Generation' },
    { id: 'cement', label: 'Cement & Fertilizer' },
    { id: 'fabrication', label: 'Steel Fabrication' },
    { id: 'civil', label: 'Civil Infrastructure' },
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCat = activeCategory === 'all' || proj.category === activeCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.scope.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20">
              Project Track Record
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
              Engineering Experience & Proven Delivery
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Explore Quantum Dynamics (Public) Limited’s portfolio of heavy industrial contracts spanning major oil terminals, power station turbine halls, mega cement plants, and complex steel structures across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search by client, location, keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="text-xs text-slate-500 pt-1 border-t border-slate-100 flex items-center justify-between">
            <span>
              Showing <strong className="text-slate-800">{filteredProjects.length}</strong> verified project references
            </span>
            <button
              onClick={onOpenProfile}
              className="text-amber-600 hover:text-amber-700 font-semibold"
            >
              Download Complete Reference Matrix (PDF)
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group"
            >
              <div className="relative h-52 bg-slate-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded backdrop-blur-xs">
                  {project.categoryLabel}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] font-bold text-amber-300">
                    {project.tonnageOrScale}
                  </span>
                  <span className="text-[10px] bg-slate-900/80 px-2 py-0.5 rounded">
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="truncate">{project.location}</span>
                    <span aria-hidden="true">·</span>
                    <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-heading leading-snug group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>

                  <div className="text-xs text-slate-700 font-medium">
                    <span className="text-slate-500">Client:</span> {project.client}
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {project.scope}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-slate-900 hover:text-amber-600 transition-colors flex items-center gap-1"
                  >
                    <span>View Technical Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenRfq}
                    className="text-xs text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Similar Tender?
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-300">
            <div className="relative h-64 bg-slate-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1.5 bg-slate-900/80 text-white rounded-full hover:bg-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                  {selectedProject.categoryLabel} · Ref: {selectedProject.id}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4 text-xs text-slate-700">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                <div>
                  <div className="text-slate-400 text-[10px] uppercase">Client Entity</div>
                  <div className="font-semibold text-slate-900 mt-0.5">{selectedProject.client}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[10px] uppercase">Site Location</div>
                  <div className="font-semibold text-slate-900 mt-0.5">{selectedProject.location}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[10px] uppercase">Scale / Tonnage</div>
                  <div className="font-semibold font-mono text-amber-600 mt-0.5">{selectedProject.tonnageOrScale}</div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-1">
                  Contract Scope of Work
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {selectedProject.scope}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2">
                  Key Engineering Milestones & Quality Benchmarks
                </h4>
                <ul className="space-y-1.5">
                  {selectedProject.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  Commissioned in {selectedProject.year} · Full documentation dossier archived
                </span>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenRfq();
                  }}
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-amber-600 rounded-md transition-colors"
                >
                  Request Similar Project Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
