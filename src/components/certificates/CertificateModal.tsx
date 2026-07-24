import React from 'react';
import { X, Award, CheckCircle, Calendar, ShieldCheck, ExternalLink } from 'lucide-react';
import { Certificate } from '../../types';
import { CERTIFICATE_PDF_MAP } from '../../assets/certificatesMap';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  const pdfUrl = CERTIFICATE_PDF_MAP[certificate.id];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl glass-modal rounded-3xl shadow-2xl border border-slate-800 overflow-hidden my-6 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{certificate.title}</h3>
              <p className="text-xs text-blue-400 font-mono">{certificate.issuer}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate PDF Document Viewer */}
        <div className="p-4 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {pdfUrl ? (
            <div className="relative rounded-2xl overflow-hidden border border-[#1e1e24] bg-black shadow-2xl">
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0`}
                title={certificate.title}
                className="w-full h-[320px] sm:h-[520px] rounded-2xl border-0"
              />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/90 border border-blue-500/40 text-blue-300 text-xs font-mono flex items-center gap-1.5 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Verified PDF Certificate</span>
              </div>
            </div>
          ) : (
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-64 object-cover"
              />
            </div>
          )}

          {/* Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div>
              <span className="text-slate-400 block mb-0.5 uppercase">Issuing Authority</span>
              <span className="text-white font-semibold">{certificate.issuer}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5 uppercase">Issue Date</span>
              <span className="text-white font-semibold flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                {certificate.issueDate}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5 uppercase">Credential ID</span>
              <span className="text-blue-400 font-bold">{certificate.credentialId}</span>
            </div>
          </div>

          {/* Key Competencies */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Competencies Verified</div>
            <div className="flex flex-wrap gap-2">
              {certificate.skills.map((s, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl bg-slate-900 text-xs text-slate-200 border border-slate-800 flex items-center gap-1.5 font-mono"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between gap-3">
          <span className="text-xs font-mono text-slate-500 hidden sm:inline">Official Certificate Document</span>
          <div className="flex items-center gap-3 ml-auto">
            {pdfUrl && (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 flex items-center gap-1.5 transition-all"
              >
                <span>Open Full PDF</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 transition-all"
            >
              Close Viewer
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
