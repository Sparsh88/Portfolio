import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScrollProgress } from './components/common/ScrollProgress';
import { CustomCursor } from './components/common/CustomCursor';
import { CommandPalette } from './components/common/CommandPalette';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { CertificatesSection } from './components/certificates/CertificatesSection';
import { ServicesSection } from './components/services/ServicesSection';
import { TimelineSection } from './components/timeline/TimelineSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { AchievementsSection } from './components/stats/AchievementsSection';
import { ContactSection } from './components/contact/ContactSection';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#0b0b0b] text-white selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />

        <main className="bg-[#0b0b0b]">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <CertificatesSection />
          <ServicesSection />
          <TimelineSection />
          <ProjectsSection />
          <AchievementsSection />
          <ContactSection />
        </main>

        <Footer />
        <CommandPalette />
      </div>
    </ThemeProvider>
  );
};

export default App;
