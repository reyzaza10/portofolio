import Link from 'next/link';
import { Award, ExternalLink, ArrowRight } from 'lucide-react';
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/Motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EmptyState } from '@/components/ui/EmptyState';
import { certifications } from '@/data/certifications';

export default function CertificationsSection({ featured = false }: { featured?: boolean }) {
  const list = featured ? certifications.filter((c) => c.featured) : certifications;

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-end justify-between mb-10">
            <SectionHeader
              title={featured ? 'Featured Certifications' : 'Certifications'}
              subtitle="Sertifikasi profesional yang telah diperoleh."
            />
            {featured && certifications.length > 0 && (
              <Link
                href="/certifications"
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
              title="Belum ada sertifikasi yang ditambahkan"
              description="Sertifikasi akan ditampilkan di sini."
            />
          </FadeIn>
        ) : (
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {list.map((cert) => (
              <StaggerItem key={cert.id}>
                <Link href={`/certifications/${cert.slug}`} className="block group">
                  <div className="h-full p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <Award size={16} className="text-gray-600 dark:text-gray-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-gray-400 dark:text-gray-500">{cert.issuer} · {cert.issuedDate}</p>
                        <h3 className="mt-0.5 font-semibold text-gray-900 dark:text-white text-sm leading-snug group-hover:text-accent transition-colors">
                          {cert.name}
                        </h3>
                        {cert.credentialUrl && (
                          <span className="inline-flex items-center gap-1 mt-1 text-xs text-accent">
                            <ExternalLink size={10} /> Verify
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                      {cert.description}
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
