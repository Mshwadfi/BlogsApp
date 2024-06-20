'use client'
import React, { useEffect, useState } from 'react';
import BlogCard from '@/components/blogCard/BlogCard';
import ShimmerEffect from '@/components/shimmerCard/shimmerCard'; 
import styles from './BlogList.module.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState(null); 
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setBlogs(data);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {!blogs ? (
          Array.from({ length: 10 }).map((_, index) => <ShimmerEffect key={index} />)
        ) : (
          blogs.slice(0, 10).map((blog) => <BlogCard key={blog.id} blog={blog} />)
        )}
      </div>
    </div>
  );
};

export default BlogList;
