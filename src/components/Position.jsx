import React from 'react'
import "./position.css"
import Profile from "../assets/profile.webp"

function Position({rank, position, name, score, image}) {
  return (
        <div className="player">
          <div className={`player-rank `+ rank + "-pos"}>{position}</div>
          <div className="player-image">
            <img src={Profile} alt="profile" />
          </div>
          <div className={`player-name-score `+ rank}>
            <span className="player-name">{name}</span>
            <span className="player-score">{score}</span>
          </div>
        </div>
  )
}

export default Position