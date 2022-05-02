import image1 from '../../image/marquee/marque_1.jpg';
import image2 from '../../image/marquee/marque_2.jpg';
import image3 from '../../image/marquee/marque_3.jpg';
import image4 from '../../image/marquee/marque_4.jpg';
import image5 from '../../image/marquee/marque_5.jpg';
import image6 from '../../image/marquee/marque_6.jpg';
import image7 from '../../image/marquee/marque_7.jpg';
import Marquee from 'react-fast-marquee';
import styles from './ImageLoop.module.css';

function ImageLoop() {
  const images = [image1, image2, image3, image4, image5, image6, image7];

  return (
      <Marquee className={styles.marqCont} speed="50">
        {images.map((item) => (
          <img className={styles.marqueeImg} src={item} alt="marquee-img" />
        ))}
      </Marquee>
  );
}

export default ImageLoop;
