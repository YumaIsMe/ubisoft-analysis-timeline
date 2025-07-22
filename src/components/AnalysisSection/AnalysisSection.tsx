import React from 'react';
import styles from './AnalysisSection.module.scss';

interface AnalysisSectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

const AnalysisSection: React.FC<AnalysisSectionProps> = ({ id, title, children }) => {
    return (
        <div id={id} className={styles.analysisSection}>
            <h2>{title}</h2>
            {children}
        </div>
    );
};

export default AnalysisSection;