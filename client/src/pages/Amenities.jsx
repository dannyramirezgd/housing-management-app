import React from 'react';
import Amenity from '../components/Amenity';
import styles from './Amenities.module.css';

const Amenities = () => {
  return (
    <main>
      <div className={`${styles.mainAmenities} mt-4`}>
        This is why you want to become a resident!
      </div>
      <Amenity />
    </main>
  );
};

export default Amenities;
