import { Briefcase, Users, CalendarDays } from 'lucide-react';
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/Motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EmptyState } from '@/components/ui/EmptyState';
import { Badge } from '@/components/ui/Badge';
import { experience, type ExperienceType } from '@/data/experience';

const typeConfig: Record<ExperienceType, { label: string; variant: 'default' | 'info' | 'success' | 'warning' }> = {
  Work: { label: 'Full-time', variant: 'success' },
  Internship: { label: 'Internship', variant: 'info' },
  Freelance: { label: 'Freelance', variant: 'warning' },
  Organization: { label: 'Organization', variant: 'default' },
  Committee: { label: 'Committee', variant: 'default' },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader title="Experience" subtitle="Pengalaman kerja, organisasi, dan kepanitiaan." />
        </FadeIn>

        {experience.length === 0 ? (
          <FadeIn>
            <EmptyState
              title="Belum ada pengalaman yang ditambahkan"
              description="Pengalaman akan ditampilkan di sini."
            />
          </FadeIn>
        ) : (
          <Stagger className="relative space-y-0">
            {experience.map((exp, idx) => (
              <StaggerItem key={exp.id}>
                <div className="relative flex gap-5">
                  {/* Timeline line */}
                  {idx < experience.length - 1 && (
                    <div className="absolute left-5 top-12 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
                  )}
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mt-1">
                    {exp.type === 'Work' || exp.type === 'Internship' ? (
                      <Briefcase size={16} className="text-gray-600 dark:text-gray-400" />
                    ) : (
                      <Users size={16} className="text-gray-600 dark:text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{exp.position}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{exp.organization}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge label={typeConfig[exp.type].label} variant={typeConfig[exp.type].variant} />
                        <span className="inline-flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
                          <CalendarDays size={12} />
                          {exp.startDate} — {exp.isActive ? 'Present' : exp.endDate}
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{exp.description}</p>
                    {exp.contributions && exp.contributions.length > 0 && (
                      <ul className="mt-2 space-y-1">
                        {exp.contributions.map((c, i) => (
                          <li key={i} className="text-sm text-gray-500 dark:text-gray-400 flex gap-2">
                            <span className="text-gray-300 dark:text-gray-600">·</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </div>
    </section>
  );
}
