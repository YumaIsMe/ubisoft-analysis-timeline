// src/components/Navigation/Navigation.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navigation.module.scss';

// Variants for the overall navigation menu container (mobile only)
const navMenuVariants = {
    closed: {
        maxHeight: 0,
        opacity: 0,
        transition: {
            when: 'afterChildren',
            duration: 0.3,
            ease: 'easeOut',
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    },
    open: {
        maxHeight: 500, // Adjust if needed
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            duration: 0.35,
            ease: [0.25, 0.1, 0.25, 1], // Apple-style ease
            staggerChildren: 0.1,
            staggerDirection: 1
        }
    }
};

// Variants for the individual navigation links
const navLinkVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
};

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            requestAnimationFrame(() => {
                setIsMobile(window.innerWidth <= 768);
            });
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    const handleNavLinkClick = () => {
        if (isMobile) {
            setIsOpen(false);
        }
    };

    return (
        <div className={styles.navContainer}>
            {isMobile && (
                <button
                    className={`${styles.burgerMenuButton} ${isOpen ? styles.open : ''}`}
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-controls="main-navigation"
                >
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                </button>
            )}

            {isMobile ? (
                <AnimatePresence>
                    {isOpen && (
                        <motion.nav
                            id="main-navigation"
                            className={styles.nav}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={navMenuVariants}
                            style={{ pointerEvents: isOpen ? 'auto' : 'none', overflow: 'hidden' }}
                        >
                            <motion.a href="#timeline" className={styles.navBtn} onClick={handleNavLinkClick} variants={navLinkVariants}>
                                Timeline
                            </motion.a>
                            <motion.a href="#financial" className={styles.navBtn} onClick={handleNavLinkClick} variants={navLinkVariants}>
                                Financial Analysis
                            </motion.a>
                            <motion.a href="#analysis" className={styles.navBtn} onClick={handleNavLinkClick} variants={navLinkVariants}>
                                Market Analysis
                            </motion.a>
                            <motion.a href="#risks" className={styles.navBtn} onClick={handleNavLinkClick} variants={navLinkVariants}>
                                Risk Assessment
                            </motion.a>
                            <motion.a href="#predictions" className={styles.navBtn} onClick={handleNavLinkClick} variants={navLinkVariants}>
                                Future Outlook
                            </motion.a>
                            <motion.a href="#recommendations" className={styles.navBtn} onClick={handleNavLinkClick} variants={navLinkVariants}>
                                Recommendations
                            </motion.a>
                        </motion.nav>
                    )}
                </AnimatePresence>
            ) : (
                <nav className={styles.nav}>
                    <a href="#timeline" className={styles.navBtn}>Timeline</a>
                    <a href="#financial" className={styles.navBtn}>Financial Analysis</a>
                    <a href="#analysis" className={styles.navBtn}>Market Analysis</a>
                    <a href="#risks" className={styles.navBtn}>Risk Assessment</a>
                    <a href="#predictions" className={styles.navBtn}>Future Outlook</a>
                    <a href="#recommendations" className={styles.navBtn}>Recommendations</a>
                </nav>
            )}
        </div>
    );
};

export default Navigation;
