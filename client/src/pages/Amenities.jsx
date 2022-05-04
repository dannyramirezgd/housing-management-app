import React from 'react';
import Amenity from '../components/Amenity';
import styles from './Amenities.module.css';

const Amenities = () => {
  return (
    <>
      <div className={styles.mainAmenities}>
        This is why you want to become a resident!
      </div>
      <Amenity />
    </>
  );
};

export default Amenities;
