import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Server, 
  Sparkles 
} from 'lucide-react';
import { skillsData } from '../data/projectsData';

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const icons = {
    Code2,
    Layout,
    Server,
    Sparkles
  };

  const categories = ['All', 'Programming Languages', 'Web Development', 'Tools & Technologies', 'Currently Learning & Exploring'];

  const filteredData = skillsData.filter((cat) => {
    if (selectedCategory === 'All') return true;
    return cat.category === selectedCategory;
  });

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-medium mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>TECHNICAL CAPABILITIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 tracking-tight"
          >
            Skills &amp; Technologies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-base text-zinc-600"
          >
            Tools, programming languages, and frameworks I use to build software.
          </motion.p>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-8"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200/80 hover:bg-zinc-50'
                }`}
              >
                {cat === 'Currently Learning & Exploring' ? 'Learning' : cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredData.map((group, gIdx) => {
            const Icon = icons[group.icon] || Code2;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gIdx * 0.1 }}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-zinc-200/80 shadow-xs hover:border-purple-300 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 pb-5 mb-5 border-b border-zinc-100">
                    <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-700 border border-purple-200/60 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-zinc-900">
                        {group.category}
                      </h3>
                      <p className="text-xs text-zinc-500 mt-0.5">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Technology Chips List */}
                  <div className="space-y-3">
                    {group.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-2xl bg-zinc-50/70 border border-zinc-100 hover:bg-purple-50/40 hover:border-purple-200/60 transition-all flex items-start justify-between gap-3"
                      >
                        <div>
                          <div className="font-semibold text-xs sm:text-sm text-zinc-900 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                            {skill.name}
                          </div>
                          <p className="text-[11px] text-zinc-500 mt-0.5 pl-3">
                            {skill.highlight}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
