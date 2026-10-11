import { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectQuickModal from './ProjectQuickModal';
import { projectsData } from '../data/projectsData';

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [previewProject, setPreviewProject] = useState(null);

  const filters = ['All', 'Fintech', 'Industrial', 'Cybersecurity', 'EdTech'];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === 'All') return true;
    return project.category.toLowerCase().includes(selectedFilter.toLowerCase());
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-zinc-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-medium mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-purple-600" />
            <span>PORTFOLIO &amp; WORK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 tracking-tight"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-base text-zinc-600"
          >
            Systems engineering, transactional platforms, and interactive applications.
          </motion.p>

          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-8"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedFilter === filter
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200/80 hover:bg-zinc-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Project Cards 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onQuickPreview={(p) => setPreviewProject(p)}
            />
          ))}
        </div>

        {/* GitHub Repository Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div>
            <h4 className="font-display font-bold text-base text-zinc-900">
              Want to inspect repository source code or commits?
            </h4>
            <p className="text-xs text-zinc-500 mt-1">
              Explore implementations, database schemas, and documentation on GitHub.
            </p>
          </div>
          <a
            href="https://github.com/VaishnaviAcharya06"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-zinc-900 text-white font-semibold text-xs hover:bg-zinc-800 transition-colors shrink-0 shadow-xs"
          >
            Visit GitHub Profile
          </a>
        </motion.div>
      </div>

      {/* Quick View Modal */}
      <ProjectQuickModal
        project={previewProject}
        onClose={() => setPreviewProject(null)}
      />
    </section>
  );
}
