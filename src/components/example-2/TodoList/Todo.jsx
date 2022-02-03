import React from 'react';
import "./Todo.scss"

export default function Todo({ openModal, data }) {
  return <>
		{data.map((elem,index) => {
			return (
				<div className='T-list-item'>
					<h3>{elem }</h3>
					<button
						className='B-dange btn-lg'
						onClick={() => openModal(index)}
					>Delete</button>
				</div>
			)
		})}
	</>
}
