import Hero from '../components/Hero';
import { useSpring, animated } from 'react-spring'
import ImageLoop from '../components/ImageLoop'
const Home = () => {
  const mainSpring = useSpring({
		from: { marginTop: -800, opacity: 0 },
		to: { marginTop: 0, opacity: 1 },
		config: { duration: 1500 }
	})
  return (
    <animated.main style={mainSpring}>
      <Hero />
      <ImageLoop />
    </animated.main>
  );
};

export default Home;
