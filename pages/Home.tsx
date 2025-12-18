import React from 'react';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import ServiceCard from '../components/Shared/ServiceCard';
import AIQuoteGenerator from '../components/Shared/AIQuoteGenerator';
import { SERVICES, TESTIMONIALS } from '../constants';
// Added missing Users import to resolve error on line 194
import { Star, Quote, Check, ArrowRight, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Hero />
      
      <div id="features-section">
        <Features />
      </div>

      {/* Pricing/Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-emerald-600 dark:text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-3">Simple Pricing</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Lawn Care Packages</h3>
            <p className="text-gray-600 dark:text-gray-400">Choose the plan that fits your lawn. No contracts, cancel anytime. Perfect for Cape Coral residents.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
             <div className="flex flex-col md:flex-row items-center gap-12 mb-32 group">
                <div className="md:w-1/2 relative">
                   <div className="absolute -inset-4 bg-emerald-100/50 dark:bg-emerald-900/10 rounded-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                   <img 
                    src="https://cdn.shopify.com/s/files/1/0300/2780/8908/files/3_42b83879-cd78-46a6-8635-dcf636485c64_480x480.png?v=1675754313" 
                    alt="Mowing and Trimming" 
                    className="relative rounded-2xl shadow-2xl w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500" 
                   />
                </div>
                <div className="md:w-1/2 space-y-6">
                   <h2 className="text-emerald-600 dark:text-emerald-400 font-bold tracking-widest uppercase text-sm">The Essentials</h2>
                   <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Mowing & Trimming</h3>
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
                          <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">{item}</span>
                        </li>
                      ))}
                   </ul>
                   <div className="pt-4 flex gap-4">
                     <NavLink to="/services" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all">
                        All Services <ArrowRight size={18} />
                     </NavLink>
                     <NavLink to="/gallery" className="border border-emerald-600/20 dark:border-emerald-400/20 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 px-6 py-3 rounded-xl font-bold transition-all">
                        View Gallery
                     </NavLink>
                   </div>
                </div>
             </div>

             {/* Section 2: Weeding & Plant Care */}
             <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-32 group">
                <div className="md:w-1/2 relative">
                   <div className="absolute -inset-4 bg-lime-100/50 dark:bg-lime-900/10 rounded-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                   <img 
                    src="https://aalawns.com/wp-content/uploads/2023/03/lawncare-cincinnati-northern-kentucky-768x512.jpg" 
                    alt="Weeding and Plant Care" 
                    className="relative rounded-2xl shadow-2xl w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500" 
                   />
                </div>
                <div className="md:w-1/2 space-y-6">
                   <h2 className="text-emerald-600 dark:text-emerald-400 font-bold tracking-widest uppercase text-sm">Detailed Care</h2>
                   <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Weeding & Plant Care</h3>
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
                          <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">{item}</span>
                        </li>
                      ))}
                   </ul>
                   <div className="pt-4">
                     <NavLink to="/quote" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all">
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
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-white space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Instant AI-Powered <br/><span className="text-emerald-400">Quote Analysis</span></h2>
            <p className="text-emerald-100 text-lg leading-relaxed">
              Why wait for a call back? Our AI estimator uses local Cape Coral data to give you a personalized price range for your lawn maintenance in seconds.
            </p>
            <div className="space-y-4 pt-4">
              {[
                "Customized for Florida grass types",
                "Instant monthly pricing range",
                "Expert tips for lawn health",
                "No commitment required"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-emerald-500/30 p-1 rounded-full text-emerald-300 border border-emerald-400/20"><Check size={14} /></div>
                  <span className="text-emerald-50">{text}</span>
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
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20">
             <h2 className="text-emerald-600 dark:text-emerald-400 font-bold text-sm uppercase tracking-[0.2em] mb-4">Reviews</h2>
             <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">What Our Neighbors Say</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-white dark:bg-gray-800 p-8 rounded-3xl relative shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-700 hover:-translate-y-2 transition-all duration-300">
                <Quote className="absolute top-6 right-6 text-emerald-50 dark:text-emerald-900/10 transform rotate-180" size={60} />
                <div className="flex items-center gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < t.rating ? "currentColor" : "none"} className={i >= t.rating ? "text-gray-200 dark:text-gray-700" : ""} />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-8 relative z-10 text-lg leading-relaxed">"{t.comment}"</p>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img src={t.avatarUrl} alt={t.name} className="w-14 h-14 rounded-full object-cover border-4 border-emerald-50 dark:border-gray-700 shadow-sm" />
                    <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1 border-2 border-white dark:border-gray-800">
                       <Check size={10} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{t.name}</h4>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Ownership CTA */}
      <section className="py-20 bg-emerald-600">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Locally Owned. Locally Operated.</h2>
           <p className="text-emerald-50 text-xl max-w-2xl mx-auto mb-10 opacity-90">
             We aren't a national chain. We're your neighbors, dedicated to keeping Cape Coral beautiful.
           </p>
           <NavLink to="/about" className="inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-emerald-900/20">
              Meet the Team
              <Users size={20} />
           </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;