import Link from 'next/link';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { FadeIn } from '@/components/ui/Motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { profile } from '@/data/profile';

const contactLinks = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    description: 'Kirim pesan langsung',
  },
  {
    label: 'LinkedIn',
    value: 'muhammadreyza',
    href: profile.linkedin,
    icon: Linkedin,
    description: 'Terhubung secara profesional',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'muhammadreyza',
    href: profile.github,
    icon: Github,
    description: 'Lihat repository',
    external: true,
  },
  {
    label: 'Instagram',
    value: '@muhammadreyza',
    href: profile.instagram,
    icon: Instagram,
    description: 'Follow di Instagram',
    external: true,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title="Contact"
            subtitle="Hubungi saya melalui salah satu kanal berikut."
            align="center"
          />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
          {contactLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.label} delay={i * 0.08}>
                <Link
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700 transition-colors text-center group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                    <Icon size={20} className="text-gray-600 dark:text-gray-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">{item.label}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.description}</p>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
