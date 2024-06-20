'use client'
import { useState } from 'react';
import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>BlogMe</div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.hamburgerLine} ></div>
        <div className={styles.hamburgerLine}></div>
        <div className={styles.hamburgerLine}></div>
      </div>
      {isMenuOpen && (
        <div className={styles.menu}>
          <Link href="/" className={styles.link} onClick={toggleMenu}>Homepage</Link>
          <Link href="/createBlog" className={styles.link} onClick={toggleMenu}>Create Blog</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
