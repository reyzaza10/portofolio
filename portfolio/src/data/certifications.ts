export type Certification = {
  id: string;
  slug: string;
  name: string;
  issuer: string;
  issuedDate: string;
  credentialId?: string;
  credentialUrl?: string;
  previewImage?: string;
  description: string;
  featured?: boolean;
};

export const certifications: Certification[] = [
  // Tambahkan sertifikasi di sini
  // Contoh:
  // {
  //   id: 'cert-1',
  //   slug: 'google-data-analytics',
  //   name: 'Google Data Analytics Certificate',
  //   issuer: 'Google',
  //   issuedDate: '2024-01',
  //   credentialId: 'XXXXX',
  //   credentialUrl: 'https://coursera.org/verify/XXXXX',
  //   previewImage: '/certificates/google-data-analytics.jpg',
  //   description: 'Sertifikasi dalam bidang analitik data dari Google.',
  //   featured: true,
  // },
];
