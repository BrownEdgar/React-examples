import React from 'react';
import "./Modal.scss"
export default function Modal({ showModal, setshowModal, deleter}) {
	return <> {showModal ? (
		<div className='modalWrapper'>
			<div className="M-content">
				<h3>Are you sure?</h3>
				<div className="btn-box">
					<button className='btn-info' onClick={setshowModal}>cancel</button>
					<button className='btn-danger' onClick={() => {
						setshowModal();
						deleter()
					}}>delete</button>
				</div>
			</div>
		</div>
	) : null} </>
}
