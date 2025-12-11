import React from 'react';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import ServiceCard from '../components/Shared/ServiceCard';
import AIQuoteGenerator from '../components/Shared/AIQuoteGenerator';
import { SERVICES, TESTIMONIALS } from '../constants';
import { Star, Quote, Check, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

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

      {/* Deep Dive Service Info Sections */}
      <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
             
             {/* Section 1: Mowing & Trimming (Image Left) */}
             <div className="flex flex-col md:flex-row items-center gap-12 mb-24 animate-in slide-in-from-left duration-700">
                <div className="md:w-1/2 relative">
                   <div className="absolute -inset-4 bg-emerald-100/50 rounded-2xl transform -rotate-2"></div>
                   <img 
                    src="https://scontent.fdar12-1.fna.fbcdn.net/v/t39.30808-6/480975432_122202856250057044_8757728266785419670_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=z1943w1Gq4MQ7kNvwGqbzzK&_nc_oc=AdmxZlZmdKazJr6kD-0UaoCQOywZeYyb9QZ742DlGX2hz6hnbF48LFwHP8wEGSYiWgg&_nc_zt=23&_nc_ht=scontent.fdar12-1.fna&_nc_gid=68cieBQqgGsBZIobPIdSgA&oh=00_AfmCo_vDp2W0k2AsgL3i7cwF9FG-opGil9-0oCn53tb0yg&oe=6940B353" 
                    alt="Mowing and Trimming" 
                    className="relative rounded-2xl shadow-2xl w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500" 
                   />
                </div>
                <div className="md:w-1/2 space-y-6">
                   <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm">The Essentials</h2>
                   <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Mowing & Trimming</h3>
                   <p className="text-gray-600 text-lg leading-relaxed">
                      Expert cuts, affordable prices, and the crispest edges in Cape Coral. We don't just cut grass; we maintain a uniform height and professional appearance that makes your neighbors jealous.
                   </p>
                   <ul className="space-y-4 pt-2">
                      <li className="flex items-center gap-3">
                        <div className="bg-emerald-100 p-1.5 rounded-full text-emerald-600"><Check size={18}/></div>
                        <span className="font-medium text-gray-800">Precision edging along driveways & walks</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="bg-emerald-100 p-1.5 rounded-full text-emerald-600"><Check size={18}/></div>
                        <span className="font-medium text-gray-800">Consistent mowing schedule</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="bg-emerald-100 p-1.5 rounded-full text-emerald-600"><Check size={18}/></div>
                        <span className="font-medium text-gray-800">Debris blowing & cleanup included</span>
                      </li>
                   </ul>
                   <div className="pt-4">
                     <NavLink to="/services" className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                        Learn More <ArrowRight size={20} />
                     </NavLink>
                   </div>
                </div>
             </div>

             {/* Section 2: Weeding & Plant Care (Image Right) */}
             <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-24 animate-in slide-in-from-right duration-700">
                <div className="md:w-1/2 relative">
                   <div className="absolute -inset-4 bg-lime-100/50 rounded-2xl transform rotate-2"></div>
                   <img 
                    src="https://aalawns.com/wp-content/uploads/2023/03/lawncare-cincinnati-northern-kentucky-768x512.jpg" 
                    alt="Weeding and Plant Care" 
                    className="relative rounded-2xl shadow-2xl w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500" 
                   />
                </div>
                <div className="md:w-1/2 space-y-6">
                   <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Detailed Care</h2>
                   <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Weeding & Plant Care</h3>
                   <p className="text-gray-600 text-lg leading-relaxed">
                      Keeping your flower beds and plant areas tidy is just as important as the mow. Our team removes unsightly weeds and ensures your plants are healthy, vibrant, and looking their best.
                   </p>
                   <ul className="space-y-4 pt-2">
                      <li className="flex items-center gap-3">
                        <div className="bg-emerald-100 p-1.5 rounded-full text-emerald-600"><Check size={18}/></div>
                        <span className="font-medium text-gray-800">Hand weeding of flower beds</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="bg-emerald-100 p-1.5 rounded-full text-emerald-600"><Check size={18}/></div>
                        <span className="font-medium text-gray-800">Plant trimming and pruning</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="bg-emerald-100 p-1.5 rounded-full text-emerald-600"><Check size={18}/></div>
                        <span className="font-medium text-gray-800">Bed definition & edging</span>
                      </li>
                   </ul>
                   <div className="pt-4">
                     <NavLink to="/services" className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                        Learn More <ArrowRight size={20} />
                     </NavLink>
                   </div>
                </div>
             </div>

             {/* Section 3: Maintenance & More (Image Left) */}
             <div className="flex flex-col md:flex-row items-center gap-12 animate-in slide-in-from-left duration-700">
                <div className="md:w-1/2 relative">
                   <div className="absolute -inset-4 bg-teal-100/50 rounded-2xl transform -rotate-2"></div>
                   <img 
                    src="https://earthdevelopmentinc.com/wp-content/uploads/2024/05/61447723475064a3510bc927_Lawn-Care-and-Lawn-Maintenance.jpg" 
                    alt="Maintenance and More" 
                    className="relative rounded-2xl shadow-2xl w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500" 
                   />
                </div>
                <div className="md:w-1/2 space-y-6">
                   <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Total Solutions</h2>
                   <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Maintenance & More</h3>
                   <p className="text-gray-600 text-lg leading-relaxed">
                      We go beyond the grass. From refreshing mulch and rock beds to seasonal cleanups, we handle the heavy lifting so your entire property retains its value and curb appeal.
                   </p>
                   <ul className="space-y-4 pt-2">
                      <li className="flex items-center gap-3">
                        <div className="bg-emerald-100 p-1.5 rounded-full text-emerald-600"><Check size={18}/></div>
                        <span className="font-medium text-gray-800">Mulch & Rock installation</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="bg-emerald-100 p-1.5 rounded-full text-emerald-600"><Check size={18}/></div>
                        <span className="font-medium text-gray-800">Seasonal property cleanups</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="bg-emerald-100 p-1.5 rounded-full text-emerald-600"><Check size={18}/></div>
                        <span className="font-medium text-gray-800">Sod installation & repair</span>
                      </li>
                   </ul>
                   <div className="pt-4">
                     <NavLink to="/services" className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                        Learn More <ArrowRight size={20} />
                     </NavLink>
                   </div>
                </div>
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