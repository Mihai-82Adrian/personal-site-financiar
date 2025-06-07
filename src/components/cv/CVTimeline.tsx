'use client';

import { useState } from 'react';
import Image from 'next/image';
import { WorkExperience, Education } from '@/data/cv-data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

type TimelineItem = WorkExperience | Education;

interface CVTimelineProps {
  items: TimelineItem[];
  type: 'work' | 'education';
}

export default function CVTimeline({ items, type }: CVTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const isExpanded = (id: string) => expandedItems.includes(id);

  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />
      
      <div className="space-y-8">
        {items.map((item, index) => {
          const isWork = 'position' in item;
          const title = isWork ? item.position : item.degree;
          const subtitle = isWork ? item.company : item.institution;
          const logo = theme === 'dark' && item.darkLogo ? item.darkLogo : item.logo;
          
          return (
            <div key={item.id} className="relative flex gap-6">
              <div className="relative z-10">
                <div className={cn(
                  "w-16 h-16 rounded-full border-4 bg-background flex items-center justify-center overflow-hidden",
                  item.current ? "border-success animate-pulse" : "border-primary"
                )}>
                  {logo ? (
                    <Image
                      src={logo}
                      alt={subtitle}
                      width={48}
                      height={48}
                      className="object-contain p-1"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-primary">
                      {index + 1}
                    </span>
                  )}
                </div>
              </div>

              <Card 
                className={cn(
                  "flex-1 cursor-pointer transition-all duration-300",
                  "hover:shadow-lg hover:scale-[1.02]",
                  item.current && "border-success/50 bg-success/5"
                )}
                onClick={() => toggleExpanded(item.id)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-xl">{title}</CardTitle>
                      <CardDescription className="text-lg mt-1">
                        {subtitle} • {item.location}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <span className={cn(
                        "text-sm font-semibold px-3 py-1 rounded-full",
                        item.current 
                          ? "bg-success/20 text-success" 
                          : "bg-muted/20 text-muted"
                      )}>
                        {item.period}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className={cn(
                    "space-y-2 overflow-hidden transition-all duration-300",
                    isExpanded(item.id) ? "max-h-[500px]" : "max-h-20"
                  )}>
                    {item.description.map((desc, i) => (
                      <p key={i} className="text-sm text-muted leading-relaxed">
                        {desc.startsWith('-') ? desc : `• ${desc}`}
                      </p>
                    ))}
                  </div>
                  
                  <button
                    className="mt-4 text-sm text-primary hover:text-accent transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpanded(item.id);
                    }}
                  >
                    {isExpanded(item.id) ? 'Weniger anzeigen ↑' : 'Mehr anzeigen ↓'}
                  </button>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}