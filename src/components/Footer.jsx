import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
              {personalInfo.fullName.split(' ')[0]}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              {personalInfo.title}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-500">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">Connect</h4>
            <div className="space-y-3 mb-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">Email Me</span>
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              © {currentYear} All rights reserved.
            </p>
            <p className="flex items-center space-x-1 text-sm text-neutral-600 dark:text-neutral-400">
              <span>Built with</span>
              <Heart size={16} className="text-red-500" fill="currentColor" />
              <span>using React & Next.js</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
