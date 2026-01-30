import React, { useState, useCallback } from 'react';
import { ExternalLink, Github, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from './ui/button';
import { projects } from '../data/mockData';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.status.toLowerCase() === filter);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
            A showcase of my recent work and personal projects
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => setFilter('all')}
              variant={filter === 'all' ? 'default' : 'outline'}
              className={filter === 'all'
                ? 'bg-blue-500 hover:bg-blue-600 text-white'
                : 'border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300'}
            >
              All Projects
            </Button>
            <Button
              onClick={() => setFilter('completed')}
              variant={filter === 'completed' ? 'default' : 'outline'}
              className={filter === 'completed'
                ? 'bg-blue-500 hover:bg-blue-600 text-white'
                : 'border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300'}
            >
              Completed
            </Button>
            <Button
              onClick={() => setFilter('in progress')}
              variant={filter === 'in progress' ? 'default' : 'outline'}
              className={filter === 'in progress'
                ? 'bg-blue-500 hover:bg-blue-600 text-white'
                : 'border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300'}
            >
              In Progress
            </Button>
          </div>
        </div>

        {/* Projects Slider */}
        <div className="relative group px-4">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6 pb-4">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6"
                >
                  <div className="h-full group/card bg-neutral-50 dark:bg-neutral-900 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    {/* Project Image */}
                    <div className="aspect-video overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      {/* Status Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${project.status === 'Completed'
                            ? 'bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400'
                            : 'bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400'
                          }`}>
                          {project.status}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                        {project.title}
                      </h3>

                      <p className="text-neutral-700 dark:text-neutral-300 mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2 py-1 rounded bg-neutral-200 dark:bg-neutral-800 text-xs font-medium text-neutral-700 dark:text-neutral-300"
                          >
                            <Tag size={12} className="mr-1" />
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex space-x-4">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                          >
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-neutral-700 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium text-sm transition-colors"
                          >
                            <Github size={16} />
                            <span>Code</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 p-3 rounded-full bg-white dark:bg-neutral-800 shadow-lg border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 p-3 rounded-full bg-white dark:bg-neutral-800 shadow-lg border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Add More Projects CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-xl border-2 border-dashed border-neutral-300 dark:border-neutral-700">
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Want to see more projects?
            </p>
            <a
              href="https://github.com/Dhruvin-3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-semibold transition-colors"
            >
              <Github size={20} />
              <span>Visit My GitHub</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
