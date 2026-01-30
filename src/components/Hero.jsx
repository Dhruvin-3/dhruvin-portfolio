import React from 'react';
import { ArrowRight, Download, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mockData';

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a link and trigger download
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = `${personalInfo.fullName}_Resume.pdf`;
    link.click();
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${personalInfo.email}`;
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950 pt-16">
      <div className="max-w-8xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Status Badge */}
          {/* {personalInfo.available && (
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-green-500/10 dark:bg-green-500/10 border border-green-500/20 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">Available for opportunities</span>
            </div>
          )} */}

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="text-blue-500 dark:text-blue-400">
              {personalInfo.fullName.split(' ')[0]}
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-700 dark:text-neutral-300 mb-6">
            {personalInfo.title}
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              onClick={handleDownloadResume}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-base font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
            <Button
              onClick={handleEmailClick}
              variant="outline"
              className="border-2 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 px-8 py-6 text-base font-medium rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2" size={20} />
              Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
