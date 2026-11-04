import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Github, CalendarDays } from 'lucide-react';
import type { Project } from '@/data/projects';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block group">
      <div className="h-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-gray-300 dark:hover:border-gray-700 transition-colors overflow-hidden">
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
        <div className="p-5">
          <p className="text-xs text-gray-400 dark:text-gray-500">{project.year}</p>
          <h3 className="mt-0.5 font-semibold text-gray-900 dark:text-white text-sm leading-snug group-hover:text-accent transition-colors">
            {project.name}
          </h3>
          <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech) => (
              <span key={tech} className="px-2 py-0.5 rounded-full text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export function ProjectDetailView({ project }: { project: Project }) {
  return (
    <div>
      <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8">
        <ArrowLeft size={14} /> Back to Projects
      </Link>

      {project.images && project.images.length > 0 && (
        <div className="rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-8">
          <Image
            src={project.images[0]}
            alt={project.name}
            width={1200}
            height={675}
            className="w-full object-cover"
          />
        </div>
      )}

      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            <CalendarDays size={13} className="inline mr-1" />{project.year}
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{project.name}</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">{project.shortDescription}</p>
        </div>
        <div className="flex gap-3">
          {project.githubUrl && (
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Github size={15} /> GitHub
            </Link>
          )}
          {project.demoUrl && (
            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors">
              <ExternalLink size={15} /> Live Demo
            </Link>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <section>
            <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Latar Belakang</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.background}</p>
          </section>
          <section>
            <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Tujuan</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.objectives}</p>
          </section>
          <section>
            <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Peran & Kontribusi</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.role}</p>
          </section>
        </div>
        <div>
          <div className="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
