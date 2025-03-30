import { NextRequest, NextResponse } from 'next/server';

// Define the project data structure
interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  image: string;
  technologies: string[];
  client?: string;
  duration?: string;
  completedDate?: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
}

// Sample projects data - in a real application, this would come from a database
const projects: Project[] = [
  {
    id: 'planning-management-system',
    title: 'Planning Management System',
    shortDescription: 'Streamlined project planning tool with real-time collaboration features for enterprise teams.',
    description: 'We developed a comprehensive planning management system for a leading enterprise client. This system enables teams to collaborate in real-time, track project progress, allocate resources efficiently, and generate detailed reports. The platform integrates with existing enterprise tools and provides a unified dashboard for all planning activities.',
    category: 'web-application',
    image: '/projects/planning-system.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebSockets', 'AWS'],
    client: 'Enterprise Solutions Inc.',
    duration: '8 months',
    completedDate: '2023-06-15',
    testimonial: {
      quote: 'The planning management system has transformed how our teams collaborate. We\'ve seen a 40% increase in project completion rates since implementation.',
      author: 'Sarah Johnson',
      position: 'CTO',
      company: 'Enterprise Solutions Inc.'
    }
  },
  {
    id: 'hr-management-system',
    title: 'HR Management System',
    shortDescription: 'Comprehensive employee management solution with automated payroll and performance tracking.',
    description: 'Our team designed and implemented a full-featured HR management system that streamlines employee onboarding, time tracking, payroll processing, and performance reviews. The system features an intuitive interface, customizable workflows, and comprehensive reporting capabilities, allowing HR departments to operate more efficiently and effectively.',
    category: 'enterprise-software',
    image: '/projects/hr-system.jpg',
    technologies: ['Angular', 'Java Spring Boot', 'PostgreSQL', 'Docker', 'Azure'],
    client: 'Global HR Solutions',
    duration: '10 months',
    completedDate: '2023-09-30',
    testimonial: {
      quote: 'This HR system has reduced our administrative workload by 60%. The automation and reporting features have been game-changers for our organization.',
      author: 'Michael Chen',
      position: 'HR Director',
      company: 'Global HR Solutions'
    }
  },
  {
    id: 'mobile-workflow-system',
    title: 'Mobile Workflow System',
    shortDescription: 'Cross-platform mobile application enabling field employees to manage tasks remotely.',
    description: 'We developed a sophisticated mobile workflow system that allows field employees to manage tasks, capture data, and collaborate with team members while working remotely. The application works offline with seamless synchronization when connectivity is restored, features a barcode/QR scanner, photo documentation capabilities, and real-time notifications, significantly improving field team productivity and data accuracy.',
    category: 'mobile-application',
    image: '/projects/mobile-workflow.jpg',
    technologies: ['React Native', 'Firebase', 'Redux', 'Native Modules', 'Google Cloud'],
    client: 'FieldTech Operations',
    duration: '6 months',
    completedDate: '2023-11-20',
    testimonial: {
      quote: 'The mobile workflow solution has revolutionized our field operations. Our teams are now 35% more efficient, and data errors have been reduced by 90%.',
      author: 'Jennifer Torres',
      position: 'Operations Manager',
      company: 'FieldTech Operations'
    }
  },
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    shortDescription: 'Feature-rich online store with integrated payment processing and inventory management.',
    description: 'We created a sophisticated e-commerce platform that provides seamless shopping experiences across desktop and mobile devices. The solution includes advanced search capabilities, personalized recommendations, secure payment processing, inventory management, and comprehensive analytics. The platform was designed for high performance and scalability to accommodate growing product catalogs and increasing user traffic.',
    category: 'web-application',
    image: '/projects/ecommerce.jpg',
    technologies: ['Next.js', 'Strapi', 'Stripe', 'ElasticSearch', 'Redis', 'AWS'],
    client: 'RetailPlus',
    duration: '9 months',
    completedDate: '2023-08-10'
  },
  {
    id: 'healthcare-management-app',
    title: 'Healthcare Management App',
    shortDescription: 'Secure patient management system with telehealth capabilities and medical record tracking.',
    description: 'Our team developed a comprehensive healthcare management application that allows medical professionals to securely manage patient records, schedule appointments, conduct telehealth sessions, and track treatment plans. The system is HIPAA-compliant, features robust data encryption, and integrates with existing medical systems while providing an intuitive interface for both healthcare providers and patients.',
    category: 'healthcare',
    image: '/projects/healthcare-app.jpg',
    technologies: ['Vue.js', 'Python Django', 'PostgreSQL', 'WebRTC', 'GCP'],
    client: 'MediTech Solutions',
    duration: '12 months',
    completedDate: '2023-10-05'
  },
  {
    id: 'financial-analytics-dashboard',
    title: 'Financial Analytics Dashboard',
    shortDescription: 'Interactive data visualization platform for financial analysis and reporting.',
    description: 'We designed and built a sophisticated financial analytics dashboard that transforms complex financial data into clear, actionable insights. The platform features interactive charts and graphs, customizable reports, predictive analytics, and real-time data processing. The solution enables finance teams to monitor key performance indicators, identify trends, and make data-driven decisions with confidence.',
    category: 'data-analytics',
    image: '/projects/finance-dashboard.jpg',
    technologies: ['React', 'D3.js', 'Python', 'TensorFlow', 'SQL', 'Tableau'],
    client: 'FinMetrics',
    duration: '7 months',
    completedDate: '2023-05-22'
  }
];

// GET handler for retrieving projects
export async function GET(req: NextRequest) {
  try {
    // Get the URL object to access query parameters
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const category = searchParams.get('category');
    
    // If ID provided, return specific project
    if (id) {
      const project = projects.find(project => project.id === id);
      if (!project) {
        return NextResponse.json(
          { error: 'Project not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(project);
    }
    
    // If category provided, filter by category
    if (category) {
      const filteredProjects = projects.filter(project => project.category === category);
      return NextResponse.json(filteredProjects);
    }
    
    // Otherwise return all projects
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error retrieving projects:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve projects' },
      { status: 500 }
    );
  }
}
