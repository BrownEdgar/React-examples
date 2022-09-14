import { useState } from "react";
import "./App.scss"
import Modal from "./Modal";
import Todo from "./TodoList/Todo";


import { I18nProvider, LOCALES } from "./i18n"
import translate from './i18n/translate';

function App() {
	const [languages, setlanguages] = useState(LOCALES.ENGLISH);
	const [showModal, setshowModal] = useState(false);
	const [dlIndex, setdlIndex] = useState(null);
	const [list, setlist] = useState(['html', 'css', 'Java Script', 'React.js', 'Node.js', 'Python' ]);
	const togglemodal = ( index ) => { 
		setshowModal(showModal => !showModal);
		setdlIndex(index)
	}

	const handleDeleter = () => {  
		let newTodo = list;
		newTodo.splice(dlIndex,1)
		setlist(newTodo)
	}

	const handlerChange = (e) => { 
		const { value } = e.target;
		setlanguages(LOCALES[value])
		if (value === "GERMAN") {
			setvalue("")
		}else{
			setvalue("B")
		}
	 }
	const [value, setvalue] = useState("A")

	return (
		<I18nProvider locale={languages}>
		<div className="container">
				<h2>{translate("hello")}</h2>
				<h2>{translate("withpath", { path: value })}</h2>
				<h1>{translate("abcd")}</h1>
				<select name="lng" id="lng" onChange={handlerChange}>
					<option value="ENGLISH">eng</option>
					<option value="GERMAN">ge</option>
					<option value="ARM">հայ</option>
				</select>
				<div className="flex">
				<Todo data={list} openModal={togglemodal}/>
					<p>{translate("description")}</p>
				</div>
			{showModal && <Modal showModal={showModal} setshowModal={togglemodal} deleter={handleDeleter}/>}
		</div>
		</I18nProvider>
	);
}

export default App;
