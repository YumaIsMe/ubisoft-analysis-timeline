// src/components/Footer/Footer.tsx
import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2025 Analysis of Ubisoft. All rights reserved.</p>
            <p>Disclaimer: This analysis is for illustrative and fictional purposes, though it draws upon publicly available data sources for its foundation.</p>
        </footer>
    );
};

export default Footer;