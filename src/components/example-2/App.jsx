import { useState } from "react";
import "./App.scss"
import Modal from "./Modal";
import Todo from "./TodoList/Todo";


function App() {
	const [showModal, setshowModal] = useState(false);
	const [dlIndex, setdlIndex] = useState(null);
	const [list, setlist] = useState(['html', 'css', 'Java Script', 'React.js', 'Node.js', 'Python' ]);
	const togglemodal = ( index ) => { 
		setshowModal(showModal => !showModal);
		setdlIndex(index)
	}
	const handleDeleter = () => {  
		setlist(list.toSpliced(dlIndex, 1))
	}
	return (

		<div className="container">
				<h2>My Todos</h2>
				<div className="flex">
				<Todo data={list} openModal={togglemodal}/>
				</div>
			{showModal && <Modal showModal={showModal} setshowModal={togglemodal} deleter={handleDeleter}/>}
		</div>
	);
}

export default App;
