import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  MapPin
} from 'lucide-react';

export default function EducationSection() {
  const milestones = [
    {
      type: "Degree Program",
      title: "B.E. in Computer Science & Engineering",
      institution: "Sahyadri College of Engineering & Management",
      period: "2022 — 2027(Expected)",
      location: "Mangalore, Karnataka, India",
      description: "Rigorous coursework covering foundational and advanced computer science principles including data structures, algorithmic design, database architecture, and software development methodologies.",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Object-Oriented Programming (Java)",
        "Computer Networks",
        "Software Engineering"
      ]
    },
    {
      type: "Systems & Project Experience",
      title: "Core Software & Academic Engineering Projects",
      institution: "Self-Directed & College Engineering Initiatives",
      period: "2023 — Present",
      location: "Karnataka, India",
      description: "Architected and delivered multiple complete software systems across disciplines: from low-level C programming for industrial monitoring to cryptographic verification pipelines in Java and interactive web applications.",
      coursework: [
        "Cryptographic Ballot Hashing (SHA-256)",
        "SCADA Industrial Hardware Telemetry in C",
        "Transactional Relational Database Modeling",
        "Interactive Full-Stack Web Development"
      ]
    }
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-zinc-50/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-medium mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5 text-purple-600" />
            <span>ACADEMIC BACKGROUND</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 tracking-tight"
          >
            Education &amp; Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-base text-zinc-600"
          >
            Academic milestones and self-directed software development experience.
          </motion.p>
        </div>

        {/* Structured Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {milestones.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-zinc-200/80 shadow-xs flex flex-col justify-between hover:border-purple-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200/60">
                    {item.type}
                  </span>
                  <span className="text-xs text-zinc-500 font-medium flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-zinc-900 mb-1">
                  {item.title}
                </h3>

                <p className="text-sm font-medium text-purple-700 mb-3">
                  {item.institution}
                </p>

                <p className="text-xs text-zinc-500 flex items-center gap-1.5 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  {item.location}
                </p>

                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-2.5">
                  Core Topics &amp; Focus:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {item.coursework.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs font-medium text-zinc-700 bg-zinc-50 border border-zinc-200/80 px-2.5 py-1 rounded-lg"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
