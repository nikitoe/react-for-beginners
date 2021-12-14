import { useEffect, useState } from "react";

function MovieApp() {
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

  console.log(movies);

  return (
    <div>
      {movieLoading ? (<h1>Loading...</h1>) : (
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image} />
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>
              {movie.genres.map((g) => (<li key = {g}>{g}</li>))}
            </ul>
          </div>
        ))}
      </div>)};
    </div>
  );
};

function CoinTracker () {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) => response.json()).then((json) => {
        setCoins(json);
        setLoading(false);
      });
  },[]);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
        {loading ? <strong>Loading...</strong> : <select>
        {coins.map((coin) => (
          <option key={coin.id}>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select>}
    </div>
  );
};

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if ( toDo === "") {
      return;
    };
    setToDo("");
    setToDos(currentArray => [toDo, ...currentArray]);
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value = {toDo} type = "text" placeholder="Write your to do..."/>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
        ))}
      </ul>
      <hr /><CoinTracker />
      <hr /><MovieApp />
    </div>
  );
};

export default App;
