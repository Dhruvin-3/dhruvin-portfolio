import React from 'react';
import { Code2, Briefcase, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const About = () => {
  const stats = [
    { icon: Briefcase, label: 'Years Experience', value: '2+' },
    { icon: Code2, label: 'Technologies', value: '10+' },
    { icon: GraduationCap, label: 'Degrees', value: 'MCA' }
  ];

  return (
    <section id="about" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 flex items-center justify-center border border-neutral-200 dark:border-neutral-800">
              <div className="text-center">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center border-4 border-blue-500/30">
                  <Code2 size={80} className="text-blue-500" />
                </div>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">{personalInfo.fullName}</p>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-2">{personalInfo.title}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 mb-3">
                      <Icon size={24} className="text-blue-500" />
                    </div>
                    <div className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
