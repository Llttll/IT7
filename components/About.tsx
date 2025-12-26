import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import aboutImage from '../images/IMG_20251225_155540_912.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-navy border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <div className="order-2 lg:order-1 relative reveal">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-xl"></div>
            <img
              src={aboutImage}
              alt="IT Engineer"
              className="relative rounded-2xl shadow-2xl border border-white/10 w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-dark p-6 rounded-xl border border-white/10 shadow-xl max-w-xs">
              <p className="text-white font-bold text-lg mb-1">Baghdad HQ</p>
              <p className="text-slate-400 text-sm">Serving clients from our main office in Sinaa Street.</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <h2 className="blur-reveal text-blue-500 font-semibold tracking-wide uppercase text-sm mb-3">Who We Are</h2>
            <h3 className="blur-reveal delay-100 text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              An Iraqi Technical Solutions Company.
            </h3>

            <p className="blur-reveal delay-200 text-slate-400 text-lg mb-8 leading-relaxed">
              IT7 is a specialized company working in the field of Information Technology and advanced technical services. We deliver complete IT infrastructure solutions supported by a professional engineering team. Our focus is providing clients with reliable systems, high-quality products, and continuous technical support.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Best IT Solutions",
                "Professional Engineering Team",
                "High-Quality Services",
                "Continuous Technical Support",
                "Trusted by businesses across Iraq"
              ].map((item, i) => (
                <div key={i} className={`flex items-center space-x-3 blur-reveal delay-${Math.min((i + 3) * 100, 500)}`}>
                  <CheckCircle2 className="text-brand-accent w-5 h-5 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;