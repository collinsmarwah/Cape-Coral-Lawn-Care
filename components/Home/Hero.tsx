import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.lawnweedexpert.co.uk/news/image.axd?picture=/mower.jpg" 
          alt="Cape Coral Lawn" 
          className="w-full h-full object-cover"
        />
        {/* Darker gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/80 to-emerald-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-3xl space-y-8 animate-in slide-in-from-bottom-10 fade-in duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-md text-emerald-100 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Reliable Lawn Care in Cape Coral, FL
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Services You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400">Trust</span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
            Started by and for residents of Cape Coral to provide affordable, honest, and dependable lawn care & outdoor maintenance services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <NavLink 
              to="/contact" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 group"
            >
              Get My Free Quote
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
            <NavLink 
              to="/services" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center"
            >
              View Packages
            </NavLink>
          </div>
          
          <div className="pt-6 flex items-center gap-4 text-emerald-100/80 text-sm">
            <div className="flex -space-x-2">
               {[1,2,3].map(i => <img key={i} src={`https://picsum.photos/32/32?random=${i}`} className="w-8 h-8 rounded-full border-2 border-emerald-900" alt="avatar" />)}
            </div>
            <div>
               <div className="flex text-amber-400"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
               <p>Trusted by 200+ Cape Coral neighbors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;