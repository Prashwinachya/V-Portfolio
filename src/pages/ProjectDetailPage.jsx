import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Maximize2, 
  X, 
  Share2, 
  Check 
} from 'lucide-react';
import { Github } from '../components/Icons';
import { projectsData } from '../data/projectsData';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const projectIndex = projectsData.findIndex(
    (p) => p.slug === id || p.id === id
  );

  const project = projectIndex !== -1 ? projectsData[projectIndex] : null;

  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : projectsData[0];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-display font-bold text-3xl text-zinc-900 mb-3">
          Project Not Found
        </h1>
        <p className="text-zinc-500 mb-6 text-sm">
          The requested project specification could not be located.
        </p>
        <Link
          to="/"
          className="px-5 py-2.5 rounded-full bg-purple-600 text-white font-semibold text-xs"
        >
          Return to Portfolio
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Breadcrumb Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between pb-6 mb-8 border-b border-zinc-200/80"
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 hover:text-purple-700 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to All Projects</span>
          </Link>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-zinc-50 border border-zinc-200 text-xs text-zinc-700 transition-colors shadow-xs"
            >
              {copiedShare ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Share</span>
                </>
              )}
            </button>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-600 text-white font-semibold text-xs hover:bg-purple-700 transition-all shadow-xs"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          </div>
        </motion.div>

        {/* Project Header Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-3 mb-8"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200/80">
              {project.category}
            </span>
            <span className="text-xs text-zinc-500 bg-white px-3 py-1 rounded-full border border-zinc-200/80">
              Timeline: {project.timeline}
            </span>
            <span className="text-xs text-zinc-500 bg-white px-3 py-1 rounded-full border border-zinc-200/80">
              Role: {project.role}
            </span>
            <span className="text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {project.status}
            </span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-zinc-900 tracking-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-purple-700 font-medium">
            {project.subtitle}
          </p>

          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl">
            {project.tagline}
          </p>
        </motion.div>

        {/* Hero Visual Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-3xl overflow-hidden border border-zinc-200/80 bg-zinc-100 shadow-sm mb-12 group"
        >
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-[280px] sm:h-[400px] object-cover object-top cursor-pointer transition-transform duration-500 group-hover:scale-[1.02]"
            onClick={() => setImageModalOpen(true)}
          />

          <button
            onClick={() => setImageModalOpen(true)}
            className="absolute bottom-4 right-4 p-2.5 rounded-full bg-white/95 text-zinc-800 border border-zinc-200 shadow-md flex items-center gap-1.5 text-xs font-medium hover:bg-white transition-all"
            title="Expand Screenshot"
          >
            <Maximize2 className="w-3.5 h-3.5 text-purple-600" />
            <span className="hidden sm:inline">Inspect Screenshot</span>
          </button>
        </motion.div>

        {/* Problem vs Solution Comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-7 rounded-3xl bg-white border border-zinc-200/80 shadow-xs">
            <span className="text-[11px] font-semibold tracking-wider text-rose-600 uppercase block mb-2">
              The Challenge
            </span>
            <h3 className="font-display font-bold text-xl text-zinc-900 mb-2">
              Problem Statement
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-purple-50/50 border border-purple-200/80 shadow-xs">
            <span className="text-[11px] font-semibold tracking-wider text-purple-700 uppercase block mb-2">
              Implementation
            </span>
            <h3 className="font-display font-bold text-xl text-zinc-900 mb-2">
              Engineered Solution
            </h3>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Core System Features */}
        <div className="mb-12">
          <h2 className="font-display font-bold text-2xl text-zinc-900 mb-6">
            Key Capabilities &amp; Features
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.keyFeatures.map((feat) => (
              <div
                key={feat.title}
                className="p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-sm text-zinc-900 mb-1">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Blueprint Design */}
        <div className="p-7 sm:p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xs mb-12">
          <div className="mb-6">
            <h2 className="font-display font-bold text-2xl text-zinc-900">
              System Architecture
            </h2>
            <p className="text-xs text-zinc-500 mt-1">
              Component hierarchy and data flow breakdown.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
              <span className="text-[11px] font-semibold text-purple-700 uppercase tracking-wider block mb-1">
                Client Layer
              </span>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {project.architecture.client}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
              <span className="text-[11px] font-semibold text-purple-700 uppercase tracking-wider block mb-1">
                Business Logic
              </span>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {project.architecture.businessLogic}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
              <span className="text-[11px] font-semibold text-purple-700 uppercase tracking-wider block mb-1">
                Storage &amp; Persistence
              </span>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {project.architecture.persistence}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
              <span className="text-[11px] font-semibold text-purple-700 uppercase tracking-wider block mb-1">
                Security &amp; Integrity
              </span>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {project.architecture.security || project.architecture.integration}
              </p>
            </div>
          </div>
        </div>

        {/* Technologies & Libraries */}
        <div className="mb-12">
          <h2 className="font-display font-bold text-2xl text-zinc-900 mb-6">
            Technologies Used
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.techStack.map((stackGroup) => (
              <div
                key={stackGroup.category}
                className="p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs"
              >
                <h4 className="text-xs font-semibold text-purple-800 uppercase tracking-wider mb-3 pb-1 border-b border-zinc-100">
                  {stackGroup.category}
                </h4>
                <ul className="space-y-1.5">
                  {stackGroup.skills.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs font-medium text-zinc-700 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Prev / Next Switcher */}
        <div className="pt-8 border-t border-zinc-200/80 grid sm:grid-cols-2 gap-4">
          <Link
            to={`/project/${prevProject.slug}`}
            className="p-5 rounded-2xl bg-white border border-zinc-200/80 hover:border-purple-300 transition-all group flex items-center gap-3.5 text-left shadow-xs"
          >
            <div className="w-9 h-9 rounded-full bg-zinc-50 group-hover:bg-purple-50 flex items-center justify-center shrink-0 text-zinc-500 group-hover:text-purple-700 transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                Previous Project
              </p>
              <h4 className="text-sm font-bold text-zinc-900 group-hover:text-purple-700 transition-colors">
                {prevProject.title}
              </h4>
            </div>
          </Link>

          <Link
            to={`/project/${nextProject.slug}`}
            className="p-5 rounded-2xl bg-white border border-zinc-200/80 hover:border-purple-300 transition-all group flex items-center justify-between text-right shadow-xs"
          >
            <div>
              <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                Next Project
              </p>
              <h4 className="text-sm font-bold text-zinc-900 group-hover:text-purple-700 transition-colors">
                {nextProject.title}
              </h4>
            </div>
            <div className="w-9 h-9 rounded-full bg-zinc-50 group-hover:bg-purple-50 flex items-center justify-center shrink-0 text-zinc-500 group-hover:text-purple-700 transition-colors">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </div>
      </div>

      {/* Modal Zoom View */}
      <AnimatePresence>
        {imageModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setImageModalOpen(false)}
              className="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden z-10 shadow-2xl p-4"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-100">
                <span className="text-xs font-semibold text-zinc-700">
                  {project.title} — Interface Screenshot
                </span>
                <button
                  onClick={() => setImageModalOpen(false)}
                  className="p-1 rounded-full text-zinc-500 hover:bg-zinc-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <img
                src={project.heroImage}
                alt={project.title}
                className="max-h-[75vh] w-auto mx-auto object-contain rounded-xl"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
