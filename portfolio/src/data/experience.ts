export type ExperienceType = 'Work' | 'Internship' | 'Freelance' | 'Organization' | 'Committee';

export type Experience = {
  id: string;
  type: ExperienceType;
  position: string;
  organization: string;
  startDate: string;
  endDate: string | null;
  isActive: boolean;
  description: string;
  contributions?: string[];
};

export const experience: Experience[] = [
  // Tambahkan pengalaman di sini
  // Contoh:
  // {
  //   id: 'exp-1',
  //   type: 'Organization',
  //   position: 'Anggota Divisi Teknologi',
  //   organization: 'Nama Organisasi',
  //   startDate: '2023-09',
  //   endDate: null,
  //   isActive: true,
  //   description: 'Deskripsi tanggung jawab dan peran dalam organisasi.',
  //   contributions: ['Kontribusi 1', 'Kontribusi 2'],
  // },
];
