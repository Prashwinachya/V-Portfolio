import { ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white border-t border-zinc-200/80 py-10 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center font-display font-bold text-[10px]">
            VA
          </div>
          <div>
            <span className="font-display font-bold text-zinc-900 block">
              Vaishnavi J Acharya
            </span>
            <span className="text-[11px] text-zinc-400">
              Computer Science &amp; Engineering • Sahyadri SCEM
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/VaishnaviAcharya06"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-600 hover:text-purple-700 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/vaishnavi-acharya-856245293/"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-600 hover:text-purple-700 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="ml-2 inline-flex items-center gap-1 text-xs font-medium text-zinc-600 hover:text-purple-700 transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
