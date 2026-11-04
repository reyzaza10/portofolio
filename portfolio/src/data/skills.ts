export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type SkillCategory = 'Technical Skills' | 'Tools & Technologies' | 'Soft Skills';

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  description?: string;
};

export const skills: Skill[] = [
  // Technical Skills
  {
    id: 'sql',
    name: 'SQL',
    category: 'Technical Skills',
    level: 'Intermediate',
    description: 'Menulis query untuk manipulasi dan analisis data relasional.',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Technical Skills',
    level: 'Beginner',
    description: 'Scripting dasar, manipulasi data dengan Pandas, dan visualisasi data.',
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis',
    category: 'Technical Skills',
    level: 'Beginner',
    description: 'Eksplorasi dan analisis dataset untuk menghasilkan insight.',
  },
  {
    id: 'database-design',
    name: 'Database Design',
    category: 'Technical Skills',
    level: 'Beginner',
    description: 'Merancang skema basis data relasional.',
  },
  // Tools & Technologies
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Tools & Technologies',
    level: 'Intermediate',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Tools & Technologies',
    level: 'Beginner',
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'Tools & Technologies',
    level: 'Beginner',
  },
  {
    id: 'excel',
    name: 'Microsoft Excel',
    category: 'Tools & Technologies',
    level: 'Intermediate',
  },
  // Soft Skills
  {
    id: 'critical-thinking',
    name: 'Critical Thinking',
    category: 'Soft Skills',
    level: 'Intermediate',
  },
  {
    id: 'communication',
    name: 'Communication',
    category: 'Soft Skills',
    level: 'Intermediate',
  },
  {
    id: 'teamwork',
    name: 'Teamwork',
    category: 'Soft Skills',
    level: 'Intermediate',
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    category: 'Soft Skills',
    level: 'Intermediate',
  },
];
