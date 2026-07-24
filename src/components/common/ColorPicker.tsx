import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { AccentTheme } from '../../types';
import { useSoundEffects } from '../../hooks/useSoundEffects';

export const ColorPicker: React.FC = () => {
  const { accent, setAccent } = useTheme();
  const { playClick } = useSoundEffects();
  const [isOpen, setIsOpen] = useState(false);

  const colors: { name: AccentTheme; label: string; bgClass: string }[] = [
    { name: 'violet', label: 'Electric Violet', bgClass: 'bg-indigo-500' },
    { name: 'cyan', label: 'Cyber Cyan', bgClass: 'bg-cyan-500' },
    { name: 'emerald', label: 'Emerald Mint', bgClass: 'bg-emerald-500' },
    { name: 'rose', label: 'Sunset Rose', bgClass: 'bg-rose-500' },
  ];

  const handleSelect = (color: AccentTheme) => {
    playClick();
    setAccent(color);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select Theme Color Accent"
        className="p-2 rounded-xl bg-slate-800/60 dark:bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-200"
      >
        <Palette className="w-5 h-5 text-indigo-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 p-2 rounded-xl glass-modal shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="text-xs font-semibold text-slate-400 px-2 py-1 mb-1 uppercase tracking-wider">
            Accent Theme
          </div>
          <div className="space-y-1">
            {colors.map((c) => (
              <button
                key={c.name}
                onClick={() => handleSelect(c.name)}
                className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  accent === c.name ? 'bg-slate-800 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                <span className={`w-3 h-3 rounded-full ${c.bgClass}`} />
                {c.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
