import { Link } from "react-router-dom";

const FilmCard = (props) => {
  const { id, rank, title, year, image, description } = props;
  return (
    <div className="flex gap-1">
      {/* number ranking */}
      <div className="flex flex-col w-20 text-center rounded-lg max-h-20 bg-surface">
        <p className="my-auto text-2xl font-semibold">{rank}.</p>
      </div>
      {/* content */}
      <div className="flex flex-1 w-full p-8 mb-4 rounded-lg min-w-80 bg-surface">
        {/* image content */}
        <div className="relative flex-shrink-0 mr-2 overflow-hidden bg-gray-900 md:mr-6 cardImage">
          <img
            className="absolute object-cover object-right w-full h-full"
            src={image}
            alt={title}
          />
        </div>
        {/* description content*/}
        <div className="flex flex-col justify-between mb-3">
          <div>
            <h1 className="text-xl font-semibold capitalize text-white-900 md:text-2xl">{title}</h1>
            <p className="text-sm font-bold text-white-900 md:text-base ">{year}</p>
            <p
              className="h-24 mt-4 overflow-hidden text-xs normal-case text-white-900 md:text-base text-ellipsis"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </div>
          <div>
            <Link
              className="px-6 py-3 text-sm font-medium text-white transition-all duration-300 rounded-full md:px-8 md:text-base bg-primary hover:bg-primary/80 hover:scale-105 hover:shadow-lg hover:shadow-primary/40 active:scale-95"
              to={`/film/${id}`}
            >
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
