// src/datatypes/timeline.d.ts

export type Category = 'financial' | 'games' | 'corporate' | 'strategic' | 'media' | 'legal';
export type EventType = 'positive' | 'negative' | 'mixed' | 'neutral';

export interface TimelineEvent {
    category: Category;
    type: EventType;
    date: string;
    title: string;
    summary: string;
}

export interface YearData {
    year: string;
    events: TimelineEvent[];
}

export interface FinancialData {
    year: number;
    revenue: string;
    stock: string;
    debt: string;
}

export interface Risk {
    level: 'high' | 'medium' | 'low';
    title: string;
    description: string;
}