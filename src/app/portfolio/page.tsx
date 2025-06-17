import { Projects } from '@/components/Projects';

export default function PortfolioPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Our Portfolio</h1>
        <div className="max-w-3xl mx-auto bg-gray-800/50 p-8 rounded-lg shadow-xl backdrop-blur-md">
          <Projects />
          <p className="text-lg text-gray-300 mt-4">
            Examples of our past work and client projects will be showcased here soon.
            Stay tuned for updates!
          </p>
        </div>
      </div>
    </main>
  );
} 