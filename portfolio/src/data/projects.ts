export type Project = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  background: string;
  objectives: string;
  techStack: string[];
  role: string;
  year: number;
  images?: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  // Tambahkan project di sini
  // Contoh:
  // {
  //   id: 'project-1',
  //   slug: 'analisis-data-penjualan',
  //   name: 'Analisis Data Penjualan',
  //   shortDescription: 'Analisis dataset penjualan untuk menemukan pola dan insight.',
  //   background: 'Latar belakang masalah yang melatarbelakangi project.',
  //   objectives: 'Tujuan yang ingin dicapai melalui project ini.',
  //   techStack: ['Python', 'Pandas', 'Matplotlib'],
  //   role: 'Data Analyst',
  //   year: 2024,
  //   images: ['/images/projects/project-1.jpg'],
  //   githubUrl: 'https://github.com/muhammadreyza/project-1',
  //   featured: true,
  // },
];
