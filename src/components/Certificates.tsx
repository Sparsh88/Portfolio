import React, { useState } from 'react';
import { certificatesData } from '../data/certificates';
import { ExternalLink, CheckCircle2, Calendar, BookCheck, X, FileText, Download } from 'lucide-react';
import type { Certificate } from '../types';

const CERT_THEMES = [
  {
    badge: 'bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 border-sky-300 dark:border-sky-800',
    border: 'border-2 border-sky-300 dark:border-sky-900/80 hover:border-sky-500 dark:hover:border-sky-400 group-hover:border-sky-500',
    techBadge: 'bg-sky-50 dark:bg-[#141414] text-sky-900 dark:text-sky-200 border border-sky-200 dark:border-sky-900/80 hover:bg-sky-100',
    cardBg: 'bg-white dark:bg-[#0D0D0D]',
    shadowHover: 'hover:shadow-[0_20px_35px_-10px_rgba(14,165,233,0.25)]',
  },
  {
    badge: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
    border: 'border-2 border-emerald-300 dark:border-emerald-900/80 hover:border-emerald-500 dark:hover:border-emerald-400 group-hover:border-emerald-500',
    techBadge: 'bg-emerald-50 dark:bg-[#141414] text-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-900/80 hover:bg-emerald-100',
    cardBg: 'bg-white dark:bg-[#0D0D0D]',
    shadowHover: 'hover:shadow-[0_20px_35px_-10px_rgba(16,185,129,0.25)]',
  },
  {
    badge: 'bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 border-amber-300 dark:border-amber-800',
    border: 'border-2 border-amber-300 dark:border-amber-900/80 hover:border-amber-500 dark:hover:border-amber-400 group-hover:border-amber-500',
    techBadge: 'bg-amber-50 dark:bg-[#141414] text-amber-900 dark:text-amber-200 border border-amber-200 dark:border-amber-900/80 hover:bg-amber-100',
    cardBg: 'bg-white dark:bg-[#0D0D0D]',
    shadowHover: 'hover:shadow-[0_20px_35px_-10px_rgba(245,158,11,0.25)]',
  },
  {
    badge: 'bg-purple-100 dark:bg-purple-950 text-purple-900 dark:text-purple-300 border-purple-300 dark:border-purple-800',
    border: 'border-2 border-purple-300 dark:border-purple-900/80 hover:border-purple-500 dark:hover:border-purple-400 group-hover:border-purple-500',
    techBadge: 'bg-purple-50 dark:bg-[#141414] text-purple-900 dark:text-purple-200 border border-purple-200 dark:border-purple-900/80 hover:bg-purple-100',
    cardBg: 'bg-white dark:bg-[#0D0D0D]',
    shadowHover: 'hover:shadow-[0_20px_35px_-10px_rgba(168,85,247,0.25)]',
  },
  {
    badge: 'bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-300 border-rose-300 dark:border-rose-800',
    border: 'border-2 border-rose-300 dark:border-rose-900/80 hover:border-rose-500 dark:hover:border-rose-400 group-hover:border-rose-500',
    techBadge: 'bg-rose-50 dark:bg-[#141414] text-rose-900 dark:text-rose-200 border border-rose-200 dark:border-rose-900/80 hover:bg-rose-100',
    cardBg: 'bg-white dark:bg-[#0D0D0D]',
    shadowHover: 'hover:shadow-[0_20px_35px_-10px_rgba(244,63,94,0.25)]',
  },
];

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-20 sm:py-28 bg-[#F3F4F6] dark:bg-[#000000] scroll-mt-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-block">
            <span className="bg-white dark:bg-[#0D0D0D] border-2 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-200 text-[11px] font-bold px-3.5 py-1 rounded-full tracking-wider uppercase shadow-xs">
              CREDENTIALS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 dark:text-white uppercase tracking-tight leading-[1.1]">
            CERTIFICATES &amp; LEARNING
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-normal">
            Verified credentials, academic assessments, and technical specializations.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {certificatesData.map((cert, idx) => {
            const theme = CERT_THEMES[idx % CERT_THEMES.length];
            return (
              <div
                key={cert.id}
                className={`group ${theme.cardBg} rounded-3xl p-7 ${theme.border} shadow-md ${theme.shadowHover} hover:-translate-y-2 transition-all duration-300 ease-out transform flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className={`px-3 py-1 text-[11px] font-bold rounded-full border ${theme.badge} tracking-wider uppercase flex items-center gap-1.5 transition-colors duration-200 shadow-xs`}>
                      <BookCheck className="w-3.5 h-3.5" />
                      <span>VERIFIED</span>
                    </span>
                    <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-[#141414] px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-800 flex items-center gap-1.5 shadow-3xs">
                      <Calendar className="w-3 h-3 text-neutral-700 dark:text-neutral-300" /> {cert.date}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400 mt-1">
                    {cert.issuer}
                  </p>

                  <div className="mt-5">
                    <div className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2.5">
                      CORE CONCEPTS
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsLearned.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${theme.techBadge} transition-all duration-200 hover:scale-105 shadow-3xs`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-800 dark:text-neutral-300" /> Verified
                  </span>

                  {cert.credentialUrl ? (
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-black dark:text-white hover:text-blue-600 dark:hover:text-sky-400 transition-colors group/link cursor-pointer"
                    >
                      <span className="underline">View Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </button>
                  ) : (
                    <span className="text-xs text-neutral-500 italic font-normal">
                      Verified Certificate
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certificate PDF Viewer Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="fixed inset-0" onClick={() => setSelectedCert(null)} />

            <div className="relative w-full max-w-4xl bg-white dark:bg-[#0D0D0D] rounded-3xl shadow-2xl border-2 border-neutral-300 dark:border-neutral-800 overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col">
              {/* Header */}
              <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-[#F8F9FA] dark:bg-[#141414]">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shadow-xs">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950 dark:text-white">{selectedCert.title}</h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{selectedCert.issuer} • {selectedCert.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-semibold text-neutral-800 dark:text-neutral-200 bg-white dark:bg-[#1C1C1C] hover:bg-neutral-100 dark:hover:bg-[#252525] border border-neutral-300 dark:border-neutral-700 rounded-full transition-colors shadow-3xs"
                    title="Open in new tab"
                  >
                    <span>Open in tab</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={selectedCert.credentialUrl}
                    download
                    className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-semibold text-white dark:text-black bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-full transition-colors shadow-xs"
                    title="Download Certificate PDF"
                  >
                    <span>Download</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-full text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors ml-1"
                    aria-label="Close PDF Viewer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer Frame */}
              <div className="flex-1 bg-neutral-100 dark:bg-black p-2 sm:p-4 min-h-[60vh] sm:min-h-[70vh]">
                <iframe
                  src={`${selectedCert.credentialUrl}#toolbar=0`}
                  title={selectedCert.title}
                  className="w-full h-full min-h-[60vh] sm:min-h-[70vh] rounded-2xl border border-neutral-300 dark:border-neutral-800 bg-white shadow-xs"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
