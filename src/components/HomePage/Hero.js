import { Link } from "react-router-dom";
import ParticlesComponent from "components/Particles";
import { Balancer } from "react-wrap-balancer";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticlesComponent className="absolute inset-0" />

      {/* overlay image */}
      <div className="absolute inset-0 z-10 bg-background" style={styling} />

      {/* content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-6">
        <div className="flex flex-col items-center max-w-5xl gap-8 text-center">
          {/* title */}
          <h1 className="text-3xl font-semibold tracking-wide text-grey md:text-5xl lg:text-6xl">
            <Balancer>KARENA FILM YANG SERU HARUS DIABADIKAN</Balancer>
          </h1>

          {/* CTA */}
          <Link
            to="/film"
            className="px-6 py-3 text-sm font-medium text-white transition-all duration-300 rounded-full md:px-8 md:text-base bg-primary hover:bg-primary/80 hover:scale-105 hover:shadow-lg hover:shadow-primary/40 active:scale-95"
          >
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
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  zIndex: "1",
  opacity: 0.5,
};
