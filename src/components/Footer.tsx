import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#000000] border-t-2 border-neutral-300 dark:border-neutral-800 py-12 transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 text-center sm:text-left">
            <div className="text-base font-bold text-neutral-950 dark:text-white">
              Sparsh <span className="font-normal text-neutral-500 dark:text-neutral-400">Chauhan</span>
            </div>
            <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">•</span>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              © {new Date().getFullYear()} Sparsh Chauhan. Built with React &amp; Tailwind CSS.
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Sparsh88"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-neutral-100 dark:bg-[#141414] hover:bg-neutral-200 dark:hover:bg-[#202020] text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com/in/sparshchauhan08"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-neutral-100 dark:bg-[#141414] hover:bg-neutral-200 dark:hover:bg-[#202020] text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-neutral-100 dark:bg-[#141414] hover:bg-neutral-200 dark:hover:bg-[#202020] text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </motion.div>
    </footer>
  );
};
