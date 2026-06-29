import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useScrollAnimation } from './useScrollAnimation';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const [aboutRef, isAboutVisible] = useScrollAnimation();
  const [projectsRef, isProjectsVisible] = useScrollAnimation();
  const [skillsRef, isSkillsVisible] = useScrollAnimation();
  const [contactRef, isContactVisible] = useScrollAnimation();

  const scrollToSection = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-lg font-bold tracking-wide">
                VAISHNAVI.J
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {['Home', 'Projects', 'Contact'].map((item, idx) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 relative ${
                    activeSection === item.toLowerCase() ? 'text-white' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-zinc-800 bg-black">
            <div className="px-6 py-4 space-y-3">
              {['Home', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-sm font-medium text-zinc-300 hover:text-white py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16 px-6 lg:px-12 relative overflow-hidden"
      >
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="max-w-6xl mx-auto text-left relative z-10 w-full">
          <div className="mb-6">
            <span className="text-sm font-medium text-zinc-400 tracking-widest">
              | CSE UNDERGRAD AT SAHYADRI COLLEGE OF ENGINEERING & MANAGEMENT
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Hi, I'm Vaishnavi J Acharya.<br />
            I build smart experiences.
          </h1>

          <div className="flex flex-wrap gap-3 mb-10">
            <span className="text-xs font-medium text-zinc-300 bg-zinc-900/50 border border-zinc-700 rounded-full px-4 py-2">
              ⚡ Emerging Tech Enthusiast
            </span>
            <span className="text-xs font-medium text-zinc-300 bg-zinc-900/50 border border-zinc-700 rounded-full px-4 py-2">
              🧠 Problem Solver
            </span>
            <span className="text-xs font-medium text-zinc-300 bg-zinc-900/50 border border-zinc-700 rounded-full px-4 py-2">
              💡 Curious Mind
            </span>
            <span className="text-xs font-medium text-zinc-300 bg-zinc-900/50 border border-zinc-700 rounded-full px-4 py-2">
              💻 Technophile
            </span>
          </div>

          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-all duration-300 flex items-center gap-2"
            >
              Explore Work
              <ChevronDown size={16} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-zinc-700 text-white rounded-lg font-semibold hover:bg-zinc-900 hover:border-zinc-600 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="min-h-screen bg-zinc-950 py-20 px-6 lg:px-12 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center transition-all duration-1000 ${isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all duration-500 ${isAboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                I'm a passionate CSE undergraduate at Sahyadri College of Engineering & Management with a keen interest in emerging technologies and problem-solving.
              </p>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                As a curious mind and technophile, I love exploring new frameworks, tools, and approaches to build meaningful solutions. Whether it's web development, AI/ML, or cloud technologies, I'm always eager to learn and create.
              </p>
              <p className="text-zinc-300 text-lg leading-relaxed">
                My journey in tech is driven by the desire to make an impact, collaborate with brilliant minds, and continuously push the boundaries of what's possible.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: '🎓 Education', desc1: 'CSE Undergraduate', desc2: 'Sahyadri College of Engineering & Management' },
                { title: '🎯 Focus Areas', desc1: 'Web Development • AI/ML • Cloud Computing • Problem Solving' },
                { title: '💡 What Drives Me', desc1: 'Innovation, continuous learning, and creating solutions that matter' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-500 ${isAboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  {item.desc1 && <p className="text-zinc-400">{item.desc1}</p>}
                  {item.desc2 && <p className="text-zinc-500 text-sm">{item.desc2}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="min-h-screen py-20 px-6 lg:px-12 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center transition-all duration-1000 ${isProjectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Featured Projects
          </h2>
          <p className={`text-center text-zinc-400 text-lg mb-16 transition-all duration-1000 ${isProjectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.1s' }}>
            Showcasing my work and passion for building innovative solutions
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'AI-Powered Chat Application', description: 'Built a real-time chat application with AI integration for intelligent responses and message summarization.', tags: ['React', 'Node.js', 'MongoDB', 'WebSocket'] },
              { title: 'Web Scraping & Data Analysis', description: 'Developed a comprehensive web scraper to collect and analyze data with visualization dashboard.', tags: ['Python', 'BeautifulSoup', 'Pandas', 'Matplotlib'] },
              { title: 'Mobile Task Manager', description: 'Created a cross-platform task management app with real-time synchronization and offline support.', tags: ['React Native', 'Firebase', 'Redux', 'JavaScript'] },
              { title: 'Machine Learning Model Deployment', description: 'Deployed ML models for predictive analysis with a user-friendly API and documentation.', tags: ['Python', 'TensorFlow', 'Flask', 'Docker'] }
            ].map((project, index) => (
              <div
                key={index}
                className={`group bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-700 ${isProjectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <h3 className="text-2xl font-bold mb-3 group-hover:text-zinc-300 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-base mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold text-zinc-300 bg-zinc-800 rounded-full px-3 py-1 transition-all duration-300 hover:bg-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="min-h-screen bg-zinc-950 py-20 px-6 lg:px-12 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center transition-all duration-1000 ${isSkillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Skills & Expertise
          </h2>
          <p className={`text-center text-zinc-400 text-lg mb-16 transition-all duration-1000 ${isSkillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.1s' }}>
            Technologies and tools I work with
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { category: 'Languages', items: ['Python', 'JavaScript', 'Java', 'C++', 'SQL'] },
              { category: 'Frontend', items: ['React', 'HTML/CSS', 'Tailwind CSS', 'Responsive Design'] },
              { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'Firebase'] },
              { category: 'Tools & Tech', items: ['Git', 'Docker', 'REST APIs', 'Machine Learning'] }
            ].map((skillGroup, index) => (
              <div
                key={index}
                className={`bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-700 ${isSkillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-6 pb-4 border-b-2 border-zinc-800">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <li
                      key={i}
                      className="text-zinc-300 font-medium flex items-center gap-2 hover:text-white transition-colors duration-300"
                    >
                      <span className="w-2 h-2 bg-white rounded-full transition-all duration-300 hover:scale-150" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="min-h-screen py-20 px-6 lg:px-12 flex items-center">
        <div className="max-w-6xl mx-auto w-full text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Let's Connect
          </h2>
          <p className={`text-zinc-400 text-xl mb-12 transition-all duration-1000 ${isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.1s' }}>
            I'm always open to new opportunities and interesting conversations. Feel free to reach out!
          </p>

          <div className={`bg-zinc-900 border border-zinc-800 rounded-2xl p-12 transition-all duration-1000 ${isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold mb-8">Let's Build Something Amazing Together</h3>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://www.linkedin.com/in/vaishnavi-acharya-856245293/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-all duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/VaishnaviAcharya06"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href="mailto:vaishnaviacharya44@gmail.com"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-8 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-zinc-500 text-sm mb-4">
            © 2024 Vaishnavi J Acharya. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
