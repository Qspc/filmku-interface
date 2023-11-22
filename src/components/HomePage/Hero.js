import { Link } from 'react-router-dom';
import ParticlesComponent from 'components/Particles';
import { Balancer } from 'react-wrap-balancer';
const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticlesComponent className="absolute inset-0" />
      <div className="absolute inset-0 z-10 bg-background" style={styling}></div>
      <div className="absolute inset-0 z-20">
        <div className="flex flex-col items-center justify-center min-h-screen gap-8 text-white" style={{ zIndex: '3' }}>
          <h1 className="text-3xl font-bold leading-relaxed tracking-wide text-center text-grey md:text-6xl">
            <Balancer>KARENA FILM YANG SERU HARUS DIABADIKAN</Balancer>
          </h1>
          <Link className="px-6 py-2 text-base rounded-full md:px-9 md:py-3 md:text-lg bg-primary text-grey" to="/film">
            Cek Film Disini
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const styling = {
  backgroundImage: 'url("image1.jpg")',
  backgroundSize: '1440px 640px',
  zIndex: '1',
  opacity: 0.5,
};
