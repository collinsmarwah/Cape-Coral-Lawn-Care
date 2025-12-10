import React from 'react';
import { Users, CheckCircle, Handshake } from 'lucide-react';
import ContactForm from '../components/Shared/ContactForm';

const teamMembers = [
  {
    name: "Brett Madr",
    bio: "Brett has been in lawn care and maintenance for approximately 11 years. He enjoys time with his wife and two kids, including travel, fishing and movie nights.",
    image: "https://capecorallawncare.com/wp-content/uploads/2024/12/A7405126-scaled.jpg.webp"
  },
  {
    name: "Jonathan Kennedy",
    bio: "Jonathan loves being with his kids. He often fishes, enjoying it for most of his life. But he also enjoys video games on his downtime when he’s inside with family.",
    image: "https://capecorallawncare.com/wp-content/uploads/2024/12/A7405121-scaled.jpg.webp"
  },
  {
    name: "Elijah Evors",
    bio: "Elijah enjoys many activities. When he’s not maximizing the lawns of Cape Coral customers, you might find him fishing, hunting, or spending time with his kids.",
    image: "https://capecorallawncare.com/wp-content/uploads/2024/12/A7405117-scaled.jpg.webp"
  },
  {
    name: "Tyler Cone",
    bio: "Tyler also thrills at the outdoors to a great degree. Born and raised in Florida, he often will fish and hunt with his family, regaling the tales of his latest catches.",
    image: "https://capecorallawncare.com/wp-content/uploads/2024/12/A7405129-scaled.jpg.webp" // Corrected path from wpcontent to wp-content based on standard WP structure
  }
];

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen pb-20 bg-white">
        
      {/* Header */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Changing the Way We Keep Our Community Beautiful</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
            We’re not your traditional service company. Instead, we’re a group of Cape Coral locals with a passion for creating a more reliable way to care for your home or business.
            </p>
        </div>
      </div>

      {/* History Section */}
      <div className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto bg-emerald-50 rounded-3xl p-8 md:p-12 border border-emerald-100">
              <h2 className="text-3xl font-bold text-emerald-900 mb-6 text-center">Brief History</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p>
                      Established with a vision to redefine lawn maintenance in Southwest Florida, Cape Coral Lawn Care has grown from a modest neighborhood initiative into the city's most trusted outdoor service provider.
                  </p>
                  <p>
                      Our journey began when a group of lifelong locals recognized a distinct gap in the market: finding reliable, high-quality lawn care was unnecessarily difficult. Armed with a commitment to dependability and professional pride, we set out to prove that a lawn care company could be punctual, communicative, and detail-oriented.
                  </p>
                  <p>
                       Over the years, we expanded our expertise beyond basic mowing to encompass comprehensive landscaping, irrigation, and plant health services. By mastering the unique challenges of Cape Coral's climate—from our sandy soil to managing St. Augustine and Floratam turf—we developed a standard of care that ensures lasting results.
                  </p>
                  <p>
                      Today, we remain proudly locally owned and operated. We continue our legacy of service excellence by prioritizing fair wages for our dedicated crew and maintaining transparent, honest relationships with our clients, keeping our community beautiful one lawn at a time.
                  </p>
              </div>
          </div>
      </div>

      {/* Staff Grid Section */}
      <div className="container mx-auto px-4 mb-24">
        <div className="text-center mb-16">
            <h4 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-3">Our Staff</h4>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Proud To Serve Cape Coral</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the Cape Coral Lawn Care team, dedicated to expert care, reliable service, and keeping your outdoor spaces beautifully green.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
                <div key={idx} className="group flex flex-col items-center text-center">
                    <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-lg mb-6 bg-gray-100">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                        />
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-900 mb-3">{member.name}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm px-2">
                        {member.bio}
                    </p>
                </div>
            ))}
        </div>
      </div>

      {/* Values */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <Users size={32} />
                </div>
                <h3 className="text-xl font-bold">Local Experts</h3>
                <p className="text-gray-600">Backed by years of expertise on how to care for Southwest Florida grass & plants. We know St. Augustine, we know the soil.</p>
            </div>
            <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <Handshake size={32} />
                </div>
                <h3 className="text-xl font-bold">Skin in the Game</h3>
                <p className="text-gray-600">By empowering local owners & operators with fair wages, you guarantee that the technician helping you has a stake in doing it right.</p>
            </div>
            <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold">Dependable</h3>
                <p className="text-gray-600">Affordable, honest, and dependable. We show up on schedule and communicate proactively.</p>
            </div>
        </div>
      </div>

      {/* Team CTA */}
      <div className="bg-emerald-900 py-20">
          <div className="container mx-auto px-4 text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Join the Team</h2>
              <p className="max-w-2xl mx-auto text-emerald-100 mb-8">We are always looking for dedicated landscaping professionals in Cape Coral.</p>
              <button className="bg-white text-emerald-900 px-8 py-3 rounded-full font-bold hover:bg-emerald-50 transition-colors">
                  Contact for Careers
              </button>
          </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you with a free quote.</p>
             </div>
             <ContactForm />
        </div>
      </div>

    </div>
  );
};

export default AboutPage;