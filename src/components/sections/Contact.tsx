import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   
    if (form.current === null) {
        setSubmitError('Form reference is missing. Please try again.');
        setTimeout(() => setSubmitError(''), 5000);
        return;
    }

    setIsSubmitting(true);

    
   emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
   )
   .then((result) => {
    console.log(result.text);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: '',
      email: '',
      message: ''
    })
    setTimeout(() => setSubmitSuccess(false), 5000); 
   })
   .catch((error) => {
    console.error('Failed to sent email:', error.text);
    setIsSubmitting(false);
    setSubmitError('Failed to send message. Please try again.');
    setTimeout(() => setSubmitError(''), 5000);
   });
  };

  return (
    <section 
      id="contact" 
      className="relative py-20 overflow-hidden"
    >
      {/* Decorative Waves */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-secondary-700 opacity-90"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-white opacity-10 animate-wave-slow transform translate-y-16"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white opacity-5 animate-wave transform translate-y-12"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white opacity-5 animate-wave-slower transform translate-y-8"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-24 h-24 rounded-full bg-primary-400 opacity-20 animate-gentle-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-secondary-400 opacity-20 animate-gentle-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/6 w-16 h-16 rounded-full bg-primary-500 opacity-10 animate-gentle-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Let's Connect
        </h2>
        <p className="text-center text-primary-100 mb-12 max-w-lg mx-auto">
          Have a question or want to work together? Drop me a message and I'll get back to you as soon as possible.
        </p>
        
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-soft p-8 backdrop-blur-sm bg-opacity-95 transform hover:scale-[1.01] transition-all duration-300">
          {submitSuccess ? (
            <div className="bg-green-50 border-l-4 border-primary-400 text-primary-700 p-4 rounded-md mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">Message sent successfully! I'll be in touch soon.</p>
                </div>
              </div>
            </div>
          ) : submitError ? (
            <div className="bg-red-50 border-l-4 border-red-400 text-red-700 p-4 rounded-md mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">{submitError}</p>
                </div>
              </div>
            </div>
          ) : null}
          
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="group">
              <label htmlFor="name" className="block text-accent-700 mb-2 font-medium group-focus-within:text-primary-600 transition-colors">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                placeholder="Your name"
              />
            </div>
            
            <div className="group">
              <label htmlFor="email" className="block text-accent-700 mb-2 font-medium group-focus-within:text-primary-600 transition-colors">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="group">
              <label htmlFor="message" className="block text-accent-700 mb-2 font-medium group-focus-within:text-primary-600 transition-colors">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                placeholder="Your message here..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transform hover:-translate-y-1 shadow-soft"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
          
          <div className="mt-10 pt-6 border-t border-neutral-200">
            <p className="text-center text-accent-600 mb-6 font-medium">Or connect with me directly</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:your-email@example.com" 
                className="flex items-center bg-primary-50 hover:bg-primary-100 px-4 py-2 rounded-lg text-primary-600 hover:text-primary-800 transition-colors w-full sm:w-auto justify-center group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hudnell.marcus@gmail.com
              </a>
              <a 
                href="tel:+15613896421" 
                className="flex items-center bg-secondary-50 hover:bg-secondary-100 px-4 py-2 rounded-lg text-secondary-600 hover:text-secondary-800 transition-colors w-full sm:w-auto justify-center group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (561) 389-6421
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;