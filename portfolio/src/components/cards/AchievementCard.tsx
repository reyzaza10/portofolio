import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import type { Achievement } from '@/data/achievements';

export function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <Link href={`/achievements/${achievement.slug}`} className="block group">
      <div className="h-full p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
        <div className="flex items-start gap-2 mb-2">
          <Badge label={achievement.category} />
          <span className="text-xs text-gray-400 dark:text-gray-500">{achievement.year}</span>
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-white text-sm leading-snug group-hover:text-accent transition-colors">
          {achievement.title}
        </h3>
        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{achievement.organizer}</p>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
          {achievement.description}
        </p>
      </div>
    </Link>
  );
}

export function AchievementDetailView({ achievement }: { achievement: Achievement }) {
  return (
    <div>
      <Link href="/achievements" className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8">
        <ArrowLeft size={14} /> Back to Achievements
      </Link>

      {achievement.image && (
        <div className="rounded-2xl overflow-hidden mb-8 bg-gray-100 dark:bg-gray-800">
          <Image src={achievement.image} alt={achievement.title} width={1200} height={600} className="w-full object-cover" />
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        <Badge label={achievement.category} />
        <Badge label={String(achievement.year)} variant="info" />
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">{achievement.title}</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">{achievement.organizer}</p>

      <div className="space-y-4 max-w-3xl">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{achievement.description}</p>
        {achievement.details && (
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{achievement.details}</p>
        )}
      </div>
    </div>
  );
}
