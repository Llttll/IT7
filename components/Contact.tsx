import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram, Send as Telegram } from 'lucide-react';

const Tiktok = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 1 0-1 13.6 6.84 6.84 0 0 0 6.82-6.85V7.97a9.68 9.68 0 0 0 4.7 1.97v-3.75a6.43 6.43 0 0 1-1.29-.5z" />
  </svg>
);

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-navy pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div className="reveal">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-12 h-12 rounded flex items-center justify-center">
                <img src="/logo.png" alt="" />
              </div>
              <span className="text-2xl font-bold text-white">IT7 Solutions</span>
            </div>

            <p className="text-slate-400 mb-8 max-w-md">
              Ready to upgrade your infrastructure? Contact our engineering team today for a free consultation and quote.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-brand-accent mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Head Office</h4>
                  <p className="text-slate-400">Sinaa Street, Baghdad, Iraq</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-brand-accent mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-slate-400">+964 777 570 8777</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-brand-accent mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-slate-400">info@it7.iq</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-12">
              <a href="https://www.instagram.com/it7.iraq?igsh=ODlub2tpOGFwNDJ0" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-accent hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/IT7.iQ/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-accent hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://www.tiktok.com/@it7.co" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-accent hover:text-white transition-all">
                <Tiktok size={20} />
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 reveal delay-200">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Phone</label>
                  <input
                    type="text"
                    className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="+964..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-brand-accent hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/5 mt-16 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} IT7 Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;