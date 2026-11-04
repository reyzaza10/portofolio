'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowDownToLine, Mail, Github, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 font-medium">
              {profile.headline}
            </p>
            <p className="mt-5 text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
              {profile.shortBio}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              {profile.cvAvailable ? (
                <a
                  href={profile.cvPath}
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
                >
                  <ArrowDownToLine size={16} />
                  Download CV
                </a>
              ) : (
                <button
                  disabled
                  title="CV belum tersedia"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600 text-sm font-medium cursor-not-allowed"
                >
                  <ArrowDownToLine size={16} />
                  Download CV
                </button>
              )}
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-gray-500 dark:hover:border-gray-500 transition-colors"
              >
                <Mail size={16} />
                Contact Me
              </Link>
            </div>

            {/* Social links */}
            <div className="mt-7 flex items-center gap-4">
              <Link href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Github size={20} />
              </Link>
              <Link href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href={profile.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href={`mailto:${profile.email}`} aria-label="Email" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Mail size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <Image
                  src={profile.profileImage}
                  alt={`Photo of ${profile.name}`}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                  onError={() => {}}
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl border border-gray-200 dark:border-gray-700" />
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-20 flex items-center gap-2 text-gray-400 text-sm"
        >
          <ArrowRight size={14} className="rotate-90" />
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
