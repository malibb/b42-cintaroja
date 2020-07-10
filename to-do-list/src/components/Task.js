import React from 'react';
import { Link } from 'react-router-dom';

const Task = ({ title, description, done, time, priority }) => {
    return(
    <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
        <h4>{priority}</h4>
        <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Tiempo para realizarla: {time}</h6>
            <p className="card-text">{description}</p>
          <Link to="/" className="card-link">Card link</Link>
          <checkbox value={done}></checkbox>
        </div>
      </div>
    );
};

export default Task;