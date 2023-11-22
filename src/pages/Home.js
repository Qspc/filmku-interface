import About from '../components/HomePage/About';
import Fitur from '../components/HomePage/Fitur';
import Footer from '../components/Footer';
import Hero from '../components/HomePage/Hero';
import Recent from '../components/HomePage/Recent';
import Team from '../components/HomePage/Team';

const Home = () => {
  return (
    <div className="overflow-hidden bg-background">
      <Hero />
      <About />
      <Recent />
      <Fitur />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
