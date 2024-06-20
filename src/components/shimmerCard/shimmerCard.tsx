import React from 'react';
import styles from './shimmerCard.module.css';

const ShimmerCard = () => {
  return (
    <div className={styles.shimmerWrapper}>
      <div className={styles.shimmer}></div>
    </div>
  );
};

export default ShimmerCard;
