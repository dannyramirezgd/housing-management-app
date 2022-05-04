import { infos } from './Constants';
import { Carousel } from 'react-bootstrap';
import styles from './About.module.css';

const About = () => {
  return (
    <main className={styles.Ccontainer}>
      <Carousel className={`${styles.Ccarousel} pt-2`}>
        <Carousel.Item>
          <img

            className={`${styles.carouselImg} d-block w-100`}
            src={require(`../../image/about/${infos[0].image}`)}
            alt="First slide"
          />
          <Carousel.Caption className={styles.box}>
            <h3>{infos[0].title}</h3>
            <p>{infos[0].comment}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`${styles.carouselImg} d-block w-100`}
            src={require(`../../image/about/${infos[1].image}`)}
            alt="Second slide"
          />

          <Carousel.Caption className={styles.box}>
            <h3>{infos[1].title}</h3>
            <p>{infos[1].comment}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`${styles.carouselImg} d-block w-100`}
            src={require(`../../image/about/${infos[2].image}`)}
            alt="Third slide"
          />

          <Carousel.Caption className={styles.box}>
            <h3>{infos[2].title}</h3>
            <p>{infos[2].comment}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`${styles.carouselImg} d-block w-100`}
            src={require(`../../image/about/${infos[3].image}`)}
            alt="Fourth slide"
          />
          <Carousel.Caption className={styles.box}>
            <h3>{infos[3].title}</h3>
            <p>{infos[3].comment}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </main>
  );
};

export default About;
