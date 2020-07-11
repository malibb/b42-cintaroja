import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Task = ({ id, title, description, done, time, priority, isHome }) => {
    const history = useHistory();

    const deleteTask = () => {
      axios.delete(`https://prueba-cinta-roja-mali.firebaseio.com/tasks/${id}.json`)
      .then(() => {
        history.push('/');
      })
      .catch(({ response }) => {
        alert(response);
      });
    }

    return(
    <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
        <h4>{priority}</h4>
        <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Tiempo para realizarla: {time} hora</h6>
          { isHome 
          ? <Link to={`/task/${id}`} className="card-link">Ir al detalle </Link>
            : 
          <>
          <p className="card-text">{description}</p>
          <button className="btn btn-danger" onClick={deleteTask}>Borrar</button>
          {// Agregar un boton es si quieren borrar la tarea
          }
          <Link to="/" className="card-link">Ir a inicio </Link>
          </>
          }
          <checkbox value={done}></checkbox>
        </div>
      </div>
    );
};

export default Task;