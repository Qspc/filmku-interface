import { forwardRef } from "react";

import { Link } from "react-router-dom";
import { Card, Col } from "antd";
import { StarFilled } from "@ant-design/icons";

const MovieCard = forwardRef(({ movie }, ref) => {
  const { Meta } = Card;
  return (
    <Link ref={ref} key={movie.id} to={`/movies/${movie.id}`}>
      <Col>
        <Card
          hoverable
          className="w-full border-none bg-surface"
          cover={
            <img
              className="object-cover w-36 h-60"
              alt={movie.title}
              src={"http://image.tmdb.org/t/p/" + "w500" + movie.poster_path}
            />
          }
        >
          <Meta
            className="text-left"
            title={<h3 className="text-white">{movie.title}</h3>}
            description={
              <div className="flex justify-between">
                <span style={{ color: "#cbd5e1" }}>
                  {movie.release_date.split("-")[0]}
                </span>{" "}
                <span className="flex items-center space-x-1">
                  <StarFilled
                    style={{ color: "#eab308" }}
                    twoToneColor="#60a5fa"
                  />
                  <span style={{ color: "#cbd5e1" }}>{movie.vote_average}</span>
                </span>
              </div>
            }
          />
        </Card>
      </Col>
    </Link>
  );
});

export default MovieCard;
