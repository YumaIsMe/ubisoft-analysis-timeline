// src/components/RiskCard/RiskCard.tsx
import React from 'react';
import styles from './RiskCard.module.scss';
import type { Risk } from '../../Types/timeline';

interface RiskCardProps {
    risk: Risk;
}

const RiskCard: React.FC<RiskCardProps> = ({ risk }) => {
    return (
        <div className={`${styles.riskCard} ${styles[risk.level]}`}>
            <h3>{risk.title}</h3>
            <p>{risk.description}</p>
        </div>
    );
};

export default RiskCard;