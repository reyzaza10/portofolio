import { GraduationCap, School } from 'lucide-react';
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/Motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { education } from '@/data/education';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader title="Education" subtitle="Riwayat pendidikan formal." />
        </FadeIn>

        <Stagger className="space-y-5">
          {education.map((edu) => (
            <StaggerItem key={edu.id}>
              <div className="flex gap-5 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  {edu.type === 'university' ? (
                    <GraduationCap size={20} className="text-gray-600 dark:text-gray-400" />
                  ) : (
                    <School size={20} className="text-gray-600 dark:text-gray-400" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{edu.institution}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                        {edu.degree ? `${edu.degree} · ` : ''}{edu.program}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap">
                      {edu.startYear} — {edu.isActive ? 'Present' : edu.endYear}
                    </span>
                  </div>
                  {edu.description && (
                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
