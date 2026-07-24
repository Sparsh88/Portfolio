import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

import emailjs from '@emailjs/browser';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: PERSONAL_INFO.email,
          },
          publicKey
        );
      } else {
        // Fallback: Open email client addressed to sparshchauhan050@gmail.com
        const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
          formData.subject || 'Portfolio Contact'
        )}&body=${encodeURIComponent(
          `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
      }
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      console.error('EmailJS error, using mailto fallback:', err);
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Contact'
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email Me Directly',
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
    },
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: `+91 ${PERSONAL_INFO.phone}`,
      href: `tel:${PERSONAL_INFO.phone}`,
    },
    {
      icon: MapPin,
      label: 'Current Location',
      value: `${PERSONAL_INFO.location}`,
      href: '#',
    },
  ];

  return (
    <section id="contact" className="pt-48 pb-24 scroll-mt-40 relative bg-black text-white border-t border-zinc-900 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-14 text-left"
        >
          <div className="text-xs font-mono font-bold text-blue-500 tracking-widest uppercase">
            09 / GET IN TOUCH
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Let's Build Together
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Have a project idea, internship opportunity, or technical inquiry? Reach out directly using the form below or through my official contact channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Quick Connect Cards & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <div className="space-y-4">
              {contactMethods.map((method, idx) => {
                const Icon = method.icon;
                return (
                  <a
                    key={idx}
                    href={method.href}
                    className="p-6 card-hover-effect flex items-center gap-4 block"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center text-blue-400 shrink-0 group-hover:border-blue-500/50 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400">{method.label}</div>
                      <div className="text-base font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                        {method.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links Box */}
            <div className="p-6 card-hover-effect space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Social Channels</div>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-2xl bg-black border border-zinc-800 text-slate-200 text-xs font-mono font-semibold hover:border-blue-500/60 hover:text-white flex items-center gap-2 transition-all flex-1 justify-center"
                >
                  <Github className="w-4 h-4 text-blue-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-2xl bg-black border border-zinc-800 text-slate-200 text-xs font-mono font-semibold hover:border-blue-500/60 hover:text-white flex items-center gap-2 transition-all flex-1 justify-center"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 card-hover-effect relative overflow-hidden text-left">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Message Sent Successfully!</h3>
                  <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, Sparsh has received your message and will reply to your email address shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 font-semibold">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-black border border-zinc-800 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 font-semibold">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-black border border-zinc-800 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-semibold">Subject *</label>
                    <input
                      type="text"
                      required
                      placeholder="Project Inquiry / Internship Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-black border border-zinc-800 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-semibold">Your Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hi Sparsh, I came across your portfolio and would like to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-black border border-zinc-800 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-semibold shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
