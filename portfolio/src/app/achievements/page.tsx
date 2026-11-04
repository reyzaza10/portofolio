import type { Metadata } from 'next';
import { Stagger, StaggerItem } from '@/components/ui/Motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EmptyState } from '@/components/ui/EmptyState';
import { AchievementCard } from '@/components/cards/AchievementCard';
import { achievements } from '@/data/achievements';

export const metadata: Metadata = {
  title: 'Achievements',
  description: 'Pencapaian dan penghargaan Muhammad Reyza Ashidiqie.',
};

export default function AchievementsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Achievements"
          subtitle="Semua pencapaian dan penghargaan yang pernah diraih."
        />

        {achievements.length === 0 ? (
          <EmptyState
            title="Belum ada pencapaian yang ditambahkan"
            description="Pencapaian akan ditampilkan di sini."
          />
        ) : (
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievements.map((a) => (
              <StaggerItem key={a.id}>
                <AchievementCard achievement={a} />
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </div>
    </div>
  );
}
