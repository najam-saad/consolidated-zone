'use client';

import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      // Call the actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      const result = await response.json();
      console.log('Form submission result:', result);
      
      setFormStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden" id="contact-us">
      {/* Background decoration */}
      <div className="absolute -z-10 inset-0 bg-gradient-to-t from-violet-950/50 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="max-w-2xl text-gray-400">
              Feel free to reach out if you want to collaborate with us, or simply have a chat.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-violet-900/30 p-10">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              {/* Location Card */}
              <div className="mb-8">
                <div className="flex items-center text-white mb-2">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                  <span className="font-medium">Our Location</span>
                    </div>
                <p className="text-gray-400 pl-7">123 Tech Plaza, Silicon Valley, CA 94043</p>
                  </div>
                  
              {/* Email Card */}
              <div className="mb-8">
                <div className="flex items-center text-white mb-2">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                  <span className="font-medium">Email Us</span>
                    </div>
                <p className="text-gray-400 pl-7">info@consolidatedzone.com</p>
                  </div>
                  
              {/* Call Card */}
              <div>
                <div className="flex items-center text-white mb-2">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                  <span className="font-medium">Call Us</span>
                    </div>
                <p className="text-gray-400 pl-7">+1 (555) 123-4567</p>
                </div>
                
              {/* Social Icons */}
              <div className="mt-10 flex space-x-4">
                <a href="#" className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors border border-violet-700/30">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                <a href="#" className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors border border-violet-700/30">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                <a href="#" className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors border border-violet-700/30">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                </div>
              </div>
              
            {/* Contact Form */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-violet-900/30 p-10">
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                
                {formStatus === 'success' ? (
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 text-center">
                    <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h4 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h4>
                    <p className="text-gray-300">Thank you for contacting us. We&apos;ll get back to you shortly.</p>
                  </div>
                ) : formStatus === 'error' ? (
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 text-center">
                    <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h4 className="text-xl font-bold text-white mb-2">Something went wrong!</h4>
                    <p className="text-gray-300">Please try again or contact us directly via email.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-6">
                      <div>
                      <label htmlFor="name" className="block text-gray-300 text-sm mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                        className="w-full bg-muted border border-violet-700/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent bg-black/50"
                        />
                      </div>
                      
                      <div>
                      <label htmlFor="email" className="block text-gray-300 text-sm mb-2">Your Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                        className="w-full bg-muted border border-violet-700/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent bg-black/50"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-gray-300 text-sm mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="How can we help you?"
                        className="w-full bg-muted border border-violet-700/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent bg-black/50"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-300 text-sm mb-2">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Write your message here..."
                        className="w-full bg-muted border border-violet-700/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent bg-black/50 resize-none"
                      ></textarea>
                    </div>
                    </div>
                    
                  <div className="text-right">
                      <button 
                        type="submit"
                        disabled={formStatus === 'submitting'}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-white font-medium transition-all hover:bg-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {formStatus === 'submitting' ? (
                          <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </div>
                  </form>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}