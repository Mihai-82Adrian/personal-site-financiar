'use client';

import { PersonalInfo } from '@/data/cv-data';
import Image from 'next/image';
import Link from 'next/link';

interface CVHeaderProps {
  personalInfo: PersonalInfo;
}

export default function CVHeader({ personalInfo }: CVHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent/80 text-white">
      <div className="absolute inset-0 bg-[url('/images/background/CFO.webp')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300" />
            <Image
              src="/images/profile/me.webp"
              alt={personalInfo.name}
              width={200}
              height={200}
              className="relative rounded-full border-4 border-white shadow-2xl"
              priority
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-2">{personalInfo.name}</h1>
            <p className="text-2xl mb-6 text-secondary">{personalInfo.title}</p>
            
            <div className="space-y-2 mb-6">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-lg">📞</span>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-secondary transition-colors">
                  {personalInfo.phone}
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-lg">✉️</span>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-secondary transition-colors">
                  {personalInfo.email}
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-lg">📍</span>
                {personalInfo.address}
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <Link
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href={personalInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
              >
                Facebook
              </Link>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                Instagram: {personalInfo.social.instagram.join(', ')}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Über mich</h2>
          <p className="text-lg leading-relaxed text-white/90">
            {personalInfo.about}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </header>
  );
}