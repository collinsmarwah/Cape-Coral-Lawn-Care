import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const LocationsPage: React.FC = () => {
  const serviceAreas = [
    {
      name: 'Cape Coral',
      description: 'Our home base. Serving all zip codes including 33904, 33914, 33990, 33991, 33993.',
      active: true
    },
    {
      name: 'Fort Myers',
      description: 'Serving residential and commercial properties throughout Fort Myers proper.',
      active: true
    },
    {
      name: 'North Fort Myers',
      description: 'Comprehensive lawn care for our neighbors to the north.',
      active: true
    },
    {
      name: 'Matlacha',
      description: 'Specialized island care for Matlacha residents.',
      active: true
    },
    {
      name: 'Pine Island',
      description: 'Limited service availability - please call for confirmation.',
      active: false
    }
  ];

  return (
    <div className="pt-24 min-h-screen pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Service Areas</h1>
          <p className="text-xl text-gray-600">
            We are proud to be locally owned and operated right here in Cape Coral, extending our reliable services to our surrounding neighbors.
          </p>
        </div>

        {/* Map & List Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            
            {/* List */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Where We Work</h2>
                <div className="space-y-6">
                    {serviceAreas.map((area, idx) => (
                        <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100">
                            <div className={`mt-1 p-2 rounded-full ${area.active ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-400'}`}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                    {area.name}
                                    {!area.active && <span className="text-xs font-normal bg-gray-200 text-gray-600 px-2 py-1 rounded">Coming Soon</span>}
                                </h3>
                                <p className="text-gray-600 mt-1">{area.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-100">
                    <p className="text-gray-600 mb-4">Don't see your location listed? Give us a call, we might still be able to help!</p>
                    <NavLink to="/contact" className="text-emerald-600 font-bold hover:text-emerald-700 flex items-center gap-2">
                        Check Availability <span aria-hidden="true">&rarr;</span>
                    </NavLink>
                </div>
            </div>

            {/* Visual Map (Embed) */}
            <div className="h-[600px] bg-gray-200 rounded-3xl overflow-hidden shadow-lg border-4 border-white relative">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d113963.8052140411!2d-81.9967265!3d26.6625783!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Service Area Map"
                    className="absolute inset-0 w-full h-full"
                ></iframe>
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-200">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-emerald-600" />
                        <div>
                            <p className="font-bold text-gray-900">Headquartered in Cape Coral</p>
                            <p className="text-xs text-gray-600">Dispatching daily to SW Florida</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;