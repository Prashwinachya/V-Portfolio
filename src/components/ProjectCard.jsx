import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  ExternalLink 
} from 'lucide-react';
import { Github } from './Icons';

export default function ProjectCard({ project, index, onQuickPreview }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full flex flex-col"
    >
      <div className="group relative flex flex-col h-full rounded-3xl bg-white border border-zinc-200/80 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-900/[0.04] transition-all duration-300 overflow-hidden">
        {/* Project Thumbnail Image */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-100 border-b border-zinc-100">
          <img
            src={project.heroImage}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-purple-800 border border-purple-200/70 shadow-xs">
              {project.category}
            </span>
          </div>

          {/* Quick View Button */}
          {onQuickPreview && (
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-10">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onQuickPreview(project);
                }}
                className="px-3 py-1.5 rounded-full bg-white/95 text-zinc-900 text-xs font-medium border border-zinc-200 shadow-md flex items-center gap-1.5 hover:bg-white"
              >
                <span>Quick View</span>
                <ExternalLink className="w-3 h-3 text-purple-600" />
              </button>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-3 mb-1.5">
              <h3 className="font-display font-bold text-xl text-zinc-900 group-hover:text-purple-700 transition-colors">
                <Link to={`/project/${project.slug}`}>
                  {project.title}
                </Link>
              </h3>
              <Link
                to={`/project/${project.slug}`}
                aria-label={`View ${project.title} Details`}
                className="w-8 h-8 rounded-full bg-zinc-50 group-hover:bg-purple-50 border border-zinc-200 group-hover:border-purple-200 flex items-center justify-center shrink-0 transition-colors text-zinc-500 group-hover:text-purple-700"
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-xs font-medium text-purple-600 mb-3">
              {project.subtitle}
            </p>

            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
              {project.overview}
            </p>
          </div>

          <div>
            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium text-zinc-600 bg-zinc-50 border border-zinc-200/70 px-2.5 py-0.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom Links */}
            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
              <Link
                to={`/project/${project.slug}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-purple-700 hover:text-purple-900 transition-colors"
              >
                <span>Case Study &amp; Architecture</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View on GitHub"
                  className="p-1.5 rounded-lg text-zinc-500 hover:text-purple-700 hover:bg-purple-50 transition-colors"
                  title="GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
