'use client';

import React from 'react';
import { Download } from 'lucide-react';

export type FilterType = 'all' | 'webdev';

interface TimelineFilterProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const TimelineFilter: React.FC<TimelineFilterProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex gap-4 justify-center mb-12 flex-wrap">
      <button 
        onClick={() => onFilterChange('all')}
        className={`px-6 py-3 rounded-lg font-semibold transition-all ${
          activeFilter === 'all'
            ? 'bg-blue-600 text-white shadow-lg scale-105'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
      >
        Complete Journey
      </button>
      
      <button 
        onClick={() => onFilterChange('webdev')}
        className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
          activeFilter === 'webdev'
            ? 'bg-green-600 text-white shadow-lg scale-105'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
      >
        <span>🎯</span>
        Web Development Only
      </button>
          <a
            href="/resume.pdf"
            download="SaiVinay_Manda_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </div>
  );
};

export default TimelineFilter;
