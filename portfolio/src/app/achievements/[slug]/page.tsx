import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { achievements } from '@/data/achievements';
import { AchievementDetailView } from '@/components/cards/AchievementCard';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return achievements.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const achievement = achievements.find((a) => a.slug === params.slug);
  if (!achievement) return { title: 'Not Found' };
  return {
    title: achievement.title,
    description: achievement.description,
  };
}

export default function AchievementDetailPage({ params }: Props) {
  const achievement = achievements.find((a) => a.slug === params.slug);
  if (!achievement) notFound();

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AchievementDetailView achievement={achievement} />
      </div>
    </div>
  );
}
