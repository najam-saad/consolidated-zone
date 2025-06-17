import { About } from '@/components/About';

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white text-center mb-8">About Us</h1>
        <div className="max-w-3xl mx-auto bg-gray-800/50 p-8 rounded-lg shadow-xl backdrop-blur-md">
            <About />
          <p className="text-lg text-gray-300 mt-4">
            Detailed information about our company, mission, and values will be available here soon.
            Stay tuned for updates!
          </p>
        </div>
      </div>
    </main>
  );
} 