import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export const Hero: React.FC = () => {
  const handleResumeClick = () => {
    const resumePath = '/resume.pdf';
    fetch(resumePath, { method: 'HEAD' })
      .then(res => {
        if (!res.ok) {
          alert('Resume will be available for download shortly. You can also connect via LinkedIn or email.');
        }
      })
      .catch(() => {});
  };

  return (
    <section id="home" className="pt-32 sm:pt-36 pb-20 sm:pb-28 bg-[#F3F4F6] dark:bg-[#000000] overflow-hidden scroll-mt-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0D0D0D] border-2 border-neutral-300 dark:border-neutral-800 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 dark:bg-emerald-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-700 dark:bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-bold text-neutral-900 dark:text-neutral-200 tracking-wider uppercase">
                AVAILABLE FOR INTERNSHIPS &amp; PROJECTS
              </span>
            </div>

            {/* Name Overline */}
            <div className="text-base sm:text-lg font-bold text-neutral-500 dark:text-neutral-400 tracking-tight">
              Sparsh Chauhan
            </div>

            {/* Balanced FULL-STACK DEVELOPER Heading */}
            <div className="space-y-0.5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 dark:text-white uppercase tracking-tight leading-[1.05]">
                FULL-STACK<br />
                <span className="text-neutral-400 dark:text-neutral-500">DEVELOPER</span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal pt-1">
              Hi, I'm Sparsh, a B.Tech Computer Science &amp; Engineering student at Lovely Professional University, building high-quality, functional, and intuitive web experiences.
            </p>

            {/* Action Buttons: View Projects, Resume, Get In Touch */}
            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3.5 text-sm font-semibold text-white bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleResumeClick}
                className="inline-flex items-center space-x-2 px-5 py-3.5 text-sm font-semibold text-neutral-900 dark:text-white bg-white dark:bg-[#0D0D0D] hover:bg-neutral-100 dark:hover:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-800 rounded-full transition-all duration-200 shadow-xs hover:-translate-y-0.5 active:scale-95"
              >
                <FileText className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                <span>Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-neutral-900 dark:text-white bg-white dark:bg-[#0D0D0D] hover:bg-neutral-100 dark:hover:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-800 rounded-full transition-all duration-200 shadow-xs hover:-translate-y-0.5 active:scale-95"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Column: User Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square rounded-[2.5rem] bg-white dark:bg-[#0D0D0D] p-3 border-2 border-neutral-300 dark:border-neutral-800 shadow-md group hover:shadow-xl transition-all duration-300">
              
              {/* Inner Portrait Container */}
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 relative">
                <img
                  src={profileImg}
                  alt="Sparsh Chauhan - Full Stack Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
