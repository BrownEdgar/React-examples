import React, { useState, useEffect, Suspense } from 'react';
import MyLoader from '../Loader'
import axios from 'axios';

import "../App.scss"
export default function App() {
	const [loading, setLoading] = useState(false);
	const [albums, setAlbums] = useState([])

	useEffect(() => {
		function getData() {
			setLoading(true)
			axios({
				method: "GET",
				url: 'https://jsonplaceholder.typicode.com/albums',
			}).then(response => {
				setAlbums(response.data);
				setLoading(false)
			})
		}
		getData()
	}, [])

	return (
		<div className='wrapper'>
		<Suspense fallback={MyLoader}>
				{
					albums.map(elem => {
						return (
							<p key={elem.id}>{elem.title}</p>
						)
					})
				}
		</Suspense>
		</div>
	)
}
