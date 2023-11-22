import { Link } from 'react-router-dom';

const Auth = ({ handleNext, handlePrev }) => {
  return (
    <div className="py-16 text-white">
      <div className="flex justify-center ">
        <div className="px-8 py-1 mx-6 bg-transparent border-4 rounded-full cursor-pointer border-primary hover:text-blue-300" onClick={handlePrev}>
          Sebelumnya
        </div>
        <div className="px-8 py-1 mx-6 bg-transparent border-4 rounded-full cursor-pointer border-primary hover:text-blue-300" onClick={handleNext}>
          Selanjutnya
        </div>
      </div>
    </div>
  );
};

export default Auth;
