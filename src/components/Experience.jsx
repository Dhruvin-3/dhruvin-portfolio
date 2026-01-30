import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { experience } from '../data/mockData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            My professional journey in web development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-800 hidden md:block"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-neutral-900 hidden md:block"></div>

                {/* Content Card */}
                <div className="md:ml-20">
                  <div className="bg-white dark:bg-neutral-950 rounded-xl p-8 border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                          {exp.role}
                        </h3>
                        <div className="flex items-center space-x-2 text-blue-500 dark:text-blue-400 font-semibold mb-2">
                          <Briefcase size={18} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      {exp.current && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium w-fit">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-neutral-600 dark:text-neutral-400">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-neutral-700 dark:text-neutral-300">
                            <span className="text-blue-500 mt-1.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
