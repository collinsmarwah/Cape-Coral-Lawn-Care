
export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Mapping to Lucide icons
  price: string;
  billingPeriod: string;
  features: string[];
  highlight?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatarUrl: string;
}

export interface QuoteRequest {
  lawnSize: number; // sq ft
  serviceTypes: string[];
  lawnConditions: string[];
  lastServiceDate: string;
  issues: string;
}

export interface AIQuoteResponse {
  estimatedPrice: string;
  summary: string;
  tips: string[];
}
