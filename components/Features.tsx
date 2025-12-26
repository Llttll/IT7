import React from 'react';
import { ShieldCheck, Award, Users, Clock } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: 'Reliable Support',
    description: '24/7 technical assistance ensuring your systems never go offline.',
    icon: ShieldCheck,
  },
  {
    title: 'High Quality',
    description: 'We use only premium equipment from certified global partners.',
    icon: Award,
  },
  {
    title: 'Expert Engineers',
    description: 'Our team is certified and experienced in complex deployments.',
    icon: Users,
  },
  {
    title: 'Fast Response',
    description: 'Quick mobilization for installation and emergency maintenance.',
    icon: Clock,
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-brand-navy to-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-3xl p-8 md:p-12 reveal">
          <div className="text-center mb-12">
            <h2 className="blur-reveal text-3xl font-bold text-white mb-2">Why Choose IT7?</h2>
            <p className="blur-reveal delay-100 text-blue-200">The difference is in our commitment to excellence.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-brand-accent rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20 transform rotate-3 hover:rotate-6 transition-transform">
                  <feature.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;