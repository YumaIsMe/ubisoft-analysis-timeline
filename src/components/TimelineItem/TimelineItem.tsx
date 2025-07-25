
import React from 'react';
import {motion, type Variants} from 'framer-motion';
import styles from './TimelineItem.module.scss';
import type { Category, EventType } from '../../Types/timeline';
interface TimelineItemProps {
    category: Category;
    type: EventType;
    date: string;
    title: string;
    summary: string;
    index: number;
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1], // 👈 Fix: use array instead of string
        },
    }),
    exit: {
        opacity: 0,
        y: -10,
        transition: { duration: 0.3 },
    },
};

const TimelineItem: React.FC<TimelineItemProps> = ({ category, type, date, title, summary, index }) => {
    const itemClasses = [
        styles.timelineItem,
        styles[`category-${category}`],
        styles[`type-${type}`]
    ].join(' ');

    const badgeClasses = `${styles.categoryBadge} ${styles[`category-${category}`]}`;
    const markerClasses = `${styles.timelineMarker} ${styles[`category-${category}`]}`;

    return (
        <motion.div
            className={itemClasses}
            data-category={category}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            custom={index}
        >
            <div className={markerClasses}></div>
            <div className={styles.timelineContent}>
                <span className={badgeClasses}>{category}</span>
                <div className={styles.timelineDate}>{date}</div>
                <h3>{title}</h3>
                <p className={styles.timelineSummary}>{summary}</p>
            </div>
        </motion.div>
    );
};

export default TimelineItem;