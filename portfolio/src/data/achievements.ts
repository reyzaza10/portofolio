export type Achievement = {
  id: string;
  slug: string;
  title: string;
  organizer: string;
  category: string;
  year: number;
  description: string;
  details?: string;
  image?: string;
  featured?: boolean;
};

export const achievements: Achievement[] = [
  // Tambahkan pencapaian di sini
  // Contoh:
  // {
  //   id: 'achievement-1',
  //   slug: 'juara-1-lomba-data',
  //   title: 'Juara 1 Kompetisi Data Analytics',
  //   organizer: 'Nama Penyelenggara',
  //   category: 'Kompetisi',
  //   year: 2024,
  //   description: 'Deskripsi singkat pencapaian.',
  //   details: 'Penjelasan detail pencapaian.',
  //   image: '/images/achievements/achievement-1.jpg',
  //   featured: true,
  // },
];
