import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowUpRight 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 220 && rect.bottom >= 220;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);

    if (isHomePage) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    } else {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-3.5">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`flex items-center justify-between px-5 py-2.5 rounded-full transition-all duration-300 border ${
            isScrolled
              ? 'bg-white/90 backdrop-blur-xl border-zinc-200/90 shadow-md shadow-purple-900/[0.04]'
              : 'bg-white/70 backdrop-blur-md border-zinc-200/60 shadow-sm'
          }`}
        >
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => {
              if (isHomePage) window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2.5 cursor-pointer select-none"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-purple-300 shadow-sm group-hover:scale-105 transition-transform bg-purple-100 shrink-0">
              <img src="/profile.jpg" alt="Vaishnavi" className="w-full h-full object-cover object-top" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-zinc-900 group-hover:text-purple-700 transition-colors">
                Vaishnavi J Acharya
              </span>
              <span className="text-[10px] font-sans font-medium text-purple-600 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                CSE Undergrad
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 px-2 py-1 rounded-full bg-zinc-100/70 border border-zinc-200/60">
            {navItems.map((item) => {
              const isActive = isHomePage && activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-purple-900 font-semibold'
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-white/60'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-white shadow-sm border border-purple-100"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Action Icons & Direct Connect */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://github.com/VaishnaviAcharya06"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full text-zinc-600 hover:text-purple-700 hover:bg-purple-50 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/vaishnavi-acharya-856245293/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full text-zinc-600 hover:text-purple-700 hover:bg-purple-50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={() => handleNavClick('contact')}
              className="ml-1 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-purple-600 hover:bg-purple-700 shadow-sm shadow-purple-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-zinc-700 hover:bg-zinc-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden max-w-6xl mx-auto px-4 sm:px-6 pt-2 overflow-hidden"
          >
            <div className="bg-white/95 backdrop-blur-2xl border border-zinc-200/90 rounded-2xl p-4 shadow-xl space-y-3">
              <div className="grid grid-cols-2 gap-1.5">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="p-2.5 rounded-xl bg-zinc-50 hover:bg-purple-50 text-left text-xs font-medium text-zinc-800 hover:text-purple-700 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="pt-2 border-t border-zinc-100 flex items-center justify-between">
                <div className="flex gap-2">
                  <a
                    href="https://github.com/VaishnaviAcharya06"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-zinc-50 text-zinc-700 hover:text-purple-700"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vaishnavi-acharya-856245293/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-zinc-50 text-zinc-700 hover:text-purple-700"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>

                <button
                  onClick={() => handleNavClick('contact')}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-purple-600 hover:bg-purple-700 shadow-sm"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
