import { NextRequest, NextResponse } from 'next/server';

// Define the service data structure
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
  benefits?: string[];
}

// Sample services data - in a real application, this would come from a database
const services: Service[] = [
  {
    id: 'web-app-development',
    title: 'Web App Development',
    description: 'We create responsive, elegant web applications using cutting-edge technologies and frameworks that deliver exceptional user experiences.',
    icon: 'web-dev',
    features: [
      'Custom web application development',
      'Progressive Web Apps (PWAs)',
      'E-commerce solutions',
      'CMS development',
      'Web portal development'
    ],
    benefits: [
      'Increased business efficiency',
      'Improved customer engagement',
      'Better user experience',
      'Scalable architecture'
    ]
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Our team builds native and cross-platform mobile applications that provide seamless experiences across all devices and platforms.',
    icon: 'mobile-dev',
    features: [
      'iOS and Android app development',
      'Cross-platform development',
      'UI/UX design',
      'App maintenance and support',
      'App store optimization'
    ],
    benefits: [
      'Reach wider audience',
      'Increased customer loyalty',
      'Improved brand presence',
      'Enhanced customer engagement'
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic digital marketing services to enhance your online presence, improve brand visibility, and drive qualified traffic to your platforms.',
    icon: 'digital-marketing',
    features: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'Pay-Per-Click (PPC) Advertising'
    ],
    benefits: [
      'Increased website traffic',
      'Better conversion rates',
      'Higher ROI on marketing spend',
      'Enhanced brand awareness'
    ]
  },
  {
    id: 'seo-content-ranking',
    title: 'SEO & Content Ranking',
    description: 'Optimize your digital content to rank higher in search engines with our comprehensive SEO strategies and content enhancement techniques.',
    icon: 'seo',
    features: [
      'Keyword research and analysis',
      'On-page and off-page SEO',
      'Technical SEO',
      'Local SEO',
      'SEO audit and reporting'
    ],
    benefits: [
      'Improved search engine rankings',
      'Increased organic traffic',
      'Higher quality leads',
      'Better user experience'
    ]
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'Our certified project managers ensure your projects are delivered on time, within budget, and according to the highest quality standards.',
    icon: 'project-management',
    features: [
      'Project planning and execution',
      'Resource management',
      'Risk management',
      'Quality assurance',
      'Project reporting and documentation'
    ],
    benefits: [
      'Timely project delivery',
      'Cost optimization',
      'Reduced project risks',
      'Improved project outcomes'
    ]
  },
  {
    id: 'legal-consultation',
    title: 'Legal Consultation',
    description: 'Get expert legal advice for your business operations, contracts, compliance, and intellectual property matters from our specialized team.',
    icon: 'legal',
    features: [
      'Business law consultation',
      'Contract drafting and review',
      'Intellectual property protection',
      'Compliance and regulatory advice',
      'Legal risk assessment'
    ],
    benefits: [
      'Legal risk mitigation',
      'Compliance with regulations',
      'Protection of intellectual property',
      'Sound business decisions'
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
