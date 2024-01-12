import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Pophero from '../Components/Pophero'
import Popmovie from '../Components/Popmovie'

const Popularpage = () => {
  const [pmovie, setPmovie] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Nzg3YTczZjYzNTU3ODk4ZTNhOTY4YTVlZGZiNzRlNyIsInN1YiI6IjY1NDM5YzVhZTFhZDc5MDE0YmQyMWE1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mSIgoMq6Zynrqibem6qqAMhJuchH5CmDPuLp7I5sd7k",
        },
      };

      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          options
        );
        const data = await response.json();
        setPmovie(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPopularMovies();
  }, []);
  
  return (
    <>
      <Navbar />
      <Pophero />
      <Popmovie pmovie={pmovie} />
    </>
  );
}

export default Popularpage