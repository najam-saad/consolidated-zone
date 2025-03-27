'use client';

import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show a confirmation message or toast
  };

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-block">
              <h2 className="inline-block text-3xl md:text-4xl font-bold relative mb-2 text-white neon-glow">
                Get In Touch
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
              </h2>
            </div>
            <p className="max-w-2xl mt-4 text-gray-400">
              Are you ready to elevate your digital presence? We'd love to hear about your project. Contact us today and let's create something extraordinary together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map Section */}
            <div className="rounded-xl overflow-hidden border border-violet-900/30 bg-glass">
              {/* Placeholder for map - in a real app use a map integration */}
              <div className="w-full h-96 bg-gray-800 relative">
                <div className="absolute inset-0 bg-gray-800 opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4">
                    <p className="text-gray-400 mb-2">Map placeholder</p>
                    <p className="text-white font-medium">123 Tech Plaza, Silicon Valley, CA 94043</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-glass rounded-xl p-6 backdrop-blur-md border border-violet-900/30">
              <h3 className="text-xl font-bold mb-6 text-white">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 text-sm mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-muted border border-violet-900/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-400 text-sm mb-1">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-muted border border-violet-900/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-400 text-sm mb-1">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-muted border border-violet-900/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="SEO Services">SEO Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-400 text-sm mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-muted border border-violet-900/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <button 
                    type="submit"
                    className="px-6 py-3 rounded-full bg-secondary text-white font-medium transition-all neon-border hover:bg-secondary/90"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <ContactInfoCard
              icon="location"
              title="Our Location"
              description="123 Tech Plaza, Silicon Valley, CA 94043"
            />
            <ContactInfoCard
              icon="email"
              title="Email Us"
              description="info@consolidated-zone.com"
            />
            <ContactInfoCard
              icon="phone"
              title="Call Us"
              description="+1 (555) 123-4567"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactInfoCardProps {
  icon: 'location' | 'email' | 'phone';
  title: string;
  description: string;
}

function ContactInfoCard({ icon, title, description }: ContactInfoCardProps) {
  return (
    <div className="bg-glass rounded-xl p-6 backdrop-blur-md border border-violet-900/30 flex items-center">
      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mr-4 text-secondary">
        {icon === 'location' && (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        )}
        {icon === 'email' && (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        )}
        {icon === 'phone' && (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        )}
      </div>
      <div>
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
} 