import React from 'react';
import { Service } from '../../types';
import { Scissors, Sprout, Shovel, Sparkles, ArrowRight, Check } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const iconMap: Record<string, React.ReactNode> = {
  Scissors: <Scissors size={28} />,
  Sprout: <Sprout size={28} />,
  Shovel: <Shovel size={28} />,
  Sparkles: <Sparkles size={28} />
};

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className={`relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border flex flex-col h-full ${service.highlight ? 'border-emerald-500 dark:border-emerald-400 ring-4 ring-emerald-500/10 dark:ring-emerald-400/10' : 'border-gray-100 dark:border-gray-700'}`}>
      
      {service.highlight && (
        <div className="bg-emerald-500 dark:bg-emerald-600 text-white text-center py-1 text-xs font-bold uppercase tracking-wider">
          Most Popular
        </div>
      )}

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl" aria-hidden="true">
            {iconMap[service.iconName] || <Sprout size={28} />}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {service.title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Features List */}
        {service.features && service.features.length > 0 && (
          <div className="flex-grow mb-8">
            <ul className="space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="mt-0.5 text-emerald-500 dark:text-emerald-400 shrink-0" aria-hidden="true">
                    <Check size={16} />
                  </div>
                  <span className="leading-tight">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mb-6 pb-6 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{service.price}</span>
            <span className="text-gray-500 dark:text-gray-400 font-medium">{service.billingPeriod}</span>
          </div>
        </div>
        
        <NavLink 
          to="/contact" 
          aria-label={`Get started with ${service.title} plan`}
          className={`w-full py-3 px-4 rounded-lg font-bold text-center transition-colors flex items-center justify-center gap-2 mt-auto focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
            service.highlight 
              ? 'bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white' 
              : 'bg-emerald-50 dark:bg-emerald-900/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-400'
          }`}
        >
          Get Started
          <ArrowRight size={16} aria-hidden="true" />
        </NavLink>
      </div>
    </div>
  );
};

export default ServiceCard;