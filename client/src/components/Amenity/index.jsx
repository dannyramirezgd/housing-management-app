import Neighborhood from './Neighborhood';
import pool from '../../image/amenities/swimming.jpg';
import bbq from '../../image/amenities/bbq.jpg';
import office from '../../image/amenities/office.jpg';
import { Carousel } from 'react-bootstrap';

const Amenity = () => {
  return (
    <>
      <Carousel className="my-5">
        <Carousel.Item>
          <img className="d-block w-100" src={pool} alt="Swimming Pool" />
          <Carousel.Caption>
            <h3>Indoor Swimming Pool</h3>
            <p>The pool water smells decent enough for you to enjoy!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bbq} alt="Second slide" />

          <Carousel.Caption>
            <h3>Serve it up!</h3>
            <p>You can bbq all day every day as a resident!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={office} alt="Third slide" />

          <Carousel.Caption>
            <h3>Flexible shared workspaces</h3>
            <p>We have both Mac and PC. Choose your flavor~</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Neighborhood />
    </>
  );
};

export default Amenity;
