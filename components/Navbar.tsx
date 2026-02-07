import React, { useState, useEffect } from 'react';
import { useAuth, useApp, useTheme } from '../App';
import { LOGO_URL } from '../constants';

interface NavbarProps {
  currentView: string;
  setView: (v: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const { user } = useAuth();
  const { cart } = useApp();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'products', label: 'Catalog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (id: string) => {
    if (['home', 'about', 'products', 'contact'].includes(currentView)) {
      const el = document.getElementById(id);
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setView(id);
      }
    } else {
      setView(id);
      window.scrollTo(0, 0);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav 
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out font-inter ${
        isScrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md py-2 shadow-md border-b border-slate-100 dark:border-white/10' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Branding Section */}
          <button 
            onClick={() => handleNav('home')} 
            className="flex items-center gap-3 sm:gap-4 group outline-none"
            aria-label="FUNSA SUPPLIERS Home"
          >
            <div className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex items-center justify-center bg-white border transition-all duration-300 shadow-sm shrink-0 ${
              isScrolled ? 'border-slate-100 dark:border-white/10 scale-90' : 'border-white/20 scale-100'
            }`}>
              {LOGO_URL ? (
                <img src={LOGO_URL} alt="Logo" className="w-full h-full object-cover" />
              ) : (
                <span className="text-brand-green font-black text-xl">F</span>
              )}
            </div>
            <div className="flex flex-col text-left">
              <span className="font-[900] text-lg sm:text-2xl tracking-tighter leading-none uppercase text-brand-green">
                FUNSA SUPPLIERS
              </span>
              <span className={`text-[7px] sm:text-[9px] font-[900] uppercase tracking-[0.2em] sm:tracking-[0.4em] mt-1 transition-colors duration-300 ${
                isScrolled ? 'text-slate-500 dark:text-slate-400' : 'text-white'
              }`}>
                At the service of your ideas
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`text-sm font-black uppercase tracking-widest transition-colors duration-300 hover:text-emerald-400 focus:text-emerald-400 outline-none ${
                    isScrolled 
                      ? (currentView === link.id ? 'text-brand-green' : 'text-slate-700 dark:text-slate-300')
                      : (currentView === link.id ? 'text-emerald-400' : 'text-white')
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                  isScrolled ? 'border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300' : 'border-white/20 text-white'
                } hover:bg-slate-100 dark:hover:bg-white/10`}
                aria-label="Toggle Dark Mode"
              >
                <i className={`fa-solid ${isDarkMode ? 'fa-sun text-yellow-500' : 'fa-moon text-slate-300'}`}></i>
              </button>

              <button 
                onClick={() => handleNav('products')}
                className="bg-brand-green text-white px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest shadow-lg hover:bg-emerald-600 active:scale-95 transition-all duration-200 flex items-center gap-2"
              >
                REQUEST QUOTE
                {cart.length > 0 && (
                  <span className="bg-white text-brand-green w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black animate-in zoom-in">
                    {cart.length}
                  </span>
                )}
              </button>

              {user && (
                <button 
                  onClick={() => setView(user.role === 'SUPER_ADMIN' ? 'super-admin' : 'admin')} 
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                    isScrolled ? 'border-slate-200 dark:border-white/10 text-brand-navy dark:text-slate-300' : 'border-white/20 text-white'
                  } hover:bg-brand-green hover:text-white hover:border-brand-green`}
                  title="System Management"
                >
                  <i className="fa-solid fa-user-gear"></i>
                </button>
              )}
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4">
             <button
                onClick={toggleDarkMode}
                className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
                  isScrolled ? 'border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300' : 'border-white/20 text-white'
                }`}
                aria-label="Toggle Dark Mode"
              >
                <i className={`fa-solid ${isDarkMode ? 'fa-sun text-xs text-yellow-500' : 'fa-moon text-xs text-slate-300'}`}></i>
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`p-2 transition-colors ${isScrolled ? 'text-slate-700 dark:text-slate-300' : 'text-white'}`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-2xl transition-all duration-300 ease-out overflow-hidden ${
        isMenuOpen ? 'max-h-[500px] border-b border-slate-100 dark:border-white/10 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="p-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`block w-full text-left px-4 py-4 rounded-xl text-sm font-black uppercase tracking-widest transition-colors ${
                currentView === link.id ? 'bg-emerald-50 dark:bg-emerald-500/10 text-brand-green' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button 
              onClick={() => handleNav('products')}
              className="w-full bg-brand-green text-white py-5 rounded-xl font-black uppercase tracking-widest text-[11px] shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <i className="fa-solid fa-file-invoice"></i>
              Request Quote ({cart.length})
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;