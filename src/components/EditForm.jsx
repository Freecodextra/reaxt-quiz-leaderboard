import React, { useState, useContext } from 'react'
import { ParticipantsContext } from '../context/ParticipantsContext';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./form.css"

function EditForm({editUser, editUserId, setShow}) {
  const [participants, setParticipants] = useContext(ParticipantsContext);
  const [user, setUser] = useState(editUser);

  function handleChange(e) {
    const {id, value} = e.target;
    if (id === "name") {
      setUser({
        ...user,
        name: value
      });
    } if (id === "score") {
      setUser({
        ...user,
        score: value
      });
    } if(id === "church") {
      setUser({
        ...user,
        church: value
      });
    }
  }
  function handleClick() {
    if(user.name === "" || user.church === "" || user.score < 0){
      const notify = () => toast.error("Empty Field(s)!");
      notify();
    } else {
      const notify = () => toast.success("Updated Successfully!");
      notify();
      const cloneParticipant = [...participants];
      cloneParticipant[editUserId] = user;
      setParticipants(cloneParticipant);
      setUser({name: "", church: "", score: ""});
      setShow(false);
      }
    }
  return (
    <div className="form center">
      <div className="form-head">
        <h3>Update Participant</h3>
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
          <label htmlFor="score">Score</label>
          <input type="number" id="score" value={user.score} onChange={handleChange} />
        </div>
        <div className="input">
          <button type="submit" onClick={handleClick}>Update</button>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default EditForm