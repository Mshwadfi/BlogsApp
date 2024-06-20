import Link from 'next/link';
import styles from './Header.module.css';
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.container}>
     
      <div className={styles.logo}>lamablog</div>
      <div className={styles.links}>
        {/* <ThemeToggle /> */}
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        {/* <AuthLinks /> */}
      </div>
    </div>
  );
};

export default Header;
