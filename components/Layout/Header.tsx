import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, UserCircle, Phone, Mail, Clock, ArrowRight, Home, Scissors, MapPin, Users, Shield, Camera, Moon, Sun } from 'lucide-react';
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
    const size = isMobile ? 20 : 15;
    const className = isMobile ? "" : "mb-0.5";
    switch (name) {
      case 'Home': return <Home size={size} className={className} />;
      case 'Services': return <Scissors size={size} className={className} />;
      case 'Locations': return <MapPin size={size} className={className} />;
      case 'About': return <Users size={size} className={className} />;
      case 'Contact': return <Phone size={size} className={className} />;
      case 'Legal': return <Shield size={size} className={className} />;
      case 'Gallery': return <Camera size={size} className={className} />;
      default: return null;
    }
  };

  return (
    <>
      <div className="bg-emerald-950 text-emerald-50 py-2 sm:py-2.5 text-xs md:text-sm font-medium relative z-50 transition-all">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-2">
            <div className="flex items-center gap-4 sm:gap-8">
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 hover:text-emerald-300 transition-colors group">
                    <Phone size={14} className="text-emerald-400 group-hover:animate-pulse" />
                    <span className="tracking-wide">{CONTACT_INFO.phone}</span>
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hidden md:flex items-center gap-2 hover:text-emerald-300 transition-colors">
                    <Mail size={14} className="text-emerald-400" />
                    <span>{CONTACT_INFO.email}</span>
                </a>
            </div>
            <div className="flex items-center gap-3 text-emerald-200/80">
                <div className="flex items-center gap-1.5">
                   <Clock size={14} />
                   <span>Open 24 Hours</span>
                </div>
                <span className="hidden sm:inline text-emerald-700">|</span>
                <span className="hidden sm:inline text-center">Locally Owned & Operated</span>
            </div>
        </div>
      </div>

      <header 
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl shadow-lg py-2' 
            : 'bg-white dark:bg-gray-950 shadow-sm py-3 md:py-4'
        } border-b border-gray-100 dark:border-gray-800`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-2 group relative z-50" onClick={() => setIsOpen(false)}>
            <img 
              src={LOGO_URL} 
              alt="Cape Coral Lawn Care" 
              className={`w-auto object-contain transition-all duration-300 brightness-100 dark:brightness-110 dark:invert-[0.05] ${
                scrolled ? 'h-10 md:h-12' : 'h-14 md:h-20'
              }`}
            />
          </NavLink>

          <nav className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6 mr-2">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-bold uppercase tracking-wide transition-all duration-200 border-b-2 border-transparent hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1.5 ${
                      isActive 
                        ? 'text-emerald-700 dark:text-emerald-400 border-emerald-600 dark:border-emerald-400' 
                        : 'text-gray-600 dark:text-gray-400 hover:border-emerald-200 dark:hover:border-emerald-800'
                    }`
                  }
                >
                  <span className="opacity-70">{getLinkIcon(link.name)}</span>
                  {link.name}
                </NavLink>
              ))}
            </div>
            
            <div className="flex items-center gap-4 pl-6 border-l border-gray-200 dark:border-gray-700 h-10">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <NavLink 
                to="/portal" 
                className={({ isActive }) => `text-sm font-semibold flex items-center gap-2 transition-colors px-3 py-2 rounded-lg ${isActive ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20' : 'text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
              >
                <UserCircle size={20} />
                Portal
              </NavLink>

              <NavLink 
                to="/quote" 
                className={`bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-sm transition-all shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 flex items-center gap-2 group whitespace-nowrap ${
                  scrolled ? 'px-5 py-2.5' : 'px-6 py-3'
                }`}
              >
                <span>Free Quote</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </div>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative z-50"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative z-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} className="text-emerald-600" /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <div 
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsOpen(false)}
        />

        <div 
          className={`absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-xl border-t border-gray-100 dark:border-gray-800 z-40 lg:hidden transition-all duration-300 transform origin-top overflow-y-auto max-h-[85vh] ${
            isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
          }`}
        >
          <div className="flex flex-col p-6 space-y-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-bold px-4 py-3 rounded-xl transition-all border-l-4 flex items-center gap-3 ${
                    isActive 
                      ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-400 border-emerald-600' 
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 border-transparent hover:border-emerald-200 dark:hover:border-emerald-800'
                  }`
                }
              >
                <span className="text-emerald-600 opacity-80">{getLinkIcon(link.name, true)}</span>
                {link.name}
              </NavLink>
            ))}
            
            <div className="h-px bg-gray-100 dark:bg-gray-800 my-2" />
            
            <NavLink 
              to="/portal"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `text-lg font-semibold px-4 py-3 rounded-xl flex items-center gap-3 ${isActive ? 'text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
            >
              <div className="bg-emerald-100 dark:bg-emerald-900/40 p-1.5 rounded-full text-emerald-600 dark:text-emerald-400">
                <UserCircle size={20} />
              </div>
              Customer Portal
            </NavLink>
            
            <NavLink 
              to="/quote" 
              onClick={() => setIsOpen(false)}
              className="bg-emerald-600 text-center text-white px-4 py-4 rounded-xl font-bold text-lg shadow-lg shadow-emerald-600/20 mt-4 flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors"
            >
              Get a Free Quote
              <ArrowRight size={20} />
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;