import React from 'react';
import { Leaf, Calendar, Shovel, BadgeDollarSign } from 'lucide-react';

const features = [
  {
    icon: <Leaf size={32} />,
    title: "Locally Owned",
    desc: "We aren't a big franchise. We're Cape Coral locals who care about our community."
  },
  {
    icon: <Calendar size={32} />,
    title: "Reliable Schedule",
    desc: "We show up when we say we will. Dependability is our #1 promise."
  },
  {
    icon: <Shovel size={32} />,
    title: "Skin in the Game",
    desc: "Our operators are empowered with ownership, ensuring your lawn is treated like their own."
  },
  {
    icon: <BadgeDollarSign size={32} />,
    title: "Honest Pricing",
    desc: "No hidden fees or surprise upcharges. Simple, transparent monthly billing."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-white dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-800 hover:border-emerald-100 dark:hover:border-emerald-900/50 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl shadow-sm flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white dark:group-hover:bg-emerald-500 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;