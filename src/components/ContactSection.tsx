import React, { useState } from 'react';
import { Send, Copy, Check, Terminal, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    scope: 'New Product UI/UX & Frontend Architecture',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kaustubh.khandale@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({
        name: '',
        email: '',
        scope: 'New Product UI/UX & Frontend Architecture',
        message: '',
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 4500);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="editorial-card rounded-3xl p-6 sm:p-10 lg:p-16 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-accent flex items-center gap-1.5 font-medium">
              <Terminal className="w-3.5 h-3.5" /> 10 // The Final Boss // Mission Briefing
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight mt-4 mb-4 leading-tight font-sans">
              Have a complex product problem?
            </h2>
            <p className="text-xl sm:text-2xl font-serif italic text-zinc-300 font-normal mb-8">
              “That’s usually where I work best.”
            </p>
            <p className="text-sm text-zinc-400 font-light leading-relaxed mb-10 max-w-md">
              Whether it's simplifying a tangled multi-role enterprise workflow, designing a brand-new software product
              from scratch, modernizing an existing clunky interface, or bridging the painful gap between Figma mockups
              and working production frontend — let’s build something formidable.
            </p>

            {/* Recruiter Fast Track Summary */}
            <div className="p-6 rounded-2xl bg-surface border border-white/10 mb-8 max-w-md shadow-inner">
              <div className="text-[11px] font-mono text-cyan-accent mb-3 flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> RECRUITER / HIRING MANAGER FAST-TRACK:
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-zinc-500 block font-mono text-[10px]">EXPERIENCE:</span>
                  <span className="text-zinc-200 font-medium">8+ Years Production</span>
                </div>
                <div>
                  <span className="text-zinc-500 block font-mono text-[10px]">ROLE SUITABILITY:</span>
                  <span className="text-zinc-200 font-medium">Lead / Staff Designer / Dev</span>
                </div>
                <div>
                  <span className="text-zinc-500 block font-mono text-[10px]">TIMEZONES:</span>
                  <span className="text-zinc-200 font-medium">US/EST/PST, EU, Global</span>
                </div>
                <div>
                  <span className="text-zinc-500 block font-mono text-[10px]">WORK TYPE:</span>
                  <span className="text-zinc-200 font-medium">Full-Time / High-Impact Contract</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                id="copy-email-btn"
                onClick={handleCopyEmail}
                className="px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.03] text-xs font-mono text-zinc-300 hover:border-cyan-accent hover:text-white transition-all flex items-center gap-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-cyan-accent" />
                    <span>Copy: kaustubh.khandale@gmail.com</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Mission Brief Form */}
          <div className="lg:col-span-6 bg-surface/90 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-base font-semibold text-white mb-1 font-sans">
              Initialize Direct Transmission
            </h3>
            <p className="text-xs text-zinc-400 font-light mb-6">
              Receive an architectural response within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-xs font-mono text-zinc-400 mb-1.5"
                  htmlFor="contact-name"
                >
                  COMMANDER / NAME
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Sarah Connor / CTO at Acme Health"
                  className="w-full bg-obsidian border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-accent font-sans transition-colors"
                />
              </div>

              <div>
                <label
                  className="block text-xs font-mono text-zinc-400 mb-1.5"
                  htmlFor="contact-email"
                >
                  RETURN FREQUENCY / WORK EMAIL
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full bg-obsidian border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-accent font-sans transition-colors"
                />
              </div>

              <div>
                <label
                  className="block text-xs font-mono text-zinc-400 mb-1.5"
                  htmlFor="contact-scope"
                >
                  MISSION SCOPE
                </label>
                <select
                  id="contact-scope"
                  value={formState.scope}
                  onChange={(e) => setFormState({ ...formState, scope: e.target.value })}
                  className="w-full bg-obsidian border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-accent font-sans transition-colors"
                >
                  <option>New Product UI/UX & Frontend Architecture</option>
                  <option>Design System & Multi-Team Governance</option>
                  <option>Enterprise Headless Web Migration</option>
                  <option>Consulting & Product Heuristic Audit</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-xs font-mono text-zinc-400 mb-1.5"
                  htmlFor="contact-message"
                >
                  MISSION PARAMETERS / MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Describe your challenge, timeline, and goals..."
                  className="w-full bg-obsidian border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-accent font-sans transition-colors resize-none"
                ></textarea>
              </div>

              <button
                id="contact-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  isSuccess
                    ? 'bg-emerald-400 text-obsidian shadow-[0_0_20px_rgba(52,211,153,0.4)]'
                    : 'bg-cyan-accent text-obsidian hover:bg-white shadow-[0_0_20px_rgba(0,242,254,0.3)]'
                }`}
              >
                {isSubmitting ? (
                  <span className="font-mono">Encrypting & Transmitting...</span>
                ) : isSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Transmission Transmitted Successfully ✓</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Transmit Mission Brief</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
