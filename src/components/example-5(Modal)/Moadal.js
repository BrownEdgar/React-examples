import React, { useEffect } from 'react'

import "./Modal.scss"

export default function Moadal({ setIsOpen, isOpen }) {


	
	return (
		<div className='Modal'>
				<div className="Modal-Content">
					<h2>Exit</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias, repellendus dolorum eveniet facilis totam quibusdam hic vero beatae nisi.
						</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga unde eligendi a at sequi aspernatur alias dicta ullam reprehenderit laborum?</p>
				<span onClick={() => setIsOpen(false)}>X</span>
				</div>
		</div>
	)
}
