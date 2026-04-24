const LoadingEffect = ({ size = 40 }) => {
  return (
    <div className="flex items-center justify-center w-full h-full py-20 text-white">
      <div
        className="border-4 rounded-full animate-spin border-grey border-t-primary"
        style={{ width: size, height: size }}
      />
    </div>
  );
};

export default LoadingEffect;
