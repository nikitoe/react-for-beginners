import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import { Link } from "react-router-dom"

function Home () {
    const [movieLoading, setMovieLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
          )
      ).json();
      setMovies(json.data.movies);
      setMovieLoading(false);
    };
    
    useEffect(() => {
      getMovies();
    },[]);
  
    return (
      <div className={styles.container}>
        {movieLoading ? (
          <div className={styles.loader}>
            <span>Loading...</span>
          </div>
            ) : (
        <div className={styles.movies}>
          <ul>
              <li><Link to={`/cointracker/`}>CoinTracker</Link></li>
              <li><Link to={`/todos/`}>ToDos</Link></li>
          </ul>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />        
          ))}
        </div>)};
      </div>
    );
};

export default Home;