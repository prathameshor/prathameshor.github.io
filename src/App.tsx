import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { portfolioData } from './data/portfolio';
import './styles/globals.css';

const sectionIds = ['top', 'about', 'skills', 'experience', 'education', 'work', 'contact'];

const App: React.FC = () => {
  const sliderRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const updateActiveSection = () => {
      const panelWidth = slider.clientWidth;
      const activeIndex = Math.round(slider.scrollLeft / panelWidth);
      setActiveSection(sectionIds[activeIndex] ?? 'top');
    };

    slider.addEventListener('scroll', updateActiveSection, { passive: true });
    updateActiveSection();
    return () => slider.removeEventListener('scroll', updateActiveSection);
  }, []);

  return (
    <div className={activeSection === 'top' ? 'portfolio-app is-dark home-view' : 'portfolio-app is-dark browsing-view'}>
      <Header activeSection={activeSection} />
      <aside className="intro-rail" aria-label="Profile summary">
        <a className="intro-rail-name" href="#top">{portfolioData.profile.name}<span className="accent-dot">.</span></a>
        <p>{portfolioData.profile.role}</p>
        <span>{portfolioData.profile.location}</span>
      </aside>
      <main ref={sliderRef} className="section-slider" aria-label="Portfolio sections">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;