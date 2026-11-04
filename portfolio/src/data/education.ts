export type Education = {
  id: string;
  institution: string;
  program: string;
  degree: string;
  type: 'university' | 'highschool';
  startYear: number;
  endYear: number | null;
  isActive: boolean;
  description?: string;
};

export const education: Education[] = [
  {
    id: 'polindra-si',
    institution: 'Politeknik Negeri Indramayu',
    program: 'Sistem Informasi Kota Cerdas',
    degree: 'Sarjana Terapan (D4)',
    type: 'university',
    startYear: 2026,
    endYear: null,
    isActive: true,
    description:
      'Mempelajari sistem informasi berbasis Smart City, basis data, analitik data, jaringan komputer, dan pengembangan sistem digital.',
  },
  {
    id: 'smk-yadika',
    institution: 'SMK Yadika 13',
    program: 'Teknik Komputer dan Jaringan (TKJ)',
    degree: '',
    type: 'highschool',
    startYear: 2023,
    endYear: 2026,
    isActive: false,
    description:
      'Mempelajari jaringan komputer, administrasi sistem, perangkat keras, konfigurasi jaringan, dan troubleshooting. Aktif dalam kegiatan praktik laboratorium serta Bengkel TKJ.',
  },
];
