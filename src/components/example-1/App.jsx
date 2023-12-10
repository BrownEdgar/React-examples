import { useState } from 'react';

import MooveTable from './MooveTable';
import { getMovies } from './data/fakeMoverServer'
import "./App.scss"

function App() {
  const [movies, setmovies] = useState(getMovies())
  const handleDelete = (id) => {
    const newmovies = movies.filter(movie => movie.imdbID !== id);
    setmovies(newmovies)
  }
  return (

    <MooveTable movies={movies} handleDelete={handleDelete} />

  );
}

export default App;
