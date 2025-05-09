import { NextRequest, NextResponse } from 'next/server';

// Define a simple project interface
interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  date: string;
  technologies: string[];
}

// Sample projects data
const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform Redesign',
    category: 'Web Development',
    image: '/images/projects/project1.jpg',
    description: 'Complete redesign and development of an e-commerce platform, improving user experience and conversion rates.',
    client: 'Fashion Retailer',
    date: '2023',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
  },
  {
    id: '2',
    title: 'Mobile Banking Application',
    category: 'Mobile Development',
    image: '/images/projects/project2.jpg',
    description: 'Secure and user-friendly mobile banking application with advanced features and biometric authentication.',
    client: 'Financial Services Company',
    date: '2022',
    technologies: ['React Native', 'Firebase', 'Swift', 'Kotlin'],
  },
  {
    id: '3',
    title: 'Enterprise Resource Planning System',
    category: 'Software Development',
    image: '/images/projects/project3.jpg',
    description: 'Comprehensive ERP system tailored for manufacturing industry with inventory, HR, and financial management modules.',
    client: 'Manufacturing Corporation',
    date: '2023',
    technologies: ['Angular', '.NET Core', 'SQL Server', 'Azure'],
  },
  {
    id: '4',
    title: 'Digital Marketing Campaign',
    category: 'Digital Marketing',
    image: '/images/projects/project4.jpg',
    description: 'Multi-channel digital marketing campaign that increased client online presence and lead generation by 150%.',
    client: 'Hospitality Group',
    date: '2022',
    technologies: ['Google Ads', 'SEO', 'Social Media', 'Content Marketing'],
  },
  {
    id: '5',
    title: 'Healthcare Management System',
    category: 'Web Development',
    image: '/images/projects/project5.jpg',
    description: 'Patient management system with integrated appointment scheduling, electronic medical records, and billing functions.',
    client: 'Medical Center',
    date: '2023',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
  },
  {
    id: '6',
    title: 'Real Estate Platform',
    category: 'Web Development',
    image: '/images/projects/project6.jpg',
    description: 'Interactive real estate platform with property listings, virtual tours, and mortgage calculator features.',
    client: 'Real Estate Agency',
    date: '2022',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Vercel'],
  },
];

// GET handler for retrieving projects
export async function GET() {
  return NextResponse.json(projects);
} 