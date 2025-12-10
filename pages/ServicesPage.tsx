import React from 'react';
import { SERVICES, DETAILED_SERVICES } from '../constants';
import ServiceCard from '../components/Shared/ServiceCard';
import { NavLink } from 'react-router-dom';
import { Check } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600">
            From routine mowing to complex landscape design, we offer everything you need to keep your outdoor space beautiful.
          </p>
        </div>

        {/* Pricing Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto">
            {SERVICES.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
        </div>

        {/* Detailed Service Catalog Grid */}
        <div className="max-w-7xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Complete Lawn & Outdoor Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {DETAILED_SERVICES.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center border border-gray-100">
                        {/* Circular Image */}
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-md border-4 border-white ring-1 ring-gray-100 shrink-0">
                            <img 
                                src={item.image} 
                                alt={`${item.title} service`} 
                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 mb-3 px-2 leading-tight min-h-[3.5rem] flex items-center justify-center">
                            {item.title}
                        </h3>
                        
                        {/* Divider */}
                        <div className="w-12 h-1 bg-emerald-900 mb-5 rounded-full"></div>
                        
                        {/* Description */}
                        <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                            {item.description}
                        </p>

                        {/* Features List */}
                        {item.features && item.features.length > 0 && (
                            <ul className="w-full text-left mb-8 space-y-3 px-2 flex-grow">
                                {item.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                        <div className="mt-0.5 text-emerald-500 shrink-0" aria-hidden="true">
                                            <Check size={16} />
                                        </div>
                                        <span className="leading-tight">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        
                        {/* Button */}
                        <NavLink 
                            to="/contact" 
                            aria-label={`Read more about ${item.title}`}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded shadow-lg shadow-emerald-600/20 transition-all transform hover:-translate-y-1 w-full md:w-auto mt-auto focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                        >
                            Read More
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;