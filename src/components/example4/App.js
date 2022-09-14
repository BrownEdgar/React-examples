import axios from 'axios';
import { useState, useEffect} from 'react';

export default function App() {

	const [data, setData] = useState(localStorage.getItem("data") !== null 
	? JSON.parse(localStorage.getItem("data"))
	: [] );

	useEffect(() => {
		localStorage.setItem("data", JSON.stringify(data))
	},[data])

	useEffect(() => {
	
		axios('https://jsonplaceholder.typicode.com/todos/1')
		.then(response => response.data)
		.then(response => setData([response]))
	}, [])
const add = () => {
	let copy = [...data];
	copy.push({
		"userId": 2,
		"id": 2,
		"title": "delectus aut autem",
		"completed": false
	})
	setData(copy)
	console.log(data);
}
	return (
		<div>
			{JSON.stringify(data)}
			<button onClick={add}>add</button>
		</div>
	)
}