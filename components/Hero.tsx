import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Configuration for the network effect
    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 15000), 100); 
    const connectionDistance = 150;
    const mouse = { x: 0, y: 0 };

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle (node)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.5)'; // Blue-500 with opacity
        ctx.fill();

        // Draw connections (wires)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.15})`; // Subtle blue lines
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
        
        // Connect to mouse if close
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            const opacity = 1 - distance / 200;
            ctx.strokeStyle = `rgba(96, 165, 250, ${opacity * 0.2})`; // Lighter blue for interaction
            ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-brand-dark">
      {/* Dynamic Network Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-60"
      />

      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-hero-glow opacity-60 mix-blend-overlay"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="blur-reveal inline-flex items-center gap-2 px-2 py-1.5 pr-3 rounded-full bg-blue-900/30 border border-blue-500/30 backdrop-blur-sm mb-8 hover:bg-blue-900/40 transition-colors cursor-default">
          <span className="bg-brand-accent text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">NEW</span>
          <span className="text-blue-200 text-xs font-medium">Leading IT Solutions in Iraq</span>
          <ChevronRight size={12} className="text-blue-400" />
        </div>

        {/* Animated Title with Blur Reveal */}
        <h1 className="blur-reveal delay-100 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-8">
          Professional IT & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-[length:200%_auto] animate-text-gradient">
            Technical Solutions
          </span>
        </h1>

        <p className="blur-reveal delay-200 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Providing trusted IT services, advanced security systems, and smart networking solutions across Iraq. Empowering modern businesses with robust infrastructure.
        </p>

        {/* Buttons */}
        <div className="blur-reveal delay-300 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <a 
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-brand-dark font-bold hover:bg-gray-100 transition-colors shadow-lg shadow-white/10"
          >
            Get a Quote
          </a>
          <a 
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/5 text-white font-semibold border border-white/10 hover:bg-white/10 backdrop-blur-sm transition-all group"
          >
            Our Services
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;