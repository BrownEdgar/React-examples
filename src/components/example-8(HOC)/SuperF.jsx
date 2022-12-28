import React from 'react'

const SuperF = Component => ({ ...props }) =>  {

		const handleClick = (e) => {
			console.log("hello from Function")
		}
	return (
		<Component {...props} handleClick={handleClick}/>
	);
}
export default SuperF