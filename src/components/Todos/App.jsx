import React, { useState, useEffect } from 'react'
import Form from './Form'
import Students from './Students'
import moment from 'moment'

import './App.scss'

export default function App() {
	const [students, setStudents] = useState(JSON.parse(localStorage.getItem('students') || '[]'))

	const handleSubmit = (e) => {
		e.preventDefault();
		const {
			firstname,
			lastname,
			email,
			languages } = e.target;

		const student = {
			id: Date.now(),
			firstname: firstname.value,
			lastname: lastname.value,
			email: email.value,
			languages: languages.value,
			registeredDate: moment()
		}
		setStudents(prevStudents => {
			return [...prevStudents, student]
		})
		
		
		e.target.reset()
	}
	useEffect(() => {
		localStorage.setItem('students', JSON.stringify(students))
	}, [students])
	

	return (
		<div className='container'>
			<div className="container-info">

			</div>
			<div className='container-form'>
				<Form onSubmit={handleSubmit} />
			</div>
			<div className='container-students'>
				<Students students={students} />
			</div>
		</div>
	)
}
