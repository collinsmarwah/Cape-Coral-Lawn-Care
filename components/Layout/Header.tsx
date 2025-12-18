import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, UserCircle, Phone, Mail, Clock, ArrowRight, Home, Scissors, MapPin, Users, Shield, Camera, Moon, Sun, Sparkles, ChevronRight } from 'lucide-react';
import { NAV_LINKS, LOGO_URL, CONTACT_INFO } from '../../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkIcon = (name: string, isMobile: boolean = false) => {
    const size = isMobile ? 22 : 16;
    switch (name) {
      case 'Home': return <Home size={size} />;
      case 'Services': return <Scissors size={size} />;
      case 'Locations': return <MapPin size={size} />;
      case 'About': return <Users size={size} />;
      case 'Contact': return <Phone size={size} />;
      case 'Legal': return <Shield size={size} />;
      case 'Gallery': return <Camera size={size} />;
      default: return null;
    }
  };

  return (
    <>
      {/* Utility Bar */}
      <div className="bg-emerald-950 text-emerald-50 py-2 sm:py-2.5 text-xs md:text-sm font-bold relative z-50 transition-all border-b border-emerald-900">
        <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-6">
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 hover:text-emerald-400 transition-colors group">
                    <Phone size={14} className="text-emerald-400 group-hover:animate-bounce" />
                    <span>{CONTACT_INFO.phone}</span>
                </a>
                <span className="hidden sm:inline-flex items-center gap-2 text-emerald-300/60">
                    <Clock size={14} /> Open 24/7
                </span>
            </div>
            <div className="flex items-center gap-4">
                <span className="hidden md:inline text-emerald-400 uppercase tracking-tighter text-[10px]">Serving Cape Coral & Fort Myers</span>
                <NavLink to="/quote" className="text-emerald-300 hover:text-white flex items-center gap-1.5 transition-colors">
                    <Sparkles size={14} /> Instant Quote
                </NavLink>
            </div>
        </div>
      </div>

      <header 
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl shadow-xl py-2' 
            : 'bg-white dark:bg-gray-950 py-4'
        } border-b border-gray-100 dark:border-gray-800`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-2 group relative z-50" onClick={() => setIsOpen(false)}>
            <img 
              src={LOGO_URL} 
              alt="Cape Coral Lawn Care" 
              className={`w-auto object-contain transition-all duration-300 brightness-100 dark:brightness-110 dark:invert-[0.05] ${
                scrolled ? 'h-10 md:h-12' : 'h-14 md:h-18'
              }`}
            />
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-black uppercase tracking-tight transition-all relative flex items-center gap-2 ${
                    isActive 
                      ? 'text-emerald-700 dark:text-emerald-400' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-300'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'opacity-40'}`}>{getLinkIcon(link.name)}</span>
                    {link.name}
                    {isActive && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-emerald-600 dark:bg-emerald-400 rounded-full animate-in fade-in zoom-in-50 duration-300"></span>}
                  </>
                )}
              </NavLink>
            ))}
            
            <div className="flex items-center gap-3 pl-6 border-l border-gray-200 dark:border-gray-800 ml-4">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <NavLink 
                to="/portal" 
                className={({ isActive }) => `p-2.5 rounded-xl transition-all ${isActive ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' : 'text-gray-400 hover:text-emerald-600 hover:bg-gray-100 dark:hover:bg-gray-900'}`}
                title="Customer Portal"
              >
                <UserCircle size={22} />
              </NavLink>

              <NavLink 
                to="/quote" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 px-6 py-3.5 flex items-center gap-2 group active:scale-95"
              >
                Get Started
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </div>
          </nav>

          {/* Mobile UI */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all relative z-50"
            >
              {isDark ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all relative z-50"
            >
              {isOpen ? <X size={24} className="text-emerald-600" /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-gray-950/80 backdrop-blur-xl z-30 lg:hidden transition-all duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none translate-x-full'
          }`}
        >
          <div className="flex flex-col p-8 pt-24 space-y-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-2xl font-black px-6 py-4 rounded-2xl transition-all flex items-center justify-between group ${
                    isActive 
                      ? 'bg-emerald-600 text-white' 
                      : 'text-gray-400 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <div className="flex items-center gap-4">
                  {getLinkIcon(link.name, true)}
                  {link.name}
                </div>
                <ChevronRight size={20} className="opacity-40 group-hover:translate-x-1 transition-transform" />
              </NavLink>
            ))}
            
            <div className="h-px bg-white/10 my-4" />
            
            <NavLink 
              to="/portal"
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold px-6 py-4 rounded-2xl text-gray-300 flex items-center gap-4 hover:bg-white/5 transition-all"
            >
              <UserCircle size={24} className="text-emerald-500" />
              Customer Portal
            </NavLink>
            
            <NavLink 
              to="/quote" 
              onClick={() => setIsOpen(false)}
              className="bg-emerald-600 text-white p-6 rounded-2xl font-black text-xl shadow-2xl shadow-emerald-600/30 text-center flex items-center justify-center gap-2"
            >
              Instant Quote <Sparkles size={20} />
            </NavLink>
          </div>
        </div>
      </header>

      {/* Floating Action Button for Mobile Prototype */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 lg:hidden ${scrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
          <NavLink to="/quote" className="bg-emerald-600 text-white p-5 rounded-full shadow-2xl flex items-center justify-center animate-bounce hover:animate-none">
              <Sparkles size={24} />
          </NavLink>
      </div>
    </>
  );
};

export default Header;