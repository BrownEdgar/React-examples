import React from 'react'

export default function MyForm({ handleSubmit }) {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="username" >Username</label>
				<input type="text" id='username' required/>
			</div>
			<div>
				<label htmlFor="lastname" >Lastname</label>
				<input type="text" id='lastname' required/>
			</div>
			<div>
				<label htmlFor="email" >email</label>
				<input type="email" id='email' required/>
			</div>
			<div className='radio-form-group'>
				<label htmlFor="gender" >Select gender</label>
				<p className='radio-wrapper'>
					<input type="radio" name="gender" value="Female" id='female' required/> <span>Female</span>
				</p>
				<p className='radio-wrapper'>
					<input type="radio" name="gender" value="Male" id='male'/> <span>Male</span>
				</p>
			</div>
			
			<div>
				<label htmlFor="cities">Select cities</label>
				<select name="cities" id="cities" defaultValue="html">
					<option value="Yerevan">Yerevan</option>
					<option value="Vanadzor">Vanadzor</option>
					<option value="Gyumri">Gyumri</option>
					<option value="Goris" >Goris</option>
					<option value="Dilijan">Dilijan</option>
				</select>
			</div>
			<div>
				<input type="submit" value='register' />
			</div>
		</form>
	)
}
