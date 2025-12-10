import React from 'react';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import ServiceCard from '../components/Shared/ServiceCard';
import AIQuoteGenerator from '../components/Shared/AIQuoteGenerator';
import { SERVICES, TESTIMONIALS } from '../constants';
import { Star, Quote, Check } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />

      {/* Pricing/Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Simple Pricing</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lawn Care Packages</h3>
            <p className="text-gray-600">Choose the plan that fits your lawn. No contracts, cancel anytime.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {SERVICES.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Service Info */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
             <div className="md:w-1/2">
                <img src="https://aalawns.com/wp-content/uploads/2023/03/lawncare-cincinnati-northern-kentucky-768x512.jpg" alt="Weeding and Plant Care" className="rounded-2xl shadow-2xl" />
             </div>
             <div className="md:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Weeding & Plant Care</h3>
                <p className="text-gray-600 text-lg">
                   Keeping your flower beds and plant areas tidy is just as important as the mow. Our team removes weeds and ensures your plants are healthy and looking their best.
                </p>
                <ul className="space-y-3">
                   <li className="flex items-center gap-3"><div className="bg-emerald-100 p-1 rounded-full text-emerald-600"><Check size={16}/></div><span>Hand weeding of flower beds</span></li>
                   <li className="flex items-center gap-3"><div className="bg-emerald-100 p-1 rounded-full text-emerald-600"><Check size={16}/></div><span>Plant trimming and pruning</span></li>
                   <li className="flex items-center gap-3"><div className="bg-emerald-100 p-1 rounded-full text-emerald-600"><Check size={16}/></div><span>Mulch refreshing</span></li>
                </ul>
             </div>
          </div>
      </section>

      {/* AI Quote Section */}
      <section className="py-24 bg-emerald-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-white space-y-6">
            <h2 className="text-4xl font-bold">Get a Custom Analysis.</h2>
            <p className="text-emerald-100 text-lg leading-relaxed">
              Not sure which package is right for you? Our AI estimator can help assess your lawn needs based on size and current condition.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="bg-emerald-800 p-2 rounded-full"><Star size={16} /></div>
                <span>Instant price estimation logic</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-emerald-800 p-2 rounded-full"><Star size={16} /></div>
                <span>Tips for St. Augustine & Florida grass</span>
              </li>
            </ul>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <AIQuoteGenerator />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">What Our Neighbors Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-white p-8 rounded-2xl relative shadow-sm hover:shadow-md transition-shadow">
                <Quote className="absolute top-6 right-6 text-emerald-100 transform rotate-180" size={40} />
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < t.rating ? "currentColor" : "none"} className={i >= t.rating ? "text-gray-300" : ""} />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 relative z-10">"{t.comment}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatarUrl} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <span className="text-xs text-gray-500">{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;