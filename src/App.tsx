import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { AnimatePresence } from 'framer-motion';

const MainPortfolioContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-[#F3F4F6] dark:bg-[#000000] text-neutral-950 dark:text-white flex flex-col selection:bg-neutral-900 dark:selection:bg-white selection:text-white dark:selection:text-black transition-colors duration-300">
        {/* Sticky Editorial Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Achievements />
          <Contact />
        </main>

        {/* Clean Minimalist Footer */}
        <Footer />
      </div>
    </>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MainPortfolioContent />
    </ThemeProvider>
  );
};

export default App;
