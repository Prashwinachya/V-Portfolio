import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MapPin, 
  ArrowUpRight 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const emailAddress = 'vaishnaviacharya44@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);

    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Vaishnavi,\n\nFrom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.open(`mailto:${emailAddress}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-medium mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>LET'S CONNECT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 tracking-tight"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-base text-zinc-600"
          >
            Have a question, opportunity, or simply want to say hello? I'd love to hear from you.
          </motion.p>
        </div>

        {/* 2-Column Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-7 rounded-3xl bg-white border border-zinc-200/80 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-700 border border-purple-200/60 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Opportunities
                </span>
              </div>

              <h3 className="font-display font-bold text-base text-zinc-900 mb-1">
                Direct Email
              </h3>
              <p className="text-xs text-zinc-500 mb-5 font-mono">
                {emailAddress}
              </p>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 py-2 px-3 rounded-full bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/80 text-xs font-medium text-zinc-700 transition-colors flex items-center justify-center gap-1.5"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${emailAddress}`}
                  className="py-2 px-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold shadow-xs transition-colors flex items-center gap-1"
                >
                  <span>Compose</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://www.linkedin.com/in/vaishnavi-acharya-856245293/"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-3xl bg-white border border-zinc-200/80 hover:border-purple-300 transition-all flex flex-col justify-between group shadow-xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-purple-600 transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-zinc-900">LinkedIn</h4>
                  <p className="text-[11px] text-zinc-500">Connect professionally</p>
                </div>
              </a>

              <a
                href="https://github.com/VaishnaviAcharya06"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-3xl bg-white border border-zinc-200/80 hover:border-purple-300 transition-all flex flex-col justify-between group shadow-xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                    <Github className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-purple-600 transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-zinc-900">GitHub</h4>
                  <p className="text-[11px] text-zinc-500">View code &amp; repos</p>
                </div>
              </a>
            </div>

            {/* Campus Info */}
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/60 text-xs text-zinc-600 flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Sahyadri College of Eng. &amp; Mgmt • Mangalore, India</span>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-zinc-200/80 p-8 sm:p-9 shadow-xs">
            <h3 className="font-display font-bold text-lg text-zinc-900 mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-zinc-500 mb-6">
              Drop a note and I will get back to you as soon as possible.
            </p>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-5 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2"
                >
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Thank you! Your email client has been prepared. You can also write directly to {emailAddress}.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {errorMsg && (
              <div className="mb-4 text-xs text-rose-600 font-medium">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Name"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Subject or project title"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-full font-semibold text-xs text-white bg-purple-600 hover:bg-purple-700 shadow-sm shadow-purple-600/20 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-1.5"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
