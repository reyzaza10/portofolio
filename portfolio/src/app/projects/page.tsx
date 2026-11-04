import type { Metadata } from 'next';
import { Stagger, StaggerItem } from '@/components/ui/Motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EmptyState } from '@/components/ui/EmptyState';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Proyek akademik dan personal Muhammad Reyza Ashidiqie.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Projects"
          subtitle="Semua proyek akademik dan personal."
        />

        {projects.length === 0 ? (
          <EmptyState
            title="Belum ada project yang ditambahkan"
            description="Project akan ditampilkan di sini."
          />
        ) : (
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </div>
    </div>
  );
}
