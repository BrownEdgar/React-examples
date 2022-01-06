import React, { useState } from 'react';
import { Container, Row, Col  } from 'react-bootstrap';
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
		<Container className='my-4'>
			<Row>
				<Col>
					<MooveTable movies={movies} handleDelete={handleDelete}/>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
