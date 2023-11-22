import { motion } from 'framer-motion/dist/framer-motion';

const About = () => {
  // #0F172A
  // #1e293b
  return (
    <div id="about" className="min-h-screen bg-background">
      <div className="flex flex-col gap-8 px-12 pt-20 pb-20 md:gap-16">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.4, ease: 'easeIn' },
          }}
          className="text-4xl font-bold text-center text-white md:text-5xl"
        >
          Tentang
        </motion.h1>
        <div className="flex">
          <motion.div
            initial={{ x: '-50%', opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { ease: 'easeIn', duration: 0.4 },
            }}
            className="flex flex-col flex-1 gap-6 leading-10 text-center md:gap-10 text-grey md:text-justify md:text-xl md:mr-0 md:mb-0"
          >
            <p className="">Filmku merupakan Blog pribadi yang memuat tentang film terbaik yang pernah ditonton dan diurutkan dari mulai yang terbaik.</p>
            <p className="">Pembahasan film berasal dari berbagai negara dengan genre yang beragam. adapun jajak pendapat yang dimuat merupakan pendapat pribadi</p>
          </motion.div>
          <motion.div
            initial={{ x: '50%', opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { ease: 'easeIn', duration: 0.4 },
            }}
            className="flex-1 hidden bg-gray-200 md:block md:w-1/2 ml-14"
          >
            <img style={{ objectFit: 'cover', width: '100%', height: '350px' }} className="" src="image2.jpg" alt="gambar" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
