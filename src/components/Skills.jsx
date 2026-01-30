import React from 'react';
import * as LucideIcons from 'lucide-react';
import { skills } from '../data/mockData';

const Skills = () => {
  const skillCategories = [
    { title: 'Frontend', skills: skills.frontend },
    { title: 'Backend', skills: skills.backend },
    { title: 'Tools', skills: skills.tools },
    { title: 'Platforms', skills: skills.platforms }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = LucideIcons[skill.icon] || LucideIcons.Code2;
                  return (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-3 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:scale-105"
                    >
                      <IconComponent size={24} className="text-neutral-700 dark:text-neutral-300" />
                      <span className="font-medium text-neutral-900 dark:text-white">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
