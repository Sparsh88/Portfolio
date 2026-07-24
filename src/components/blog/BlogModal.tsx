import React from 'react';
import { X, Calendar, Clock, Tag } from 'lucide-react';
import { BlogPost } from '../../types';
import { useSoundEffects } from '../../hooks/useSoundEffects';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  const { playClick } = useSoundEffects();

  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-3xl glass-modal rounded-3xl shadow-2xl border border-slate-800 overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        
        {/* Header Cover Image */}
        <div className="relative h-60 w-full overflow-hidden bg-slate-900">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d121e] via-[#0d121e]/50 to-transparent" />

          {/* Close Button */}
          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-700/80 transition-all z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title & Metadata */}
          <div className="absolute bottom-6 left-6 right-6 space-y-2 z-10">
            <span className="px-3 py-1 rounded-full bg-indigo-600/30 border border-indigo-500/40 text-xs font-mono text-indigo-300">
              {post.category}
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              {post.title}
            </h2>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-300 pt-1">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Blog Post Markdown / Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto text-slate-300 text-sm leading-relaxed font-sans">
          <div className="prose prose-invert max-w-none space-y-4">
            {post.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('# ')) {
                return <h1 key={i} className="text-2xl font-bold text-white pt-2">{paragraph.replace('# ', '')}</h1>;
              }
              if (paragraph.startsWith('## ')) {
                return <h2 key={i} className="text-xl font-bold text-indigo-300 pt-2">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={i} className="text-lg font-bold text-slate-200 pt-1">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('```')) {
                return (
                  <pre key={i} className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 overflow-x-auto">
                    <code>{paragraph.replace(/```[a-z]*/g, '')}</code>
                  </pre>
                );
              }
              return <p key={i}>{paragraph}</p>;
            })}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-indigo-400 border border-slate-800 flex items-center gap-1">
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex justify-end">
          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30"
          >
            Close Article
          </button>
        </div>

      </div>
    </div>
  );
};
