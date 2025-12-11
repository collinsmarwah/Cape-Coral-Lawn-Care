import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { NavLink } from 'react-router-dom';

type Category = 'All' | 'Lawn Maintenance' | 'Landscaping' | 'Tree Services';

const CATEGORIES: Category[] = ['All', 'Lawn Maintenance', 'Landscaping', 'Tree Services'];

const GALLERY_ITEMS: { url: string; category: Exclude<Category, 'All'> }[] = [
  { url: "https://scontent.fdar5-1.fna.fbcdn.net/v/t39.30808-6/481056447_122203232750057044_292036022942526921_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IKRnMhrY1VcQ7kNvwF8y0gx&_nc_oc=AdnjMbGmcBkhEfkOPP2L43jNs8yy2c1-8Q5GMe2dW32him1WJyVLoGtjo3zDgm1JeWM&_nc_zt=23&_nc_ht=scontent.fdar5-1.fna&_nc_gid=NjPPvIx00ZSYj5eBddP07A&oh=00_AfmfgJBaLBaZrvWbvhv2iV3iNGLOwvP6BelIF9WFxI3nrw&oe=694092F8", category: "Lawn Maintenance" },
  { url: "https://scontent.fdar12-1.fna.fbcdn.net/v/t39.30808-6/481678787_122203232696057044_9025866074772714658_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=iuJtnGs3GyEQ7kNvwHUYzVO&_nc_oc=AdmVTOboqpEUAtaeGDd-foSHgOhkdTNDltZpq_GyLF0d4tDJxf2UdbnYN-N9oWbeQOc&_nc_zt=23&_nc_ht=scontent.fdar12-1.fna&_nc_gid=M0IRC40QR8sOLohb-20LCw&oh=00_Afl_B9HOfZQHlxSCD3QleXV8KR3qn-qH7JgJVMs9uTJrKg&oe=6940A4E9", category: "Landscaping" },
  { url: "https://scontent.fdar12-1.fna.fbcdn.net/v/t39.30808-6/481677549_122203232636057044_6883513208441265936_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Bm80UFmIOs0Q7kNvwEOBDFn&_nc_oc=AdmSDByDBXnrrpBhnaLGszNLpX9vzj8tyeY7dBdL4r4fXutlPjqgHHw3-7p7wzhZd-E&_nc_zt=23&_nc_ht=scontent.fdar12-1.fna&_nc_gid=GtQdm_peTU0-WperG034kA&oh=00_Afn5khNABowhSNmQIsNwtOicel1M9yAG3IcITZDAvhH8JA&oe=69408779", category: "Tree Services" },
  { url: "https://scontent.fdar12-1.fna.fbcdn.net/v/t39.30808-6/481080587_122203232276057044_4440635893095620308_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sJ0QYeGjwfkQ7kNvwE-GT7O&_nc_oc=AdnshbAPn4c6Ee4ZzJjA00GYLnTaCl-AbxHenS84pp2ysQvq8Vvt3rmHQA4ciGJFXNs&_nc_zt=23&_nc_ht=scontent.fdar12-1.fna&_nc_gid=IFnt02l04Z8l9x-eWml2GA&oh=00_AfnjWrkRA4j_CQStazkwbLjTNrMmb0KYz_O9MJoUBcQQiQ&oe=694088E9", category: "Lawn Maintenance" },
  { url: "https://scontent.fdar12-1.fna.fbcdn.net/v/t39.30808-6/481080051_122203232846057044_4414287627119053490_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6ECgFV1dUCEQ7kNvwFXEl97&_nc_oc=AdlJwKtREKGvduQuWop-yzpRnMCO52l1hKY5rdI6hlFD4isaAAYogAR1-qPh7I8ZnH0&_nc_zt=23&_nc_ht=scontent.fdar12-1.fna&_nc_gid=xv2X9LR2xEKfRCa1ZqkV0w&oh=00_AfnoYkqqHP0IO13jfhynGnxuQlBMxz-YOdsezVYX0S-H6A&oe=6940A7DB", category: "Landscaping" },
  { url: "https://scontent.fdar5-1.fna.fbcdn.net/v/t39.30808-6/482051277_122203232780057044_8168883845725888922_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=r6Al7Re0XewQ7kNvwEUwNOT&_nc_oc=Adleu0J8fm8ZkHB9vDByGp48Qn1IeXbjXOFwX_rOpptI4uFz0kc5xW2-NatHXCGiaEo&_nc_zt=23&_nc_ht=scontent.fdar5-1.fna&_nc_gid=JkCY4qKaD9jZg1ZTBS8g8A&oh=00_Afksgn6HIxulWo2kCEsExbXhCfMVLiFdIM0EFsRGtceRxw&oe=69407268", category: "Tree Services" },
  { url: "https://scontent.fdar12-1.fna.fbcdn.net/v/t39.30808-6/481912811_122203232270057044_4756229467953858839_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ICOCwbluW50Q7kNvwEWc2yH&_nc_oc=AdmJNPR94LjGUTvkMqRUSHtjER_iIFaEDXEPghsXgac_6TawkRfBWNkwNCczhbyLQlQ&_nc_zt=23&_nc_ht=scontent.fdar12-1.fna&_nc_gid=7XQWGvQWtZv4KZ4fXVJ1jQ&oh=00_AfnvsszTG3nFi7KgYpOWmRjRw6Jo68LFICPKUZ4KfQn_LQ&oe=6940A040", category: "Lawn Maintenance" },
  { url: "https://scontent.fdar5-1.fna.fbcdn.net/v/t39.30808-6/481165356_122203095404057044_3517498291471743001_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2Wnhyuo60V0Q7kNvwG_kAYk&_nc_oc=AdmS-yO0duYzBTg_pOii_Phq4vCPmDGCvWf27DRZ4oLSyS0gWlAAa7N5thq8aEnXaI0&_nc_zt=23&_nc_ht=scontent.fdar5-1.fna&_nc_gid=D6Uec37g1ZEmkYlBtq71Bw&oh=00_AflFCEH62uHSUZbTB681puu5w_6MZYMjrcFfVFbgDhewvA&oe=694095E3", category: "Landscaping" },
  { url: "https://scontent.fdar5-1.fna.fbcdn.net/v/t39.30808-6/481133634_122203095380057044_7163885659431329776_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hDZMR5Jk95AQ7kNvwEH6can&_nc_oc=Adm5MrX39ReypFcsEaKdkVzEcnTU24KOpeEDNwcOp-smSXDdCWDZ3nPhlMUZbWx1UyI&_nc_zt=23&_nc_ht=scontent.fdar5-1.fna&_nc_gid=g5xw7QbrXgUm-Q7MnOrvTg&oh=00_AfkTkZoIWfHTM_qTWoWtF8zO1Nm5AZ1kpg1lpLPR09bhMg&oe=6940723A", category: "Tree Services" },
  { url: "https://scontent.fdar12-1.fna.fbcdn.net/v/t39.30808-6/481122450_122203095410057044_645468580714366399_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=o1F9kBDEIGkQ7kNvwGR70cB&_nc_oc=Adk7lw4BClE9_Mxo-nHWKsxdsTF-K_mUOWsdJDl3SN73MoFY5HD7XgcTFqRN0XB7vBM&_nc_zt=23&_nc_ht=scontent.fdar12-1.fna&_nc_gid=3qawMCUlN95AqABP2zTisg&oh=00_Afl4QDWyHdjPcyQzjn8Dw0iI42u48iQpnDL73nCxJVppdw&oe=694083B7", category: "Lawn Maintenance" },
  { url: "https://scontent.fdar12-1.fna.fbcdn.net/v/t39.30808-6/482066536_122202862010057044_8556420024208133221_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OVaP86NGcJEQ7kNvwGXlh6L&_nc_oc=Adnv-tcB69WQeFWWd7gcXmQJrE7hy23VoTapO0l2O5fgahY3EIGzO0CW8dFWkaG3_mM&_nc_zt=23&_nc_ht=scontent.fdar12-1.fna&_nc_gid=pKcIoE5CdJAPLTGsQXF_Jw&oh=00_AfmhPfdTGZOTCdHaRTA-MOCnIZuV_uInrEV7ygiMXqYN4w&oe=69408B2E", category: "Landscaping" }
];

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredImages = activeCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-emerald-100 p-3 rounded-full text-emerald-600 mb-4">
            <Camera size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Work</h1>
          <p className="text-xl text-gray-600">
            Take a look at some of the recent projects we've completed around Cape Coral. From routine maintenance to total transformations.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map(category => (
                <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                        activeCategory === category
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
                        : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-emerald-600 border border-gray-200'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-20">
          {filteredImages.map((item, idx) => (
            <div 
              key={item.url} 
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 bg-gray-200 animate-in fade-in zoom-in-95"
            >
              <img 
                src={item.url} 
                alt={`Cape Coral Lawn Care ${item.category} Project`} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-semibold text-sm bg-emerald-600/90 px-3 py-1 rounded-full backdrop-blur-sm">
                    {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-sm border border-gray-100 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Like What You See?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Let's make your lawn the next highlight in our gallery. Contact us today for a free estimate.
          </p>
          <NavLink 
            to="/quote" 
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-emerald-600/20 transition-all transform hover:-translate-y-1"
          >
            Get a Quote
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default GalleryPage;