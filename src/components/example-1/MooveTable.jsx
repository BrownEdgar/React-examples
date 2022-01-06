import React from 'react'
import { Table, Button } from 'react-bootstrap';

export default function MooveTable(props) {
	if (props.movies.length === 0) {
		return <p className='noMovie'>There are no movies in the database.</p>
	}
	return (
		<>
			<h3 className='mb-3'>Showing {props.movies.length} movies in the database.</h3>
			<Table striped bordered hover variant="dark w-75 mx-auto">
				<thead>
					<tr>
						<th id="imdbID">imdbID</th>
						<th>Title</th>
						<th id="year">Year</th>
						<th id="poster">Poster</th>
					</tr>
				</thead>
				<tbody>
					{props.movies.map(movie => (
						<tr key={movie.imdbID}>
							<td>{movie.imdbID}</td>
							<td>{movie.Title}</td>
							<td>{movie.Year}</td>
							<td>
								<img src={movie.Poster} alt={`no poster 😕`} />
							</td>
							<td>
								<Button
									variant="outline-danger"
									onClick={() => props.handleDelete(movie.imdbID)}
								>Delete</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	)
}
