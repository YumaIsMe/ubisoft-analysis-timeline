// src/components/Header/Header.tsx
import React from 'react';
import styles from './Header.module.scss'; // Import CSS Module

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Ubisoft: The Rise, Fall, and Uncertain Future</h1>
            <p className={styles.subtitle}>A comprehensive analysis of Ubisoft's journey from 2010-2025 and projections beyond</p>
        </header>
    );
};

export default Header;