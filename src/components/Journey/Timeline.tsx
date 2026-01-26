'use client';

import React, { useState } from 'react';
import TimelineItem from './TimelineItem';
import TimelineFilter, { FilterType } from './TimelineFilter';
import { TimelineItem as TimelineItemType } from '@/types/timeline';

interface TimelineProps {
  items: TimelineItemType[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const [filter, setFilter] = useState<FilterType>('all');
  
  // Filter logic for web development roles
  const filteredItems = filter === 'webdev' 
    ? items.filter(item => {
        // Include work experiences with web dev skills
        if (item.type === 'work' || item.type === 'learning') {
          const webSkills = ['React', 'Node.js', 'TypeScript', 'Next.js', 'NestJS', 'JavaScript', 'Express'];
          return item.skills?.some(skill => webSkills.includes(skill));
        }
        return false;
      })
    : items;

  // Sort items by date (newest first)
  const sortedItems = [...filteredItems].sort((a, b) => 
    new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  return (
    <section className="journey-timeline py-16 px-4 md:px-8">
      <h2 className="text-4xl font-bold text-center mb-12">
        My Journey
      </h2>
      
      {/* Filter */}
      <TimelineFilter activeFilter={filter} onFilterChange={setFilter} />
      
      <div className="timeline-container max-w-4xl mx-auto relative">
        {/* Vertical line */}
        <div className="timeline-line absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 transform md:-translate-x-1/2" />
        
        {/* Timeline items */}
        <div className="timeline-items space-y-12">
          {sortedItems.map((item, index) => (
            <TimelineItem 
              key={item.id} 
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
