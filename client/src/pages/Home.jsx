import Hero from '../components/Hero';
import { useSpring, animated } from 'react-spring'
const Home = () => {
  const mainSpring = useSpring({
		from: {  opacity: 0 },
		to: { opacity: 1 },
		config: { duration: 1500 }
	})
  return (
    <animated.main style={mainSpring}>
      <Hero />
    </animated.main>
  );
};

export default Home;
