import React from 'react';
import { Camera, Zap, Network, Radio, Cable } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: 'CCTV Solutions',
    description: 'High-quality CCTV systems through partnerships with top global brands. secure installation, configuration, and long-term support.',
    icon: Camera,
  },
  {
    title: 'Optical Fiber Solutions',
    description: 'FTTC, FTTP, and FTTH solutions for businesses. Reliable fiber infrastructure designed to meet modern data demands.',
    icon: Cable,
  },
  {
    title: 'Wireless PTP / PTMP',
    description: 'Professional point-to-point and point-to-multipoint wireless solutions for ISPs, telecom providers, and private networks.',
    icon: Radio,
  },
  {
    title: 'Power Solutions',
    description: 'Solar panel systems, UPS installation, and inverter solutions designed to keep IT infrastructure running without interruption.',
    icon: Zap,
  },
  {
    title: 'Network Equipment',
    description: 'Structured cabling, switches, routers, racks, network organization, and complete enterprise network setups.',
    icon: Network,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="blur-reveal text-3xl md:text-5xl font-bold text-white mb-6">What We Do</h2>
          <p className="blur-reveal delay-100 text-slate-400 max-w-2xl mx-auto text-lg">
            Comprehensive technical services tailored to secure and empower your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`reveal delay-${(index % 3) * 100}`}
            >
              <div
                className="group relative p-8 rounded-2xl bg-card-gradient border border-white/5 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 h-full"
              >
                <div className="absolute inset-0 bg-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors duration-300">
                    <service.icon className="text-blue-400 group-hover:text-white w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;