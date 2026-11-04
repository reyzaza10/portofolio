import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { certifications } from '@/data/certifications';
import { CertificationDetailView } from '@/components/cards/CertificationCard';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return certifications.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cert = certifications.find((c) => c.slug === slug);
  if (!cert) return { title: 'Not Found' };
  return {
    title: cert.name,
    description: cert.description,
  };
}

export default async function CertificationDetailPage({ params }: Props) {
  const { slug } = await params;
  const cert = certifications.find((c) => c.slug === slug);
  if (!cert) notFound();

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <CertificationDetailView cert={cert} />
      </div>
    </div>
  );
}
