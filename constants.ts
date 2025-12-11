
import { Service, Testimonial } from './types';

export const CONTACT_INFO = {
  address: "3405 SW 8th St, Cape Coral, FL 33991",
  phone: "(239) 323-0029",
  email: "team@capecorallawncare.com"
};

// Replace this URL with your actual logo image path (e.g., '/logo.png')
export const LOGO_URL = "https://capecorallawncare.com/wp-content/uploads/2025/02/cropped-cape-coral-lawn-care-logo.webp";

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Locations', path: '/locations' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Privacy', path: '/privacy' },
  { name: 'Terms', path: '/terms' },
  // { name: 'Customer Portal', path: '/portal', external: true } // Handled manually in Header
];

export const SERVICE_CATALOG = [
  "Lawn Mowing Maintenance",
  "Landscaping, Design, and Maintenance",
  "Lawn Cleaning and Maintenance",
  "Irrigation System Repair and Maintenance",
  "Lawn Seeding Maintenance",
  "Mulch and Rock Maintenance",
  "Plant Care Maintenance",
  "Tree Installation Services",
  "Weeding Maintenance",
  "Tree and Shrub Trimming",
  "Power Washing"
];

export const DETAILED_SERVICES = [
  {
    title: "Lawn Mowing Maintenance",
    description: "Keep your lawn pristine with expert mowing services tailored to maintain a healthy and polished look year-round.",
    image: "https://greenlight-landscape-gardening.co.uk/wp-content/uploads/2022/05/Lawn-Mowing-Services.jpg",
    features: [
      "Precision Mowing",
      "Line Trimming",
      "Edging along concrete",
      "Blowing & Debris Removal"
    ]
  },
  {
    title: "Landscaping, Design, and Maintenance",
    description: "Transform your outdoor space with custom landscaping, design, and ongoing care for lasting beauty.",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=800&h=600",
    features: [
      "Custom Landscape Design",
      "Professional Installation",
      "Seasonal Plant Refresh",
      "Ongoing Bed Maintenance"
    ]
  },
  {
    title: "Lawn Cleaning and Maintenance",
    description: "Ensure your lawn stays tidy and healthy with debris removal, trimming, and routine maintenance.",
    image: "https://www.connectcleaning.net.au/wp-content/uploads/2022/05/featured-garden-maintenance-1024x700.jpg",
    features: [
      "Seasonal Cleanup",
      "Leaf & Debris Removal",
      "Storm Cleanup",
      "Routine Tidy-ups"
    ]
  },
  {
    title: "Irrigation System Repair and Maintenance",
    description: "Keep your irrigation system running smoothly with expert repairs and regular maintenance services.",
    image: "https://res.cloudinary.com/liaison-inc/image/upload/c_fit,f_auto,q_auto,w_1200/services/homeguide/backgrounds/sprinkler-system-repair.jpg",
    features: [
      "System Diagnostics",
      "Sprinkler Head Repair",
      "Timer Programming",
      "Leak Detection"
    ]
  },
  {
    title: "Lawn Seeding Maintenance",
    description: "Promote lush, vibrant growth with professional lawn seeding and targeted maintenance solutions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNDV-cYtQND0CLZ9aR-ltRM8elEvv2PQzMVA&s",
    features: [
      "Professional Overseeding",
      "Soil Aeration",
      "Bare Spot Repair",
      "Growth Monitoring"
    ]
  },
  {
    title: "Mulch and Rock Maintenance",
    description: "Enhance your landscape's appearance and health with expert mulch and rock installation and upkeep.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcuZh1lNHqXC0LeVGSgUwc9LBzcTbK3mLVHA&s",
    features: [
      "Weed Barrier Installation",
      "Premium Mulch Options",
      "Decorative Rock Install",
      "Bed Edging"
    ]
  },
  {
    title: "Plant Care Maintenance",
    description: "Nurture your plants with professional care and maintenance to keep them thriving and vibrant.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800&h=600",
    features: [
      "Shrub Fertilization",
      "Disease Control",
      "Pest Management",
      "Corrective Pruning"
    ]
  },
  {
    title: "Tree Installation Services",
    description: "Beautify your property with expert tree selection and installation tailored to your landscape.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800&h=600",
    features: [
      "Native Tree Selection",
      "Professional Planting",
      "Staking & Bracing",
      "Care Instructions"
    ]
  },
  {
    title: "Weeding Maintenance",
    description: "Keep your lawn and garden weed-free with effective and consistent weeding services designed to protect your plants.",
    image: "https://aalawns.com/wp-content/uploads/2023/03/lawncare-cincinnati-northern-kentucky-768x512.jpg",
    features: [
      "Hand Weeding",
      "Flower Bed Maintenance",
      "Pre-emergent Control",
      "Regular Service"
    ]
  },
  {
    title: "Tree and Shrub Trimming",
    description: "Enhance your trees' health and property value with professional trimming services for safety and aesthetics.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop",
    features: [
      "Canopy Raising",
      "Deadwood Removal",
      "Shape & Structural Pruning",
      "Palm Trimming"
    ]
  },
  {
    title: "Power Washing",
    description: "Restore the cleanliness of your driveways, sidewalks, and patios with professional power washing services.",
    image: "https://majesticwindowsexteriorcleaning.com/wp-content/uploads/2021/09/pressure-washer-cleaning-concrete.jpg",
    features: [
      "Driveways & Sidewalks",
      "Patios & Decks",
      "Soft Wash Options",
      "Stain Removal"
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'bi-weekly',
    title: 'Bi-Weekly Lawn Care',
    description: 'Simple, effective maintenance perfect for the slower growing seasons or low-maintenance yards.',
    iconName: 'Scissors',
    price: '$109',
    billingPeriod: '/mo',
    features: [
      'Bi-Weekly Cuts',
      'Blowing & Cleanup',
      'Driveway Edging',
      'Sidewalk Edging (+$10)'
    ],
    highlight: false
  },
  {
    id: 'weekly',
    title: 'Weekly Lawn Care',
    description: 'Total, honest care. The best choice for keeping your Cape Coral lawn pristine year-round.',
    iconName: 'Sparkles',
    price: '$139',
    billingPeriod: '/mo',
    features: [
      'Weekly Cuts',
      'Blowing & Cleanup',
      'Driveway Edging',
      'Sidewalk Edging (+$10)'
    ],
    highlight: true
  },
  {
    id: 'landscaping',
    title: 'Landscaping & Projects',
    description: 'Complete outdoor solutions including irrigation, rock, mulch, and plant installations.',
    iconName: 'Shovel',
    price: 'Custom',
    billingPeriod: 'Quote',
    features: [
      'Irrigation Repair & Maint.',
      'Tree Install & Trimming',
      'Mulch, Rock & Seeding',
      'Design & Power Washing'
    ],
    highlight: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'James Peterson',
    location: 'Cape Coral',
    rating: 5,
    comment: 'Finally a lawn service that shows up on time! The text updates are a game changer.',
    avatarUrl: 'https://picsum.photos/100/100'
  },
  {
    id: '2',
    name: 'Maria Gonzalez',
    location: 'Fort Myers',
    rating: 5,
    comment: 'They transformed our overgrown backyard into a paradise. Honest pricing and great local team.',
    avatarUrl: 'https://picsum.photos/101/101'
  },
  {
    id: '3',
    name: 'Robert Daly',
    location: 'Cape Coral',
    rating: 5,
    comment: 'Love supporting a business owned by locals. You can tell they care about the community.',
    avatarUrl: 'https://picsum.photos/102/102'
  }
];
