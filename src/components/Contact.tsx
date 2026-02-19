"use client"


import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formsubmit.co/ajax/devanshbansal500@gmail.com", {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again later.");
      }

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Let's Connect
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello,
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  value: 'devanshbansal500@gmail.com',
                  href: 'mailto:devanshbansal500@gmail.com'
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  value: '+91 9258039923',
                  href: 'tel:+919258039923'
                },
                {
                  icon: MapPin,
                  title: 'Location',
                  value: 'New Delhi, India',
                  href: '#'
                }
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md dark:shadow-slate-900/50 transition-all duration-300 hover:scale-105 border border-transparent dark:border-slate-700"
                  >
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg">
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm dark:shadow-slate-900/50 border border-transparent dark:border-slate-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>

            {isSuccess && (
              <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-lg flex items-center gap-2">
                <CheckCircle2 size={20} />
                <p>Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg">
                <p>{error}</p>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Hidden inputs for FormSubmit configuration */}
              <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="true" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  required
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="text-center pt-16 border-t border-gray-200 dark:border-gray-800 mt-16">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 DEVANSH BANSAL.
            Built with Next.js, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
