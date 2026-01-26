import React from 'react';
import { TimelineItem as TimelineItemType } from '@/types/timeline';

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
}

const typeColors = {
  work: 'bg-blue-500',
  education: 'bg-purple-500',
  project: 'bg-green-500',
  learning: 'bg-orange-500',
};

const typeIcons = {
  work: '💼',
  education: '🎓',
  project: '🚀',
  learning: '📚',
};

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const color = typeColors[item.type];
  const icon = typeIcons[item.type];
  const isEven = index % 2 === 0;
  
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    });
  };

  return (
    <div className={`timeline-item relative flex items-center ${
      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
    } flex-row`}>
      {/* Content */}
      <div className={`timeline-content flex-1 ml-16 md:ml-0 ${
        isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
      }`}>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          {/* Date */}
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {formatDate(item.startDate)} - {item.endDate ? formatDate(item.endDate) : 'Present'}
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          
          {/* Organization */}
          {item.organization && (
            <div className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-3">
              {item.organization}
              {item.location && ` • ${item.location}`}
            </div>
          )}
          
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {item.description}
          </p>
          
          {/* Skills */}
          {item.skills && item.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {item.skills.map((skill, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
          
          {/* Link */}
          {item.link && (
            <a 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Learn more →
            </a>
          )}
        </div>
      </div>
      
      {/* Center dot */}
      <div className={`timeline-dot absolute left-8 md:left-1/2 transform md:-translate-x-1/2 ${color} w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg z-10`}>
        {icon}
      </div>
    </div>
  );
};

export default TimelineItem;
