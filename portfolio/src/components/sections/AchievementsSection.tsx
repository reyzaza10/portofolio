import Link from 'next/link';
import { Trophy, ArrowRight } from 'lucide-react';
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/Motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EmptyState } from '@/components/ui/EmptyState';
import { achievements } from '@/data/achievements';

export default function AchievementsSection({ featured = false }: { featured?: boolean }) {
  const list = featured ? achievements.filter((a) => a.featured) : achievements;

  return (
    <section id="achievements" className="py-20 bg-surface-light dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-end justify-between mb-10">
            <SectionHeader
              title={featured ? 'Featured Achievements' : 'Achievements'}
              subtitle="Pencapaian dan penghargaan yang pernah diraih."
            />
            {featured && achievements.length > 0 && (
              <Link
                href="/achievements"
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
              title="Belum ada pencapaian yang ditambahkan"
              description="Pencapaian akan ditampilkan di sini."
            />
          </FadeIn>
        ) : (
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {list.map((achievement) => (
              <StaggerItem key={achievement.id}>
                <Link href={`/achievements/${achievement.slug}`} className="block group">
                  <div className="h-full p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <Trophy size={16} className="text-gray-600 dark:text-gray-400" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-gray-400 dark:text-gray-500">{achievement.category} · {achievement.year}</p>
                        <h3 className="mt-0.5 font-semibold text-gray-900 dark:text-white text-sm leading-snug group-hover:text-accent transition-colors">
                          {achievement.title}
                        </h3>
                        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{achievement.organizer}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                      {achievement.description}
                    </p>
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
