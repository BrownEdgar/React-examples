import React from 'react'
import { AiOutlineUser } from "react-icons/ai";
function MainForm() {
  return (
    <form  >
      <h2>Register Form</h2>
      <div className="input-container">
        <input className="input-field" type="text" placeholder="Username" name="usrnm" />
        <AiOutlineUser className='icon' />
      </div>

      <div className="input-container">
        <input className="input-field" type="text" placeholder="Email" name="email" />
        <i className="fa fa-envelope icon"></i>
      </div>

      <div className="input-container">
        <input className="input-field" type="password" placeholder="Password" name="psw" />
        <i className="fa fa-key icon"></i>
      </div>

      <button type="submit" className="reg">Register</button>
    </form>
  )
}

export default MainForm
