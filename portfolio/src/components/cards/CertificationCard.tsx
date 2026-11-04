import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Award } from 'lucide-react';
import type { Certification } from '@/data/certifications';

export function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <Link href={`/certifications/${cert.slug}`} className="block group">
      <div className="h-full p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
        {cert.previewImage && (
          <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gray-100 dark:bg-gray-800">
            <Image src={cert.previewImage} alt={cert.name} width={400} height={225} className="w-full h-full object-cover" />
          </div>
        )}
        <p className="text-xs text-gray-400 dark:text-gray-500">{cert.issuer} · {cert.issuedDate}</p>
        <h3 className="mt-0.5 font-semibold text-gray-900 dark:text-white text-sm leading-snug group-hover:text-accent transition-colors">
          {cert.name}
        </h3>
        <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
          {cert.description}
        </p>
      </div>
    </Link>
  );
}

export function CertificationDetailView({ cert }: { cert: Certification }) {
  return (
    <div>
      <Link href="/certifications" className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8">
        <ArrowLeft size={14} /> Back to Certifications
      </Link>

      {cert.previewImage && (
        <div className="rounded-2xl overflow-hidden mb-8 bg-gray-100 dark:bg-gray-800">
          <Image src={cert.previewImage} alt={cert.name} width={1200} height={600} className="w-full object-cover" />
        </div>
      )}

      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <Award size={22} className="text-gray-600 dark:text-gray-400" />
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer} · {cert.issuedDate}</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{cert.name}</h1>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mb-6">{cert.description}</p>

      {(cert.credentialId || cert.credentialUrl) && (
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 inline-flex flex-col gap-2">
          {cert.credentialId && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="font-medium">Credential ID:</span> {cert.credentialId}
            </p>
          )}
          {cert.credentialUrl && (
            <Link href={cert.credentialUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline">
              <ExternalLink size={13} /> Verify Certificate
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
