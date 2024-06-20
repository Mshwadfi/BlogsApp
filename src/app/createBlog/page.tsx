'use client'
import React, { useState } from 'react';
import styles from './postForm.module.css';

const Page = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          body,
          userId: 1,
          id: 101, 
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create post');
      }

      console.log('Post created:', await response.json());
      alert('Post created successfully!'); 
    } catch (error) {
      console.error('Error creating post:', error);
      setErrorMessage('Failed to create post. Please try again later.'); 
    }
  };

  return (
    <div className={styles.container}>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows="4"
            required
            className={styles.textarea}
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>
          Create Post
        </button>
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Page;
