import React, { useContext } from 'react'
import "./body.css"
import Position from './Position'
import { ParticipantsContext } from '../context/ParticipantsContext'

function Body({rank}) {
  const [participants, setParticipants] = useContext(ParticipantsContext);
  const cloneParticipants = [...participants];
  const arrangedparticipants = cloneParticipants.sort((a,b) => {
    return b.score - a.score
  })
  return (
    <div className='body'>
      {
        arrangedparticipants.map((participant, index) => {
          const position = {0: "first", 1: "second", 2: "third"};
          return (
            <Position 
            key={index}
            name={participant.name}
            score={participant.score}
            position={index+1}
            rank={position[index] || null}
            />
          )
        })
      }
    </div>
  )
}
 
export default Body