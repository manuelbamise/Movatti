import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ searchResult }) => {
  const navigate = useNavigate();
  return (
    <>
      {searchResult.map((searchResult) => (
        <div
          key={searchResult.id}
          className="h-96 rounded-xl shadow-lg"
          onClick={() => {
            navigate(`/MovieDetails/${searchResult.id}`);
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${searchResult.poster_path}`}
            alt=""
            className="w-full h-80 object-cover"
          />
          <p className="text-lg mt-4 ml-4 line-clamp-1 font-medium">
            {searchResult.title}
          </p>
        </div>
      ))}
    </>
  );
};

export default MovieCard;