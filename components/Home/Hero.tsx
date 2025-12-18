import React from 'react';
import { ArrowRight, Star, Sparkles } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import AIQuoteGenerator from '../Shared/AIQuoteGenerator';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[900px] lg:h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.lawnweedexpert.co.uk/news/image.axd?picture=/mower.jpg" 
          alt="Cape Coral Lawn" 
          className="w-full h-full object-cover"
        />
        {/* Darker gradient for better text readability and depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-emerald-900/80 to-emerald-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <div className="space-y-8 animate-in slide-in-from-left-10 fade-in duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-md text-emerald-100 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Trusted by 200+ Cape Coral Neighbors
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter">
              A Perfect Lawn, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400">Zero Stress.</span>
            </h1>
            
            <p className="text-xl text-emerald-50/80 max-w-xl leading-relaxed font-medium">
              Get the crispest edges and healthiest grass in the neighborhood. Locally owned, reliable, and powered by smart estimates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <NavLink 
                to="/services" 
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all transform hover:scale-105 shadow-2xl shadow-emerald-500/40 flex items-center justify-center gap-2 group"
              >
                Our Services
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </NavLink>
              <NavLink 
                to="/about" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center"
              >
                Meet the Team
              </NavLink>
            </div>
            
            <div className="pt-8 flex items-center gap-4 text-emerald-100/60">
              <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <img 
                    key={i} 
                    src={`https://picsum.photos/64/64?random=${i+20}`} 
                    className="w-10 h-10 rounded-full border-2 border-emerald-900 ring-2 ring-emerald-500/20" 
                    alt="Happy Customer" 
                   />
                 ))}
              </div>
              <div className="text-sm">
                 <div className="flex text-amber-400 mb-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                 </div>
                 <p className="font-bold">4.9/5 Service Rating</p>
              </div>
            </div>
          </div>

          {/* Right Column: AI Estimator */}
          <div className="animate-in slide-in-from-right-10 fade-in duration-1000 delay-300">
            <div className="relative">
              {/* Decorative elements behind the card */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-lime-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
              
              <div className="relative z-10">
                <AIQuoteGenerator />
              </div>

              {/* Trust Badge */}
              <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 flex items-center gap-3 z-20 animate-bounce hover:animate-none">
                <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-xl text-emerald-600 dark:text-emerald-400">
                  <Sparkles size={20} />
                </div>
                <div className="pr-4">
                  <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">AI Powered</p>
                  <p className="text-sm font-black text-gray-900 dark:text-white">Instant Results</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden lg:block animate-bounce opacity-50">
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-emerald-400 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;