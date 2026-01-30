import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from '../hooks/use-toast';
import { personalInfo } from '../data/mockData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 mb-8">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 dark:bg-blue-500/20">
                  <Mail className="text-blue-500" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-white mb-1">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {personalInfo.phone && personalInfo.phone !== '+91 XXXXX XXXXX' && (
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 dark:bg-blue-500/20">
                    <Phone className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white mb-1">Phone</p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 dark:bg-blue-500/20">
                  <MapPin className="text-blue-500" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-white mb-1">Location</p>
                  <p className="text-neutral-600 dark:text-neutral-400">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="font-semibold text-neutral-900 dark:text-white mb-4">Follow Me</p>
              <div className="flex space-x-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-neutral-950 rounded-xl p-8 border border-neutral-200 dark:border-neutral-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 focus:border-blue-500 dark:focus:border-blue-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 focus:border-blue-500 dark:focus:border-blue-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 focus:border-blue-500 dark:focus:border-blue-400"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 focus:border-blue-500 dark:focus:border-blue-400"
                  placeholder="Your message..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 text-base font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
