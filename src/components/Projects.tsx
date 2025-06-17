'use client';

import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Planning Management System',
    description: 'Streamlined project planning tool with real-time collaboration features for enterprise teams.',
    icon: 'management',
  },
  {
    id: '2',
    title: 'HR Management System',
    description: 'Comprehensive employee management solution with automated payroll and performance tracking.',
    icon: 'hr',
  },
  {
    id: '3',
    title: 'Mobile Workflow System',
    description: 'Cross-platform mobile application enabling field employees to manage tasks remotely.',
    icon: 'mobile',
  },
];

export function Projects() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -z-10 top-1/2 left-0 w-full h-1/2">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Projects
            </h2>
            <p className="max-w-2xl text-gray-400">
              We take pride in our successful projects that have transformed businesses across different industry verticals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-violet-900/30 hover:border-violet-700/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-black/50 flex items-center justify-center text-white">
                    {project.icon === 'management' && (
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14H7v-2h3v2zm0-4H7v-2h3v2zm0-4H7V7h3v2zm4 8h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3V7h3v2zm4 8h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3V7h3v2z" />
                      </svg>
                    )}
                    {project.icon === 'hr' && (
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                      </svg>
                    )}
                    {project.icon === 'mobile' && (
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                      </svg>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                <div>
                  <Link 
                    href={`/projects/${project.id}`}
                    className="text-sm text-secondary hover:underline flex items-center"
                  >
                    View Project
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-violet-700/50 text-white font-medium transition-all hover:bg-violet-700/20"
            >
              View All Projects
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 