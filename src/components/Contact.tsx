'use client';

import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
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
      // Simulate API call with delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(formData);
      setFormStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
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
          <div className="flex flex-col items-center text-center mb-16">
            <span className="px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-violet-500/10 text-violet-300 border border-violet-500/20 mb-3">Contact Us</span>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 text-white">
              Let&apos;s Work <span className="text-secondary">Together</span>
            </h2>
            <p className="max-w-2xl text-gray-400">
              Ready to transform your business with cutting-edge IT solutions? Reach out to our team for a free consultation.
            </p>
          </div>
          
          <div className="bg-glass rounded-xl border border-violet-500/20 overflow-hidden backdrop-blur-md shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
              {/* Contact Info Section */}
              <div className="lg:col-span-2 p-8 md:p-10 bg-violet-900/30 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern opacity-5"></div>
                
                <h3 className="text-2xl font-bold text-white mb-8 relative">Contact Information</h3>
                
                <div className="space-y-6 relative">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-violet-700/30 flex items-center justify-center mr-4 text-secondary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Our Location</h4>
                      <p className="text-gray-300">123 Tech Plaza, Silicon Valley, CA 94043</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-violet-700/30 flex items-center justify-center mr-4 text-secondary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Email Us</h4>
                      <a href="mailto:info@consolidatedzone.com" className="text-gray-300 hover:text-secondary transition-colors">info@consolidatedzone.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-violet-700/30 flex items-center justify-center mr-4 text-secondary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Call Us</h4>
                      <a href="tel:+15551234567" className="text-gray-300 hover:text-secondary transition-colors">+1 (555) 123-4567</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-violet-700/30 flex items-center justify-center mr-4 text-secondary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Working Hours</h4>
                      <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 relative">
                  <h4 className="text-white font-medium mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-violet-700/30 flex items-center justify-center text-gray-300 hover:text-secondary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-violet-700/30 flex items-center justify-center text-gray-300 hover:text-secondary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.5 1.767c1.795 0 2.007.007 2.713.039.655.03 1.01.139 1.245.231.282.109.517.266.745.494s.385.463.493.745c.092.236.201.59.231 1.245.033.706.04.918.04 2.713s-.007 2.007-.04 2.713c-.03.655-.139 1.01-.231 1.245-.109.282-.266.517-.493.745s-.463.385-.745.493c-.236.092-.59.201-1.245.231-.706.033-.918.04-2.713.04s-2.007-.007-2.713-.04c-.655-.03-1.01-.139-1.245-.231-.282-.109-.517-.266-.745-.493s-.385-.463-.493-.745c-.092-.236-.201-.59-.231-1.245-.033-.706-.04-.918-.04-2.713s.007-2.007.04-2.713c.03-.655.139-1.01.231-1.245.109-.282.266-.517.493-.745s.463-.385.745-.493c.236-.092.59-.201 1.245-.231.706-.033.918-.039 2.713-.039m0-1.209c-1.826 0-2.056.008-2.773.04-.716.033-1.205.146-1.633.312-.443.172-.819.401-1.193.775s-.603.75-.775 1.193c-.166.428-.279.917-.312 1.633-.033.717-.04.947-.04 2.773s.007 2.056.04 2.773c.033.716.146 1.205.312 1.633.172.443.401.819.775 1.193s.75.603 1.193.775c.428.166.917.279 1.633.312.717.033.947.04 2.773.04s2.056-.007 2.773-.04c.716-.033 1.205-.146 1.633-.312.443-.172.819-.401 1.193-.775s.603-.75.775-1.193c.166-.428.279-.917.312-1.633.033-.717.04-.947.04-2.773s-.007-2.056-.04-2.773c-.033-.716-.146-1.205-.312-1.633-.172-.443-.401-.819-.775-1.193s-.75-.603-1.193-.775c-.428-.166-.917-.279-1.633-.312-.717-.033-.947-.04-2.773-.04zm0 3.27c-1.909 0-3.457 1.546-3.457 3.454s1.548 3.454 3.457 3.454 3.457-1.546 3.457-3.454-1.548-3.454-3.457-3.454zm0 5.699c-1.238 0-2.242-1.003-2.242-2.244s1.004-2.244 2.242-2.244 2.242 1.003 2.242 2.244-1.004 2.244-2.242 2.244zm4.402-5.83c0 .444-.362.805-.807.805s-.807-.36-.807-.805c0-.444.362-.805.807-.805s.807.36.807.805" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-violet-700/30 flex items-center justify-center text-gray-300 hover:text-secondary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05-.78-.83-1.89-1.36-3.16-1.36-2.39 0-4.34 1.94-4.34 4.33 0 .34.04.67.11.98-3.6-.18-6.8-1.91-8.93-4.54-.38.65-.59 1.4-.59 2.21 0 1.5.76 2.83 1.93 3.6-.71-.02-1.37-.22-1.95-.54v.05c0 2.1 1.5 3.85 3.48 4.25-.36.1-.74.15-1.14.15-.27 0-.54-.03-.81-.08.54 1.69 2.12 2.92 4 2.97-1.47 1.15-3.33 1.84-5.33 1.84-.34 0-.69-.02-1.02-.06 1.9 1.22 4.16 1.93 6.58 1.93 7.9 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.35 2.14-2.2z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-violet-700/30 flex items-center justify-center text-gray-300 hover:text-secondary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.996 2c1.103 0 2.004.893 2.004 1.992v16.016c0 1.1-.892 1.992-1.995 1.992h-5.782v-6.979h2.333l.351-2.705h-2.684v-1.726c0-.784.218-1.317 1.342-1.317h1.434v-2.422s-.872-.154-1.707-.154c-2.522 0-4.17 1.538-4.17 4.363v1.256h-2.792v2.705h2.792v6.979h-10.124c-1.103 0-1.995-.893-1.995-1.992v-16.016c0-1.1.892-1.992 1.995-1.992h15.997z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form Section */}
              <div className="lg:col-span-3 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-white mb-8">Send Us a Message</h3>
                
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-300 text-sm mb-2">Full Name*</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full bg-muted border border-violet-700/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-300 text-sm mb-2">Email Address*</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full bg-muted border border-violet-700/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-gray-300 text-sm mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          className="w-full bg-muted border border-violet-700/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-gray-300 text-sm mb-2">Company Name</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd."
                          className="w-full bg-muted border border-violet-700/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-gray-300 text-sm mb-2">Service Interested In*</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full bg-muted border border-violet-700/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="SEO Services">SEO Services</option>
                        <option value="Project Management">Project Management</option>
                        <option value="IT Consultation">IT Consultation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-300 text-sm mb-2">Your Message*</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your project or inquiry..."
                        className="w-full bg-muted border border-violet-700/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-end">
                      <button 
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="px-8 py-3 rounded-full bg-secondary text-white font-medium transition-all hover:bg-secondary/90 flex items-center"
                      >
                        {formStatus === 'submitting' ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
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
      </div>
    </section>
  );
}