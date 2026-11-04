import type { Metadata } from 'next';
import { Stagger, StaggerItem } from '@/components/ui/Motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EmptyState } from '@/components/ui/EmptyState';
import { CertificationCard } from '@/components/cards/CertificationCard';
import { certifications } from '@/data/certifications';

export const metadata: Metadata = {
  title: 'Certifications',
  description: 'Sertifikasi profesional Muhammad Reyza Ashidiqie.',
};

export default function CertificationsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Certifications"
          subtitle="Semua sertifikasi yang telah diperoleh."
        />

        {certifications.length === 0 ? (
          <EmptyState
            title="Belum ada sertifikasi yang ditambahkan"
            description="Sertifikasi akan ditampilkan di sini."
          />
        ) : (
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert) => (
              <StaggerItem key={cert.id}>
                <CertificationCard cert={cert} />
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </div>
    </div>
  );
}
