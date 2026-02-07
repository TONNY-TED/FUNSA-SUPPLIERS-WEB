
import React from 'react';
import { CONTACT_INFO, LOGO_URL } from '../constants';

interface FooterProps {
  setView: (v: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <div className="flex flex-col">
      {/* Main Professional Footer - Condensed & Elegant */}
      <footer className="bg-[#010140] text-slate-300 py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-brand-green rounded-full overflow-hidden flex items-center justify-center text-white font-bold text-lg shadow-lg ring-2 ring-white/10">
                  {LOGO_URL ? (
                    <img src={LOGO_URL} alt="Logo" className="w-full h-full object-cover" />
                  ) : (
                    <span>F</span>
                  )}
                </div>
                <span className="text-white font-bold text-lg tracking-tight uppercase">FUNSA <span className="text-brand-green">SUPPLIERS</span></span>
              </div>
              <p className="text-xs leading-relaxed text-slate-400 font-normal max-w-xs">
                Professional medical and surgical supply chains serving the Malawian health sector with excellence.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green hover:text-white transition-all border border-white/10"><i className="fa-brands fa-facebook-f text-[10px]"></i></a>
                <a href={`https://wa.me/${CONTACT_INFO.phones[0].replace(/\s/g, '')}`} target="_blank" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green hover:text-white transition-all border border-white/10"><i className="fa-brands fa-whatsapp text-[10px]"></i></a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green hover:text-white transition-all border border-white/10"><i className="fa-brands fa-linkedin-in text-[10px]"></i></a>
              </div>
            </div>
            
            {/* Navigation */}
            <div>
              <h4 className="text-white font-bold mb-4 text-[10px] uppercase tracking-[0.2em] border-l-2 border-brand-green pl-3">Links</h4>
              <ul className="space-y-2 text-xs font-medium">
                <li><button onClick={() => setView('home')} className="hover:text-brand-green transition-colors">Home Portal</button></li>
                <li><button onClick={() => setView('about')} className="hover:text-brand-green transition-colors">Corporate Profile</button></li>
                <li><button onClick={() => setView('products')} className="hover:text-brand-green transition-colors">Catalog</button></li>
                <li><button onClick={() => setView('contact')} className="hover:text-brand-green transition-colors">Support</button></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-4 text-[10px] uppercase tracking-[0.2em] border-l-2 border-brand-green pl-3">Sectors</h4>
              <ul className="space-y-2 text-xs font-medium text-slate-400">
                <li>Government Hospitals</li>
                <li>CHAM Institutions</li>
                <li>NGO Partners</li>
                <li>Private Clinics</li>
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h4 className="text-white font-bold mb-4 text-[10px] uppercase tracking-[0.2em] border-l-2 border-brand-green pl-3">Inquiries</h4>
              <ul className="space-y-3 text-xs font-medium">
                <li className="flex gap-2 items-start">
                  <i className="fa-solid fa-location-dot text-brand-green mt-0.5"></i>
                  <span className="text-slate-400">Lilongwe, Malawi</span>
                </li>
                {CONTACT_INFO.phones.slice(0, 2).map((phone, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <i className="fa-solid fa-phone text-brand-green"></i>
                    <span className="text-white font-semibold">{phone}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold tracking-widest uppercase text-slate-500">
            <p>© {new Date().getFullYear()} FUNSA SUPPLIERS. ALL RIGHTS RESERVED.</p>
            <button onClick={() => setView('login')} className="text-brand-green hover:underline">INTERNAL LOGIN</button>
          </div>
        </div>
      </footer>

      {/* Development Footer - Prop Industries Branding - Thinner on Mobile */}
      <div className="bg-[#050505] py-2.5 sm:py-5 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-5">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2.5 px-3 py-1 bg-white/5 rounded border border-white/10">
                <span className="text-white text-[8px] sm:text-[9px] font-medium uppercase tracking-tighter">Product of</span>
                <span className="text-red-600 font-extrabold text-[10px] sm:text-xs tracking-tighter">PROP <span className="text-white">INDUSTRIES</span></span>
              </div>
              <p className="hidden sm:block text-[10px] text-white/40 uppercase font-medium tracking-[0.2em]">Success through insight</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-8">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-red-600 text-[9px] sm:text-[10px]"></i>
                <a href="mailto:tonnychibambo@gmail.com" className="text-[9px] sm:text-[10px] font-medium text-white/50 hover:text-white transition-colors tracking-wide lowercase">tonnychibambo@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-red-600 text-[9px] sm:text-[10px]"></i>
                <div className="flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] font-medium text-white/50 tracking-widest">
                  <span className="hover:text-white transition-colors">0996464291</span>
                  <span className="text-white/10">|</span>
                  <span className="hover:text-white transition-colors">0888081368</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
