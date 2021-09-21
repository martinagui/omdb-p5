import React from "react";
import PropTypes from "prop-types";

const Card = ({ movie }) => {
  return (
    <div className="col-md-3">
      <div className="card">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="card-img-top"
          width="100"
        />
        <div className="card-body">
          <p>
            <small>
              {movie.Title} {movie.Year}
            </small>
          </p>
          <p>
            <small>{movie.Type}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Poster: PropTypes.string,
    Year: PropTypes.string,
    Type: PropTypes.string,
  }),
};

export default Card;
