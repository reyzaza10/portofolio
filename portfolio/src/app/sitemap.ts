import type { MetadataRoute } from 'next';
import { achievements } from '@/data/achievements';
import { certifications } from '@/data/certifications';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://muhammadreyza.vercel.app';

  const staticRoutes = ['/', '/achievements', '/certifications', '/projects'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : 0.8,
  }));

  const achievementRoutes = achievements.map((a) => ({
    url: `${base}/achievements/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const certificationRoutes = certifications.map((c) => ({
    url: `${base}/certifications/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...achievementRoutes, ...certificationRoutes, ...projectRoutes];
}
