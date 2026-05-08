import { Link } from "react-router-dom";
import ParticlesComponent from "components/Particles";
import { Balancer } from "react-wrap-balancer";
import { useRef } from "react";

const Hero = () => {
  const titleRef = useRef(null);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticlesComponent className="absolute inset-0" />

      {/* overlay image */}
      <div className="absolute inset-0 z-10 bg-background" style={styling} />

      {/* content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-6">
        <div className="flex flex-col items-center max-w-5xl gap-8 text-center">
          {/* title */}
          <div ref={titleRef} className="text-center ">
            <h1
              className="font-bold  tracking-tight leading-[1.1]"
              style={{
                fontSize: "clamp(2.2rem, 6vw, 5.5rem)",
                color: "#F5F0E8",
                textShadow: "0 4px 40px rgba(0,0,0,0.6)",
                letterSpacing: "-0.01em",
              }}
            >
              <Balancer className="capitalize">Karena Film yang Seru Harus Diabadikan</Balancer>
            </h1>
          </div>

          {/* CTA */}
          <Link
            to="/film"
            className="px-6 py-3 text-sm font-medium text-white uppercase transition-all duration-300 rounded-full md:px-8 md:text-base bg-primary hover:bg-primary/80 hover:scale-105 hover:shadow-lg hover:shadow-primary/40 active:scale-95"
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
