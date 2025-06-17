import { Contact } from '@/components/Contact';

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Contact Us</h1>
        <Contact />
      </div>
    </main>
  );
} 