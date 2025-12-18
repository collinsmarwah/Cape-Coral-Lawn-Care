import React from 'react';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import ServiceCard from '../components/Shared/ServiceCard';
import AIQuoteGenerator from '../components/Shared/AIQuoteGenerator';
import { SERVICES, TESTIMONIALS } from '../constants';
import { Star, Quote, Check, ArrowRight, Users, Sparkles } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Hero />
      
      <div id="features-section" className="animate-fade-up opacity-0 fill-mode-forwards stagger-1">
        <Features />
      </div>

      {/* Pricing/Services Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up opacity-0 fill-mode-forwards">
            <h2 className="text-emerald-600 dark:text-emerald-400 font-bold tracking-widest uppercase text-xs mb-3">Simple Pricing</h2>
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">Lawn Care Packages</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Choose the plan that fits your lawn. No contracts, cancel anytime. Perfect for Cape Coral residents.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto animate-fade-up opacity-0 fill-mode-forwards stagger-2">
            {SERVICES.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Service Info Sections */}
      <section className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
          <div className="container mx-auto px-4">
             
             {/* Section 1: Mowing & Trimming */}
             <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 mb-32 group">
                <div className="md:w-1/2 relative animate-fade-in opacity-0 fill-mode-forwards">
                   <div className="absolute -inset-4 bg-emerald-100/50 dark:bg-emerald-900/10 rounded-3xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
                   <img 
                    src="https://cdn.shopify.com/s/files/1/0300/2780/8908/files/3_42b83879-cd78-46a6-8635-dcf636485c64_480x480.png?v=1675754313" 
                    alt="Mowing and Trimming" 
                    className="relative rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover hover:scale-[1.02] transition-transform duration-700" 
                   />
                </div>
                <div className="md:w-1/2 space-y-6 animate-fade-up opacity-0 fill-mode-forwards stagger-1">
                   <h2 className="text-emerald-600 dark:text-emerald-400 font-bold tracking-widest uppercase text-xs">The Essentials</h2>
                   <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white leading-tight">Mowing & Trimming</h3>
                   <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                      Expert cuts, affordable prices, and the crispest edges in Cape Coral. We don't just cut grass; we maintain a uniform height and professional appearance that makes your neighbors jealous.
                   </p>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {[
                        "Precision edging",
                        "Consistent schedule",
                        "Debris blowing",
                        "Mulching or bagging"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="bg-emerald-100 dark:bg-emerald-900/30 p-1.5 rounded-full text-emerald-600 dark:text-emerald-400"><Check size={16}/></div>
                          <span className="font-bold text-gray-800 dark:text-gray-200 text-sm">{item}</span>
                        </li>
                      ))}
                   </ul>
                   <div className="pt-4 flex flex-wrap gap-4">
                     <NavLink to="/services" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 transition-all shadow-lg shadow-emerald-600/20 active:scale-95">
                        All Services <ArrowRight size={18} />
                     </NavLink>
                     <NavLink to="/gallery" className="border-2 border-emerald-600/20 dark:border-emerald-400/20 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 px-8 py-4 rounded-2xl font-black transition-all active:scale-95">
                        View Gallery
                     </NavLink>
                   </div>
                </div>
             </div>

             {/* Section 2: Weeding & Plant Care */}
             <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20 mb-32 group">
                <div className="md:w-1/2 relative animate-fade-in opacity-0 fill-mode-forwards">
                   <div className="absolute -inset-4 bg-lime-100/50 dark:bg-lime-900/10 rounded-3xl transform rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
                   <img 
                    src="https://aalawns.com/wp-content/uploads/2023/03/lawncare-cincinnati-northern-kentucky-768x512.jpg" 
                    alt="Weeding and Plant Care" 
                    className="relative rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover hover:scale-[1.02] transition-transform duration-700" 
                   />
                </div>
                <div className="md:w-1/2 space-y-6 animate-fade-up opacity-0 fill-mode-forwards stagger-1">
                   <h2 className="text-emerald-600 dark:text-emerald-400 font-bold tracking-widest uppercase text-xs">Detailed Care</h2>
                   <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white leading-tight">Weeding & Plant Care</h3>
                   <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                      Keeping your flower beds and plant areas tidy is just as important as the mow. Our team removes unsightly weeds and ensures your plants are healthy and vibrant.
                   </p>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {[
                        "Hand weeding",
                        "Plant pruning",
                        "Bed definition",
                        "Fertilization"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="bg-emerald-100 dark:bg-emerald-900/30 p-1.5 rounded-full text-emerald-600 dark:text-emerald-400"><Check size={16}/></div>
                          <span className="font-bold text-gray-800 dark:text-gray-200 text-sm">{item}</span>
                        </li>
                      ))}
                   </ul>
                   <div className="pt-4">
                     <NavLink to="/quote" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 transition-all shadow-lg shadow-emerald-600/20 active:scale-95">
                        Get Estimate <ArrowRight size={18} />
                     </NavLink>
                   </div>
                </div>
             </div>
          </div>
      </section>

      {/* AI Quote Section */}
      <section className="py-24 bg-emerald-900 dark:bg-emerald-950 relative overflow-hidden" id="quote-section">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-400/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-400/10 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 text-white space-y-6">
            <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">Instant AI-Powered <br/><span className="text-emerald-400 flex items-center gap-3">Quote Analysis <Sparkles className="animate-pulse" /></span></h2>
            <p className="text-emerald-100 text-xl leading-relaxed">
              Why wait for a call back? Our AI estimator uses local Cape Coral data to give you a personalized price range for your lawn maintenance in seconds.
            </p>
            <div className="space-y-4 pt-6">
              {[
                "Customized for Florida grass types",
                "Instant monthly pricing range",
                "Expert tips for lawn health",
                "No commitment required"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-emerald-500/30 p-1.5 rounded-full text-emerald-300 border border-emerald-400/20 shadow-inner"><Check size={16} /></div>
                  <span className="text-emerald-50 font-bold text-lg">{text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <AIQuoteGenerator />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20 animate-fade-up opacity-0 fill-mode-forwards">
             <h2 className="text-emerald-600 dark:text-emerald-400 font-black text-xs uppercase tracking-[0.3em] mb-4">Social Proof</h2>
             <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">What Our Neighbors Say</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {TESTIMONIALS.map((t, idx) => (
              <div key={t.id} className={`bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] relative shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-700 hover:-translate-y-3 transition-all duration-500 animate-fade-up opacity-0 fill-mode-forwards`} style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
                <Quote className="absolute top-8 right-10 text-emerald-50 dark:text-emerald-900/10 transform rotate-180" size={80} />
                <div className="flex items-center gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < t.rating ? "currentColor" : "none"} className={i >= t.rating ? "text-gray-200 dark:text-gray-700" : ""} />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-10 relative z-10 text-lg leading-relaxed font-medium">"{t.comment}"</p>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img src={t.avatarUrl} alt={t.name} className="w-16 h-16 rounded-full object-cover border-4 border-emerald-50 dark:border-gray-700 shadow-sm" />
                    <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1.5 border-4 border-white dark:border-gray-800">
                       <Check size={10} strokeWidth={4} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 dark:text-white text-lg">{t.name}</h4>
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Ownership CTA */}
      <section className="py-24 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grass.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
           <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Locally Owned. Locally Operated.</h2>
           <p className="text-emerald-50 text-xl md:text-2xl max-w-2xl mx-auto mb-12 opacity-90 font-medium">
             We aren't a national chain. We're your neighbors, dedicated to keeping Cape Coral beautiful.
           </p>
           <NavLink to="/about" className="inline-flex items-center gap-3 bg-white text-emerald-700 hover:bg-emerald-50 px-10 py-5 rounded-full font-black text-xl transition-all shadow-2xl shadow-emerald-900/40 active:scale-95 group">
              Meet the Team
              <Users size={24} className="group-hover:rotate-6 transition-transform" />
           </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;