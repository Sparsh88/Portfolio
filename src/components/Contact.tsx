import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F3F4F6] dark:bg-[#000000] border-t border-neutral-300 dark:border-neutral-800 scroll-mt-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-block">
            <span className="bg-white dark:bg-[#0D0D0D] border-2 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-200 text-[11px] font-bold px-3.5 py-1 rounded-full tracking-wider uppercase shadow-xs">
              CONTACT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 dark:text-white uppercase tracking-tight leading-[1.1]">
            LET'S CONNECT
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-normal">
            Have a project in mind, an opportunity, or just want to discuss web engineering? Drop a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#0D0D0D] rounded-3xl p-7 border-2 border-neutral-300 dark:border-neutral-800 shadow-md space-y-6">
              <div>
                <h3 className="text-lg font-bold text-neutral-950 dark:text-white">Direct Communication</h3>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">Feel free to reach out directly via email or LinkedIn.</p>
              </div>

              {/* Email Card */}
              <a
                href="mailto:sparshchauhan050@gmail.com"
                className="flex items-center space-x-3.5 p-4 rounded-2xl bg-[#F8F9FA] dark:bg-[#141414] border border-neutral-300 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-500 transition-colors group shadow-3xs"
              >
                <div className="w-10 h-10 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Email Address</div>
                  <div className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white truncate">sparshchauhan050@gmail.com</div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Social Connects */}
              <div className="space-y-3 pt-2">
                <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Social Channels</div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://github.com/Sparsh88"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2.5 p-3 rounded-2xl bg-[#F8F9FA] dark:bg-[#141414] border border-neutral-300 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-500 transition-colors group shadow-3xs"
                  >
                    <GithubIcon className="w-4 h-4 text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white" />
                    <span className="text-xs font-bold text-neutral-900 dark:text-white">GitHub</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/sparshchauhan08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2.5 p-3 rounded-2xl bg-[#F8F9FA] dark:bg-[#141414] border border-neutral-300 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-500 transition-colors group shadow-3xs"
                  >
                    <LinkedinIcon className="w-4 h-4 text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white" />
                    <span className="text-xs font-bold text-neutral-900 dark:text-white">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0D0D0D] rounded-3xl p-7 sm:p-9 border-2 border-neutral-300 dark:border-neutral-800 shadow-md">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-neutral-950 dark:text-white">Message Dispatched!</h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
                  Thank you for reaching out, Sparsh will get back to you shortly at <strong className="text-neutral-950 dark:text-white">{formState.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', email: '', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 text-xs font-semibold text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F9FA] dark:bg-[#141414] border-2 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 text-sm focus:outline-hidden focus:border-black dark:focus:border-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F9FA] dark:bg-[#141414] border-2 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 text-sm focus:outline-hidden focus:border-black dark:focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, team opportunity, or inquiry..."
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F9FA] dark:bg-[#141414] border-2 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 text-sm focus:outline-hidden focus:border-black dark:focus:border-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 text-sm font-semibold text-white bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
