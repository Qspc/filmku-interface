import { motion } from "framer-motion/dist/framer-motion";

const Card = ({ content }) => {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{
        x: 0,
        y: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: "easeIn" },
      }}
      className="bg-surface flex flex-col items-center justify-center p-8 mb-6 rounded-lg "
    >
      <div className="relative w-24 h-24 mb-6 overflow-hidden">
        <img
          className="object-cover w-full h-full rounded-full "
          src={content.img}
          alt={content.name}
        />
      </div>
      <p className="mb-6 font-bold text-white md:text-base">{content.name}</p>
      <div className="flex">
        <div className="relative flex items-center justify-center rounded-full text-blue-700">
          <a
            href={content.socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/instagram.svg"
              alt="instagram"
              style={{ height: "24px" }}
            />
          </a>
        </div>
        <div className="flex items-center justify-center mx-8 rounded-full text-blue-700">
          <a
            href={content.socialMedia.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/linkedin.svg"
              alt="linkedin"
              style={{ height: "24px" }}
            />
          </a>
        </div>
        <div className="flex items-center justify-center rounded-full text-blue-700">
          <a
            href={content.socialMedia.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.svg" alt="github" style={{ height: "24px" }} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
