import React, { useState } from 'react';
import { Link } from "react-router-dom";
import incognito from '../../icons/incognito.jpg';

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="quoteText">
        <h1 className="heading">ChatNeto</h1>
        <p className="quoteCenter"><img src={incognito} alt="incognito" className="incog"/>chat anonymously</p>
      </div>
      <div className="joinInnerContainer">
        <div>
          <input
          placeholder="Name"
          className="joinInput" type="text"
          onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input
          placeholder="Room"
          className="joinInput mt-20"
          type="text"
          onChange={(event) => setRoom(event.target.value)} />
        </div>

        <Link onClick={e => (name && room ? 
          null : 
          e.preventDefault())} 
          // link directs to chat room
          to={`/chat?name=${name}&room=${room}`} >
          
          <button className={'custom-btn btn-12 mt-20'} type="submit">
            <span>Enter Room</span>
            <span>Sign In</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
