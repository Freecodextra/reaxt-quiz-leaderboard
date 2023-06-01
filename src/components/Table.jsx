import React, { useContext, useState } from "react";
import "./table.css";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { ParticipantsContext } from "../context/ParticipantsContext";
import Cover from "./Cover";
import EditForm from "./EditForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Table() {
  const [participants, setParticipants] = useContext(ParticipantsContext);
  const [show, setShow] = useState(false);
  const [editUser, setEditUser] = useState({});
  const [editUserId, setEditUserId] = useState(-1);
  async function handleEdit(e) {
    const id = await e.target.id;
    if (id) {
      setEditUserId(id);
      setEditUser(participants[id]);
      setShow(true);
    }
  }
  async function handelDelete(e) {
    const id = await e.target.id;
    if (!id) return;
    const confirmation = confirm(
      `Are You Sure You Want to Delete ${participants[id].name}?`
      );
      if (confirmation) {
      const notify = () => toast.success(`${participants[id].name} Deleted Successfully!`);
      const newParticipants = participants.filter(
        (participant, index) => index != id
      );
      setParticipants(newParticipants);
      notify();
    }
  }
  return (
    <div className="table">
      <ToastContainer />
      {show && (
        <Cover setShow={setShow}>
          <EditForm
            editUser={editUser}
            editUserId={editUserId}
            setShow={setShow}
          />
        </Cover>
      )}
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Church</th>
            <th>Score</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{participant.name}</td>
                <td>{participant.church}</td>
                <td>{participant.score}</td>
                <td>
                  <BiEdit id={index} onClick={handleEdit} />
                </td>
                <td>
                  <MdDelete id={index} onClick={handelDelete} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
