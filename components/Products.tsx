import React from 'react';
import { Cctv, Server, Router, Wifi, Battery } from 'lucide-react';
import { ProductItem } from '../types';

const productCategories: ProductItem[] = [
  {
    category: 'CCTV & Security',
    items: ['IP Cameras', 'NVR/DVR Systems', 'Analytics Software'],
    icon: Cctv,
  },
  {
    category: 'Networking',
    items: ['Enterprise Switches', 'Routers', 'Access Points'],
    icon: Router,
  },
  {
    category: 'Fiber Optics',
    items: ['Fiber Cables', 'Splicing Tools', 'Accessories'],
    icon: Server,
  },
  {
    category: 'Wireless',
    items: ['Outdoor Radios', 'Antennas', 'Long-range Links'],
    icon: Wifi,
  },
  {
    category: 'Power Backup',
    items: ['Online UPS', 'Inverters', 'Solar Batteries'],
    icon: Battery,
  },
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="blur-reveal text-3xl md:text-4xl font-bold text-white mb-4">Products & Solutions</h2>
            <p className="blur-reveal delay-100 text-slate-400">Top-tier hardware and software from world-renowned manufacturers.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {productCategories.map((product, idx) => (
            <div key={idx} className={`bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group reveal delay-${(idx % 5) * 100}`}>
              <div className="w-12 h-12 rounded-full bg-brand-navy border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <product.icon className="text-blue-400 w-6 h-6" />
              </div>
              <h4 className="text-white font-bold text-lg mb-3">{product.category}</h4>
              <ul className="space-y-2">
                {product.items.map((item, i) => (
                  <li key={i} className="text-sm text-slate-500 hover:text-blue-300 transition-colors cursor-default">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;