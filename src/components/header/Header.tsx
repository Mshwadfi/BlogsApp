import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
     
      <div className={styles.logo}>BlogMe</div>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/createBlog" className={styles.link}>Create Blog</Link>
      </div>
    </div>
  );
};

export default Header;
