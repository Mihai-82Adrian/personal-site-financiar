'use client';

import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

interface Hobby {
  title: string;
  description: string;
  details?: string[];
  icon: string;
  logo?: string;
}

interface CVHobbiesProps {
  hobbies: Hobby[];
}

export default function CVHobbies({ hobbies }: CVHobbiesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hobbies.map((hobby, index) => (
        <Card key={index} variant="brutal" className="group hover:translate-y-[-4px] transition-transform duration-300">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{hobby.icon}</span>
                <CardTitle className="text-xl">{hobby.title}</CardTitle>
              </div>
              {hobby.logo && (
                <Image
                  src={hobby.logo}
                  alt={hobby.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              )}
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base mb-4">
              {hobby.description}
            </CardDescription>
            {hobby.details && (
              <ul className="space-y-2">
                {hobby.details.map((detail, i) => (
                  <li key={i} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}