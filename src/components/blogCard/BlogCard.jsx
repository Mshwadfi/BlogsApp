import React from 'react'
import styles from './BlogCard.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link';

const BlogCard = ({blog}) => {
    const {title , body , id} = blog;
  return (
    <div className={styles.container}>
        <h5 className={styles.title}>
        {title.length <= 25 ? title : title.slice(0, 25) + '...'}
        </h5>
        <p className={styles.description}>
        {body.length <= 50 ? body : body.slice(0, 50) + '...'}
        </p>
        <Link href={`/blog/${id}`}>
        <button className={styles.button}>
        Read more
        <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
            />
        </svg>
        </button>
        </Link>
  </div>
  )
}

export default BlogCard
