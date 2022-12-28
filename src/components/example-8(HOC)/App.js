import React from 'react'
import SuperF from './SuperF'



function App(props) {
	console.log(props);
	return (
		<div>
			<h2>HOC EXAMPLE</h2>
			<button onClick={props.handleClick}>Click</button>
		</div>
	)
}
export default SuperF(App)

const state = {
	name: 'Michael', 
	surname:'Jordan',
	age:57,
	number: 23,
	points: 32292,
	team: 'Chicago Bulls'
}

