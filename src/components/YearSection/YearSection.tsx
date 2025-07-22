// src/components/YearSection/YearSection.tsx
import React from 'react';
import styles from './YearSection.module.scss';

interface YearSectionProps {
    year: string;
    children: React.ReactNode;
}

const YearSection: React.FC<YearSectionProps> = ({ year, children }) => (
    <div className={styles.yearSection}>
        <div className={styles.yearHeader}>
            <div className={styles.yearTitle}>{year}</div>
        </div>
        {children}
    </div>
);

export default YearSection;