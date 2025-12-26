import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Products from './components/Products';
import Features from './components/Features';

import Contact from './components/Contact';

const App: React.FC = () => {
  useEffect(() => {
    // Scroll Reveal Observer (IntersectionObserver)
    // This handles the blur and fade animations when elements scroll into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.15, // Trigger when 15% of element is visible
      rootMargin: "0px 0px -50px 0px" // Trigger slightly before it enters full view
    });

    // Observe all reveal elements (standard and blur)
    // Using setTimeout to ensure DOM is fully ready
    setTimeout(() => {
      const elements = document.querySelectorAll('.reveal, .blur-reveal');
      elements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen text-white selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Products />
        <Features />

      </main>
      <Contact />
    </div>
  );
};

export default App;