import { ArrowDownToLine } from 'lucide-react';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/Motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { profile } from '@/data/profile';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-surface-light dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title="About Me"
            subtitle="Kenali saya lebih jauh — latar belakang, minat, dan tujuan profesional saya."
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Photo */}
          <FadeIn delay={0.1} direction="right">
            <div className="lg:col-span-1">
              <div className="w-full aspect-square max-w-xs mx-auto rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <Image
                  src={profile.profileImage}
                  alt={`Photo of ${profile.name}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.2} className="lg:col-span-2">
            <div className="space-y-5">
              {profile.about.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-2">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">
                  Professional Goal
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{profile.goals}</p>
              </div>

              {profile.cvAvailable ? (
                <a
                  href={profile.cvPath}
                  download
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
                >
                  <ArrowDownToLine size={16} />
                  Download CV
                </a>
              ) : (
                <p className="mt-4 text-sm text-gray-400 dark:text-gray-500 italic">
                  CV akan segera tersedia.
                </p>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
