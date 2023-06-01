import React, { useState, useContext } from "react";
import { ParticipantsContext } from "../context/ParticipantsContext";
import "./form.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const [user, setUser] = useState({ name: "", church: "", score: 0 });
  const [participants, setParticipants] = useContext(ParticipantsContext);
  function handleChange(e) {
    const {id, value} = e.target;
    if (id === "name") {
      setUser({
        ...user,
        name: value,
      });
    } else {
      setUser({
        ...user,
        church: value,
      });
    }
  }
  function handleClick() {
    if(user.name === "" && user.church === ""){
      const notify = () => toast.error("Empty Field(s)!");
      notify();
    } else {
      const notify = () => toast.success("Added Successfully!");
      setParticipants(prev => [...prev, user]);
      setUser({...user, name: "", church: ""});
      notify();
      }
    }
  return (
    <div className="form center">
      <div className="form-head">
        <h3>Add New Participant</h3>
      </div>
      <div className="form-body">
        <div className="input">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={user.name} onChange={handleChange} />
        </div>
        <div className="input">
          <label htmlFor="church">Church</label>
          <input type="text" id="church" value={user.church} onChange={handleChange} />
        </div>
        <div className="input">
          <button type="submit" onClick={handleClick}>Add</button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Form;
