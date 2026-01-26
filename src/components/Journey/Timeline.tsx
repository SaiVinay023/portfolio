import React from 'react';
import TimelineItem from './TimelineItem';
import { TimelineItem as TimelineItemType } from '@/types/timeline';

interface TimelineProps {
  items: TimelineItemType[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  // Sort items by date (newest first)
  const sortedItems = [...items].sort((a, b) => 
    new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  return (
    <section className="journey-timeline py-16 px-4 md:px-8">
      <h2 className="text-4xl font-bold text-center mb-12">
        My Journey
      </h2>
      
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
