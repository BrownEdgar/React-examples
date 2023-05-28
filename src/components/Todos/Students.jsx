import React from 'react'

export default function Students({ students }) {
	return (
		<table className='students'>
			<thead>
				<tr>
					<th>N</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Email address</th>
					<th>Language</th>
					<th>Registered date</th>
				</tr>
			</thead>
			{
				students.map((student, index) => {
					return (
						<tr key={student.id}>
							<td>{index + 1}</td>
							<td>{student.firstname}</td>
							<td>{student.lastname}</td>
							<td>{student.email}</td>
							<td>{student.languages}</td>
							<td>{student.registeredDate.toString()}</td>
						</tr>
					)
				})
			}
		</table>
	)
}
