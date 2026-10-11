import { motion } from 'framer-motion';
import {
  ArrowDown,
  Sparkles,
  Send,
  GraduationCap
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function HeroSection({ onExploreWork, onContactClick }) {
  const traits = [
    'Emerging Tech Enthusiast',
    'Problem Solver',
    'Curious Mind',
    'Technophile'
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline & Intro */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Subtle Top Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50/80 border border-purple-200/80 text-purple-900 text-xs font-medium shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <span>Computer Science &amp; Engineering Undergraduate</span>
          </motion.div>

          {/* Name & Headline */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-zinc-900 tracking-tight leading-[1.12]"
            >
              <span className="block text-zinc-500 text-xl sm:text-2xl font-sans font-medium mb-1">
                Hello, I'm
              </span>
              <span>Vaishnavi J Acharya</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-display font-semibold text-purple-700 leading-snug"
            >
              I build smart experiences, reliable systems, and thoughtful software.
            </motion.p>
          </div>

          {/* Short Supporting Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-zinc-600 max-w-xl leading-relaxed"
          >
            Student at <span className="font-semibold text-zinc-800">Sahyadri College of Engineering &amp; Management</span>. Passionate about systems architecture in C/Java, responsive web development, and exploring emerging tech to solve meaningful problems.
          </motion.p>

          {/* Trait badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-2 pt-1"
          >
            {traits.map((trait) => (
              <span
                key={trait}
                className="text-xs font-medium text-zinc-700 bg-white border border-zinc-200/80 px-3 py-1 rounded-full shadow-xs"
              >
                {trait}
              </span>
            ))}
          </motion.div>

          {/* Primary & Secondary CTAs + Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-3"
          >
            <button
              onClick={onExploreWork}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 shadow-sm shadow-purple-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-200/90 shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get In Touch</span>
              <Send className="w-3.5 h-3.5 text-purple-600" />
            </button>

            <div className="flex items-center gap-2 pl-2 border-l border-zinc-200">
              <a
                href="https://github.com/VaishnaviAcharya06"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full text-zinc-600 hover:text-purple-700 hover:bg-white border border-transparent hover:border-zinc-200 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/vaishnavi-acharya-856245293/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full text-zinc-600 hover:text-purple-700 hover:bg-white border border-transparent hover:border-zinc-200 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Refined Circular Portrait with Tech Orbit & Floating Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          <div className="relative w-64 sm:w-76 md:w-84 aspect-square flex items-center justify-center">
            {/* Soft background pulse glows */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-200/70 via-pink-100/50 to-violet-200/50 blur-2xl animate-pulse" />

            {/* Orbit ring with subtle gentle rotation */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-3.5 rounded-full border border-dashed border-purple-300/60 pointer-events-none"
            />

            {/* Main Circular Portrait Frame */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full h-full rounded-full overflow-hidden bg-white p-2.5 sm:p-3 border-2 border-purple-200 shadow-xl shadow-purple-900/[0.08]"
            >
              <div className="w-full h-full rounded-full overflow-hidden relative bg-zinc-100">
                <img
                  src="/profile.jpg"
                  alt="Vaishnavi J Acharya"
                  className="w-full h-full object-cover object-top scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Floating Satellite Badge 1 (Top Right) */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 -right-3 z-20 px-3.5 py-2 rounded-full bg-white/95 border border-purple-200 shadow-md flex items-center gap-2 text-xs font-semibold text-zinc-800 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Clean Code &amp; Systems</span>
            </motion.div>

            {/* Floating Satellite Badge 2 (Bottom Left) */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-2 -left-3 z-20 px-3.5 py-2 rounded-full bg-white/95 border border-purple-200 shadow-md flex items-center gap-2 text-xs font-semibold text-zinc-800 backdrop-blur-md"
            >
              <GraduationCap className="w-3.5 h-3.5 text-purple-600" />
              <span>CSE • Class of 2026</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
