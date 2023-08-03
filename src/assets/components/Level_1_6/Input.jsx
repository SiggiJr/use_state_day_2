import { useState } from "react";

const Input = () => {

const [firstname, setFirstname] = useState("")
const [lastname, setLastname] = useState("")
const [email, setEmail] = useState("")

const handleFirstname = (event) => {
  setFirstname(event.target.value)
}
const handleLastname = (event) => {
  setLastname(event.target.value)
}
const handleEmail = (event) => {
  setEmail(event.target.value)
}

  return ( 
    <section className="level_1_6">
      <div className="inputs">
        <input type="text" name="firstname" id="firstname" onChange={handleFirstname}/>
        <input type="text" name="lastname" id="lastname" onChange={handleLastname}/>
        <input type="email" name="email" id="email" onChange={handleEmail}/>
      </div>
      <div className="outputs">
        <p>Vorname: <span className="firstname_output">{firstname}</span></p>
        <p>Nachname: <span className="lastname_output">{lastname}</span></p>
        <p>Email: <span className="email_output">{email}</span></p>
      </div>
    </section>
  );
}
export default Input;