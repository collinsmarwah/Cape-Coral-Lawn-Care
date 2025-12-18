import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { CONTACT_INFO, LOGO_URL } from '../../constants';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/CapeCoralLawns',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      )
    },
    {
      name: 'X',
      url: 'https://x.com/CapeCoralLawnCo',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/capecorallawnco/',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@capecorallawncare',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.87-2.97 6.33-2.56 2.03-6.11 1.83-8.41-.32-2.31-2.15-2.29-5.91.06-8.03 1.68-1.52 4.14-1.87 6.17-1.17v4.16c-1.23-.62-2.8-.46-3.87.41-.98.78-1.15 2.21-.45 3.23.63.95 1.95 1.12 2.89.51 1.1-.71 1.34-2.17 1.08-3.42V.02h1.42z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <NavLink to="/" className="bg-white p-3 rounded-xl inline-block hover:scale-105 transition-transform duration-300">
               <img 
                src={LOGO_URL} 
                alt="Cape Coral Lawn Care" 
                className="h-20 w-auto object-contain" 
               />
            </NavLink>
            <p className="text-sm leading-relaxed text-gray-400">
              Expert lawn care and maintenance services you can trust. 
              Started by and for residents of Cape Coral.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/services" className="hover:text-emerald-400 transition-colors">Weekly Mowing</NavLink></li>
              <li><NavLink to="/services" className="hover:text-emerald-400 transition-colors">Bi-Weekly Mowing</NavLink></li>
              <li><NavLink to="/services" className="hover:text-emerald-400 transition-colors">Landscaping</NavLink></li>
              <li><NavLink to="/services" className="hover:text-emerald-400 transition-colors">Plant Installations</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-emerald-500" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-emerald-500" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">{CONTACT_INFO.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-emerald-500 mt-1" />
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-semibold mb-4">Service Areas</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded">Cape Coral</span>
              <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded">Matlacha</span>
              <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded">Fort Myers</span>
              <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded">N. Fort Myers</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p className="order-3 lg:order-1 text-center lg:text-left">&copy; {new Date().getFullYear()} Cape Coral Lawn Care. All rights reserved.</p>
          
          <div className="flex items-center gap-4 order-1 lg:order-2">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:bg-emerald-600 hover:text-white transition-all duration-300"
                aria-label={`Follow us on ${social.name}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex gap-6 order-2 lg:order-3">
            <NavLink to="/legal" className="hover:text-white">Privacy Policy</NavLink>
            <NavLink to="/legal" className="hover:text-white">Terms of Service</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;