import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, GraduationCap, Code2, Lock, Sparkles, FileText, ArrowUpRight } from 'lucide-react';
import { CERTIFICATES_DATA } from '../../data/portfolioData';
import { CertificateModal } from './CertificateModal';
import { Certificate } from '../../types';
import { CERTIFICATE_PDF_MAP } from '../../assets/certificatesMap';

export const CertificatesSection: React.FC = () => {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  const getCertConfig = (id: string) => {
    switch (id) {
      case 'infosys-dbms':
        return {
          gradient: 'from-blue-950/80 via-[#0d1527] to-[#111113]',
          iconColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
          icon: ShieldCheck,
          badge: 'INFOSYS CERTIFIED',
          categoryTag: 'DATABASE MANAGEMENT',
        };
      case 'infosys-cpp':
        return {
          gradient: 'from-cyan-950/80 via-[#0c2328] to-[#111113]',
          iconColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
          icon: Code2,
          badge: 'INFOSYS CERTIFIED',
          categoryTag: 'C++ PROGRAMMING',
        };
      case 'coding-tantra-dsa':
        return {
          gradient: 'from-purple-950/80 via-[#180e29] to-[#111113]',
          iconColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
          icon: GraduationCap,
          badge: 'PROCTORED EXAM',
          categoryTag: 'DATA STRUCTURES & ALGORITHMS',
        };
      case 'wns-cybersmart':
        return {
          gradient: 'from-emerald-950/80 via-[#0b2220] to-[#111113]',
          iconColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
          icon: Lock,
          badge: 'SUMMER INTERNSHIP',
          categoryTag: 'CYBERSMART CSR INTERNSHIP',
        };
      case 'codeclash-participation':
      default:
        return {
          gradient: 'from-indigo-950/80 via-[#131126] to-[#111113]',
          iconColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
          icon: Sparkles,
          badge: 'EVENT BADGE',
          categoryTag: 'CODING COMPETITION',
        };
    }
  };

  return (
    <section id="certificates" className="pt-48 pb-24 scroll-mt-40 relative bg-black text-white border-t border-zinc-900 overflow-hidden">
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
            04 / VERIFIED CREDENTIALS
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Certifications & Badges
          </h2>
        </motion.div>

        {/* Certificates Grid with Glowing Blue Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES_DATA.map((cert, idx) => {
            const config = getCertConfig(cert.id);
            const IconComponent = config.icon;
            const pdfUrl = CERTIFICATE_PDF_MAP[cert.id];

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="card-hover-effect overflow-hidden flex flex-col justify-between"
              >
                {/* Top Banner Box */}
                <div className={`relative p-8 bg-gradient-to-b ${config.gradient} border-b border-zinc-900 flex flex-col items-center justify-center text-center space-y-4`}>
                  {/* Top Badge Tag */}
                  <div className="absolute top-4 left-4 px-2.5 py-0.5 rounded-full bg-black/80 border border-zinc-800 text-[9px] font-mono tracking-wider text-slate-400 uppercase">
                    {config.badge}
                  </div>

                  {/* Central Icon Square */}
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${config.iconColor} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title inside banner */}
                  <h4 className="text-base font-bold text-white tracking-tight leading-snug">
                    {cert.title}
                  </h4>

                  {/* Issuer Subtitle */}
                  <div className="text-xs text-blue-400 font-mono font-semibold">
                    {cert.issuer}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5 text-left">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>{cert.issueDate}</span>
                      <span className="text-slate-500">{cert.credentialId}</span>
                    </div>

                    {/* Verified skills tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-xl bg-black/80 text-[10px] font-mono text-slate-300 border border-zinc-900 flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-3 h-3 text-blue-400" />
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* View Details Link */}
                    <button
                      onClick={() => setActiveCert(cert)}
                      className="pt-2 text-xs font-mono font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5 group/btn"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>View key details</span>
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-zinc-900 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveCert(cert)}
                      className="py-2.5 px-4 rounded-2xl bg-black hover:bg-zinc-900 text-slate-300 text-xs font-mono font-semibold border border-zinc-800 flex items-center gap-2 transition-all flex-1 justify-center"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>View Document</span>
                    </button>

                    {pdfUrl ? (
                      <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-semibold shadow-lg shadow-blue-600/30 flex items-center gap-1.5 transition-all flex-1 justify-center hover:scale-105"
                      >
                        <span>View PDF</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        onClick={() => setActiveCert(cert)}
                        className="py-2.5 px-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-semibold shadow-lg shadow-blue-600/30 flex items-center gap-1.5 transition-all flex-1 justify-center hover:scale-105"
                      >
                        <span>View PDF</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      <CertificateModal
        certificate={activeCert}
        onClose={() => setActiveCert(null)}
      />
    </section>
  );
};
