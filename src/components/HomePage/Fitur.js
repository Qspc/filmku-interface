import { motion } from 'framer-motion/dist/framer-motion';
const Fitur = () => {
  return (
    <div className="flex flex-col items-center min-h-screen px-12 pt-20 pb-20 mx-auto text-white bg-background gap-9 md:flex-row justify-evenly">
      <motion.div
        initial={{ x: '50%', opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.4, delay: 0, ease: 'easeIn' },
        }}
        className="grid gap-4 bg-transparent justify-items-center w-50"
      >
        <div className="flex items-center justify-center w-40 h-36 rounded-xl bg-surface">
          <ion-icon name="film-outline" className="items-center text-6xl text-blue-700" style={{ fontSize: '4rem', color: 'rgba(26, 86, 219, 1)' }}></ion-icon>
        </div>
        <div className="text-2xl font-semibold text-center text-grey ">Berbagai Genre</div>
      </motion.div>
      <motion.div
        initial={{ x: '50%', opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.4, delay: 0.2, ease: 'easeIn' },
        }}
        className="grid gap-4 bg-transparent justify-items-center w-50"
      >
        <div className="flex items-center justify-center w-40 h-36 rounded-xl bg-surface">
          <ion-icon name="calendar-outline" className="items-center text-6xl text-blue-700" style={{ fontSize: '4rem', color: 'rgba(26, 86, 219, 1)' }}></ion-icon>
        </div>
        <div className="text-2xl font-semibold text-center text-grey ">Periode Beragam</div>
      </motion.div>
      <motion.div
        initial={{ x: '50%', opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.4, delay: 0.4, ease: 'easeIn' },
        }}
        className="grid gap-4 bg-transparent justify-items-center w-50"
      >
        <div className="flex items-center justify-center w-40 h-36 rounded-xl bg-surface">
          <ion-icon name="play-forward-circle-outline" className="items-center text-6xl text-blue-700" style={{ fontSize: '4rem', color: 'rgba(26, 86, 219, 1)' }}></ion-icon>
        </div>
        <div className="text-2xl font-semibold text-center text-grey ">Berbagai Negara</div>
      </motion.div>
    </div>
  );
};

export default Fitur;
