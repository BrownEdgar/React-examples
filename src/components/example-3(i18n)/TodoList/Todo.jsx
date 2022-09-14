import React from 'react';
import translate from '../i18n/translate';
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
					>{translate("btn-delete")}</button>
				</div>
			)
		})}
	</>
}
