import { NextRequest, NextResponse } from 'next/server';

// Define the service data structure
interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
}

// Sample services data - in a real application, this would come from a database
const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    icon: 'code',
    description: 'Custom web applications and websites built with the latest technologies for optimal performance and user experience.',
    features: [
      'Responsive website design',
      'Progressive web applications',
      'E-commerce solutions',
      'Content management systems',
      'Web portals and dashboards'
    ]
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    icon: 'smartphone',
    description: 'Native and cross-platform mobile applications for iOS and Android with intuitive interfaces and seamless functionality.',
    features: [
      'iOS app development',
      'Android app development',
      'Cross-platform solutions',
      'Mobile UI/UX design',
      'App maintenance and updates'
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: 'trending-up',
    description: 'Strategic digital marketing services to boost your online presence, drive traffic, and increase conversions.',
    features: [
      'Search engine optimization (SEO)',
      'Pay-per-click advertising (PPC)',
      'Social media marketing',
      'Content marketing',
      'Email marketing campaigns'
    ]
  },
  {
    id: 'seo-services',
    title: 'SEO Services',
    icon: 'search',
    description: 'Comprehensive SEO strategies to improve your website\'s visibility, rankings, and organic traffic.',
    features: [
      'Technical SEO audits',
      'On-page optimization',
      'Off-page SEO',
      'Local SEO',
      'SEO performance analytics'
    ]
  },
  {
    id: 'it-consultation',
    title: 'IT Consultation',
    icon: 'users',
    description: 'Expert IT consultation to help your business leverage technology for growth, efficiency, and competitive advantage.',
    features: [
      'Technology strategy planning',
      'IT infrastructure assessment',
      'Digital transformation',
      'Cloud migration strategy',
      'Cybersecurity consulting'
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: 'layout',
    description: 'User-centered design solutions that enhance user satisfaction by improving the usability and accessibility of your digital products.',
    features: [
      'User experience research',
      'Interface design',
      'Prototyping & wireframing',
      'Usability testing',
      'Design systems'
    ]
  }
];

// GET handler for retrieving all services
export async function GET(req: NextRequest) {
  try {
    // Get the URL object to access query parameters
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    
    // If ID provided, return specific service
    if (id) {
      const service = services.find(service => service.id === id);
      if (!service) {
        return NextResponse.json(
          { error: 'Service not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(service);
    }
    
    // Otherwise return all services
    return NextResponse.json(services);
  } catch (error) {
    console.error('Error retrieving services:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve services' },
      { status: 500 }
    );
  }
}
