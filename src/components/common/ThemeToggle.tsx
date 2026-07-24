import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useSoundEffects } from '../../hooks/useSoundEffects';

export const ThemeToggle: React.FC = () => {
  const { mode, toggleMode } = useTheme();
  const { playClick } = useSoundEffects();

  const handleToggle = () => {
    playClick();
    toggleMode();
  };

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle Dark/Light Mode"
      className="p-2 rounded-xl bg-slate-800/60 dark:bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-200"
    >
      {mode === 'dark' ? (
        <Sun className="w-5 h-5 text-amber-400 hover:rotate-45 transition-transform" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-400 hover:-rotate-12 transition-transform" />
      )}
    </button>
  );
};
