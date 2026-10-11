import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Compass, 
  Code2, 
  Cpu, 
  MapPin 
} from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      title: "Systems & Logic",
      description: "Appreciating how software functions under the hood, from C memory management to Java OOP principles.",
      icon: Cpu,
      color: "bg-purple-50 text-purple-700 border-purple-200/80"
    },
    {
      title: "Web Engineering",
      description: "Crafting responsive and interactive user interfaces using React, modern CSS, and modular component architecture.",
      icon: Code2,
      color: "bg-violet-50 text-violet-700 border-violet-200/80"
    },
    {
      title: "Curiosity & Growth",
      description: "Constantly exploring emerging frameworks, tools, and technical paradigms to expand problem-solving capabilities.",
      icon: Lightbulb,
      color: "bg-pink-50 text-pink-700 border-pink-200/80"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-medium mb-3"
          >
            <Compass className="w-3.5 h-3.5 text-purple-600" />
            <span>GET TO KNOW ME</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 tracking-tight"
          >
            About Vaishnavi
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-base text-zinc-600"
          >
            A computer science student driven by curiosity, engineering discipline, and a passion for creating impactful software.
          </motion.p>
        </div>

        {/* Narrative & Focus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-zinc-200/80 shadow-sm space-y-5 text-zinc-600 leading-relaxed text-base"
          >
            <p>
              I am an undergraduate studying <span className="font-semibold text-zinc-900">Computer Science &amp; Engineering</span> at <span className="font-semibold text-purple-700">Sahyadri College of Engineering &amp; Management</span> in Mangalore, Karnataka.
            </p>
            <p>
              My journey into technology began with a curiosity about how things work behind the screen. As I deepened my learning, I fell in love with both ends of engineering: the algorithmic rigor of low-level systems and the creative satisfaction of building clean, user-friendly digital products.
            </p>
            <p>
              Whether it is architecting an industrial telemetry system in C, developing cryptographic election verification in Java, or building financial platforms with React, I strive to write maintainable code that solves real problems with clarity and reliability.
            </p>

            <div className="pt-6 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="/profile.jpg"
                  alt="Vaishnavi"
                  className="w-10 h-10 rounded-full object-cover object-top border border-purple-200 shadow-xs"
                />
                <div>
                  <h4 className="text-xs font-bold text-zinc-900">Vaishnavi J Acharya</h4>
                  <p className="text-[11px] text-zinc-500">CSE Undergrad • Sahyadri SCEM</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
                <MapPin className="w-3.5 h-3.5 text-purple-600" />
                <span>Mangalore, Karnataka, India</span>
              </div>
            </div>
          </motion.div>

          {/* Pillars on Right */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-xs hover:border-purple-300 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-zinc-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
