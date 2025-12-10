import React from 'react';
import { Mail, Phone, MapPin, Clock, Star, Heart } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import ContactForm from '../components/Shared/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                 <div className="flex text-amber-400">
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" className="text-amber-400" />
                 </div>
                 <span className="font-bold text-gray-900 text-lg">4.8</span>
                 <span className="text-gray-500 text-sm">(63 Google Reviews)</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h1>
              <p className="text-lg text-gray-600">
                We know the needs of every yard and job is unique – give us a ring and let us know what you’re looking for!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>
                  <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                  <p className="text-sm text-gray-500">Call us for a free quote</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600">{CONTACT_INFO.email}</p>
                  <p className="text-sm text-gray-500">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">Open 24 Hours</p>
                  <p className="text-sm text-gray-500">Mon - Sun</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Location</h3>
                  <p className="text-gray-600">{CONTACT_INFO.address}</p>
                  <p className="text-gray-600">Cape Coral, FL 33991</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                 <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-medium border border-purple-100">
                    <Heart size={12} fill="currentColor" /> LGBTQ+ Friendly
                 </span>
              </div>
            </div>

            <div className="h-80 rounded-2xl overflow-hidden bg-gray-100 relative border border-gray-200 shadow-sm">
               <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src="https://maps.google.com/maps?q=3405%20SW%208th%20St%2C%20Cape%20Coral%2C%20FL%2033991&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    title="Cape Coral Lawn Care Location"
                    className="w-full h-full"
                ></iframe>
            </div>
          </div>

          {/* Form */}
          <ContactForm />

        </div>
      </div>
    </div>
  );
};

export default ContactPage;