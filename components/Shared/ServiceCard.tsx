import React from 'react';
import { Service } from '../../types';
import { Scissors, Sprout, Shovel, Sparkles, ArrowRight, Check } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const iconMap: Record<string, React.ReactNode> = {
  Scissors: <Scissors size={24} />,
  Sprout: <Sprout size={24} />,
  Shovel: <Shovel size={24} />,
  Sparkles: <Sparkles size={24} />
};

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className={`group relative bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 border flex flex-col h-full ${service.highlight ? 'border-emerald-500 ring-4 ring-emerald-500/5 dark:ring-emerald-400/5' : 'border-gray-100 dark:border-gray-800 hover:border-emerald-200'}`}>
      
      {service.highlight && (
        <div className="absolute top-8 right-8 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full animate-pulse">
          Popular
        </div>
      )}

      <div className="mb-8">
        <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${service.highlight ? 'bg-emerald-600 text-white' : 'bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400'}`}>
          {iconMap[service.iconName] || <Sprout size={24} />}
        </div>
        
        <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3">
          {service.title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed min-h-[4rem]">
          {service.description}
        </p>
      </div>

      <div className="flex-grow space-y-4 mb-10">
        <div className="h-px bg-gray-100 dark:bg-gray-800 w-full" />
        <ul className="space-y-4">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm font-bold text-gray-600 dark:text-gray-400">
              <div className="mt-1 bg-emerald-100 dark:bg-emerald-900/40 p-0.5 rounded-full text-emerald-600 dark:text-emerald-400">
                <Check size={12} strokeWidth={4} />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-auto space-y-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter">{service.price}</span>
          <span className="text-gray-400 font-bold text-sm uppercase tracking-widest">{service.billingPeriod}</span>
        </div>
        
        <NavLink 
          to="/quote" 
          state={{ selectedService: service.title }}
          className={`w-full py-5 px-4 rounded-[1.5rem] font-black text-center transition-all duration-300 flex items-center justify-center gap-3 group/btn active:scale-95 ${
            service.highlight 
              ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20 hover:shadow-2xl hover:shadow-emerald-600/40' 
              : 'bg-gray-50 dark:bg-gray-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-gray-100 dark:border-gray-800 hover:border-emerald-200 shadow-sm hover:shadow-md'
          }`}
        >
          Select Plan
          <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
        </NavLink>
      </div>
    </div>
  );
};

export default ServiceCard;