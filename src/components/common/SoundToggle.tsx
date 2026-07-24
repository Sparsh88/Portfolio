import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const SoundToggle: React.FC = () => {
  const { soundEnabled, toggleSound } = useTheme();

  return (
    <button
      onClick={toggleSound}
      aria-label="Toggle Sound Effects"
      title={soundEnabled ? 'Disable UI Sound Effects' : 'Enable UI Sound Effects'}
      className="p-2 rounded-xl bg-slate-800/60 dark:bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-200"
    >
      {soundEnabled ? (
        <Volume2 className="w-5 h-5 text-indigo-400" />
      ) : (
        <VolumeX className="w-5 h-5 text-slate-500" />
      )}
    </button>
  );
};
