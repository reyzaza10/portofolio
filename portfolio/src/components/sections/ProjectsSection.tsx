import Link from 'next/link';
import Image from 'next/image';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/Motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EmptyState } from '@/components/ui/EmptyState';
import { projects } from '@/data/projects';

export default function ProjectsSection({ featured = false }: { featured?: boolean }) {
  const list = featured ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="projects" className="py-20 bg-surface-light dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-end justify-between mb-10">
            <SectionHeader
              title={featured ? 'Featured Projects' : 'Projects'}
              subtitle="Proyek akademik dan personal yang pernah dikerjakan."
            />
            {featured && projects.length > 0 && (
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline mb-10"
              >
                View all <ArrowRight size={14} />
              </Link>
            )}
          </div>
        </FadeIn>

        {list.length === 0 ? (
          <FadeIn>
            <EmptyState
              title="Belum ada project yang ditambahkan"
              description="Project akan ditampilkan di sini."
            />
          </FadeIn>
        ) : (
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {list.map((project) => (
              <StaggerItem key={project.id}>
                <Link href={`/projects/${project.slug}`} className="block group">
                  <div className="h-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-gray-300 dark:hover:border-gray-700 transition-colors overflow-hidden">
                    {/* Image */}
                    {project.images && project.images.length > 0 ? (
                      <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <Image
                          src={project.images[0]}
                          alt={project.name}
                          width={400}
                          height={225}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
                        <span className="text-gray-300 dark:text-gray-600 text-xs">No preview</span>
                      </div>
                    )}
                    {/* Content */}
                    <div className="p-5">
                      <p className="text-xs text-gray-400 dark:text-gray-500">{project.year}</p>
                      <h3 className="mt-0.5 font-semibold text-gray-900 dark:text-white text-sm leading-snug group-hover:text-accent transition-colors">
                        {project.name}
                      </h3>
                      <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                        {project.shortDescription}
                      </p>
                      {/* Tech stack */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-full text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-2 py-0.5 rounded-full text-xs bg-gray-100 dark:bg-gray-800 text-gray-400">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>
                      {/* Links */}
                      <div className="mt-3 flex gap-3">
                        {project.githubUrl && (
                          <span className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <Github size={12} /> GitHub
                          </span>
                        )}
                        {project.demoUrl && (
                          <span className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <ExternalLink size={12} /> Demo
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </div>
    </section>
  );
}
