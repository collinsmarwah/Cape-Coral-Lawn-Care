import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm h-fit">
      {submitted ? (
        <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-10">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
            <Send size={40} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
          <p className="text-gray-600">Thank you for contacting Cape Coral Lawn Care. One of our lawn pros will get back to you shortly.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-6 text-emerald-600 font-semibold hover:text-emerald-700"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Tell us about your project</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" placeholder="John" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" placeholder="Doe" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" placeholder="john@example.com" required />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" placeholder="(239) 555-0123" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
            <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white">
              <option>Weekly Maintenance ($139/mo)</option>
              <option>Bi-Weekly Maintenance ($109/mo)</option>
              <option>Landscaping Design & Maintenance</option>
              <option>Irrigation Repair & Maintenance</option>
              <option>Tree Trimming / Installation</option>
              <option>Power Washing</option>
              <option>Lawn Seeding / Mulch / Rock</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" placeholder="How can we help you?" required></textarea>
          </div>

          <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-lg shadow-lg shadow-emerald-600/20 transition-all transform hover:-translate-y-1">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;