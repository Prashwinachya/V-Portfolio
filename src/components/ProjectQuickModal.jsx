import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ArrowUpRight, Check } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectQuickModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-zinc-950/40 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-white border border-zinc-200 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Image */}
          <div className="relative h-56 sm:h-64 w-full bg-zinc-100 shrink-0">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white text-zinc-700 border border-zinc-200/80 shadow-sm transition-all"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="absolute bottom-4 left-6">
              <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/95 text-purple-800 border border-purple-200/70 shadow-xs">
                {project.category}
              </span>
              <h2 className="text-2xl font-display font-bold text-white drop-shadow-md mt-1">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-sm text-zinc-600">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-purple-700 mb-1">
                Overview
              </h3>
              <p className="leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Problem & Solution */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-1">
                  The Problem
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
                <h4 className="text-xs font-semibold text-purple-900 uppercase tracking-wider mb-1">
                  Engineered Solution
                </h4>
                <p className="text-xs text-zinc-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-purple-700 mb-2">
                Key Capabilities
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {project.keyFeatures.map((f) => (
                  <div
                    key={f.title}
                    className="flex items-start gap-2 p-2.5 rounded-xl bg-zinc-50 border border-zinc-100"
                  >
                    <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-zinc-900">{f.title}</p>
                      <p className="text-[11px] text-zinc-500">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-zinc-100 border border-zinc-200/80 px-2.5 py-1 rounded-md text-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Bar */}
          <div className="p-4 px-6 sm:px-8 bg-zinc-50 border-t border-zinc-100 flex items-center justify-between shrink-0">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-purple-700"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>

            <Link
              to={`/project/${project.slug}`}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-purple-600 text-white hover:bg-purple-700 transition-colors shadow-xs"
            >
              <span>Full Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
