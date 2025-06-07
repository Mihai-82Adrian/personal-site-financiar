'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { WorkExperience, Education } from '@/data/cv-data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import MotionWrapper from '@/components/animations/MotionWrapper';
import { timelinePresets } from '@/lib/animations';

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
    <motion.div 
      className="relative"
      variants={timelinePresets.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Animated Timeline Line */}
      <motion.div 
        className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary"
        initial={{ scaleY: 0, originY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
      
      <div className="space-y-8">
        {items.map((item, index) => {
          const isWork = 'position' in item;
          const title = isWork ? item.position : item.degree;
          const subtitle = isWork ? item.company : item.institution;
          const logo = theme === 'dark' && item.darkLogo ? item.darkLogo : item.logo;
          
          return (
            <motion.div 
              key={item.id} 
              className="relative flex gap-6"
              variants={timelinePresets.item}
              custom={index}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated Logo Circle */}
              <div className="relative z-10">
                <motion.div 
                  className={cn(
                    "w-16 h-16 rounded-full border-4 bg-background flex items-center justify-center overflow-hidden",
                    item.current ? "border-success" : "border-primary"
                  )}
                  variants={timelinePresets.logo}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={item.current ? { 
                    boxShadow: ["0 0 0 0 rgba(34, 197, 94, 0.4)", "0 0 0 20px rgba(34, 197, 94, 0)"],
                    transition: { duration: 2, repeat: Infinity }
                  } : {}}
                >
                  {logo ? (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Image
                        src={logo}
                        alt={subtitle}
                        width={48}
                        height={48}
                        className="object-contain p-1"
                      />
                    </motion.div>
                  ) : (
                    <span className="text-2xl font-bold text-primary">
                      {index + 1}
                    </span>
                  )}
                </motion.div>
              </div>

              {/* Animated Card */}
              <motion.div 
                className="flex-1"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                whileTap={{ scale: 0.98 }}
                layout
              >
                <Card 
                  className={cn(
                    "cursor-pointer transition-all duration-300",
                    item.current && "border-success/50 bg-success/5"
                  )}
                  onClick={() => toggleExpanded(item.id)}
                >
                  <CardHeader>
                    <motion.div 
                      className="flex justify-between items-start flex-wrap gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div>
                        <CardTitle className="text-xl">{title}</CardTitle>
                        <CardDescription className="text-lg mt-1">
                          {subtitle} • {item.location}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <motion.span 
                          className={cn(
                            "text-sm font-semibold px-3 py-1 rounded-full",
                            item.current 
                              ? "bg-success/20 text-success" 
                              : "bg-muted/20 text-muted"
                          )}
                          whileHover={{ scale: 1.05 }}
                          animate={item.current ? { 
                            backgroundColor: ["rgba(34, 197, 94, 0.2)", "rgba(34, 197, 94, 0.3)", "rgba(34, 197, 94, 0.2)"],
                            transition: { duration: 2, repeat: Infinity }
                          } : {}}
                        >
                          {item.period}
                        </motion.span>
                      </div>
                    </motion.div>
                  </CardHeader>

                  <CardContent>
                    <AnimatePresence mode="wait">
                      <motion.div 
                        className="space-y-2 overflow-hidden"
                        animate={{ 
                          height: isExpanded(item.id) ? "auto" : "80px",
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {item.description.map((desc, i) => (
                          <motion.p 
                            key={i} 
                            className="text-sm text-muted leading-relaxed"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            {desc.startsWith('-') ? desc : `• ${desc}`}
                          </motion.p>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                    
                    <motion.button
                      className="mt-4 text-sm text-primary hover:text-accent transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpanded(item.id);
                      }}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isExpanded(item.id) ? 'Weniger anzeigen ↑' : 'Mehr anzeigen ↓'}
                    </motion.button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}