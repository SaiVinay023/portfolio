// types/timeline.ts
export type TimelineItemType = 'education' | 'work' | 'project' | 'learning';

export interface TimelineItem {
  id: string;
  type: TimelineItemType;
  title: string;
  organization?: string;
  location?: string;
  startDate: string;
  endDate?: string; // undefined means "Present"
  description: string;
  skills?: string[];
  link?: string;
  icon?: string;
}
