import React from 'react'

export default function Form({ onSubmit }) {
	return (
		<form onSubmit={onSubmit}>
			<div>
				<label htmlFor="firstname">Name</label>
				<input type="text" id="firstname"  required/>
			</div>
			<div>
				<label htmlFor="lastname">Lastname</label>
				<input type="text" id="lastname"  required/>
			</div>
			<div>
				<label htmlFor="email">E-mail</label>
				<input type="email" id="email"  required/>
			</div>
			<div>
				<label htmlFor="languages">Select languages</label>
				<select name="languages" id="languages" defaultValue='' required>
					<option value="" disabled></option>
					<option value="html&css">HTML & CSS</option>
					<option value="javascript">javascript</option>
					<option value="react.js">React.js</option>
					<option value="node.js">Node.js</option>
					<option value="TypeScript">TypeScript</option>
				</select>
			</div>
			<div>
				<input type="submit" value='Register' className='register'/>
			</div>
		</form>
	)
}
