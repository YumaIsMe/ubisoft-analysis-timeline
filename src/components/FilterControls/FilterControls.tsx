// src/components/FilterControls/FilterControls.tsx
import React from 'react';
import styles from './FilterControls.module.scss';
import type {Category} from '../../Types/timeline';

interface FilterControlsProps {
    activeFilter: Category | 'all';
    onFilterChange: (filter: Category | 'all') => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({ activeFilter, onFilterChange }) => {
    const filters: { label: string; value: Category | 'all' }[] = [
        { label: 'All Events', value: 'all' },
        { label: 'Financial', value: 'financial' },
        { label: 'Game Releases', value: 'games' },
        { label: 'Corporate Issues', value: 'corporate' },
        { label: 'Strategic Moves', value: 'strategic' },
        { label: 'Media Expansion', value: 'media' },
        { label: 'Legal Challenges', value: 'legal' },
    ];

    return (
        <div className={styles.filterControls}>
            {filters.map((filter) => (
                    <button
                        key={filter.value}
                className={`${styles.filterBtn} ${activeFilter === filter.value ? styles.active : ''}`}
    onClick={() => onFilterChange(filter.value)}
    data-filter={filter.value}
        >
        {filter.label}
        </button>
))}
    </div>
);
};

export default FilterControls;