import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from './../components/Layout';
import axios from 'axios';

const AddTask = () => {
    const history = useHistory();
    const [ task, setTask ] = useState({
        title:'',
        description:'',
        priority: 0,
        done: false,
        time: 0,
    });
    const handleChange = (event) => {
    // task { title, descript...}
        switch(event.target.id) {
            case 'title':
                setTask({
                    ...task,
                    title: event.target.value,
                });
            break;
            case 'description':
                setTask({
                    ...task,
                    description: event.target.value,
                });
            break;
            case 'priority':
                setTask({
                    ...task,
                    priority: parseInt(event.target.value),
                });
            break;
            case 'time':
                setTask({
                    ...task,
                    time: parseInt(event.target.value),
                });
            break;
            default:
                break;
        }
        // task 'Title'
    };

    const createTask = () => {
        if(
            task.title.length > 0 &&
            task.description.length > 0 &&
            task.time > 0 &&
            task.time < 25 &&
            task.priority > 0 &&
            task.priority < 6
        ) {
            axios.post('https://prueba-cinta-roja-mali.firebaseio.com/tasks.json', task)
            .then(({data})=>{
                if(data.name){
                    history.push(`/task/${data.name}`);
                } else {
                    alert('Algo salio mal');
                }
            })
            .catch(()=>{
                // si sigues desarrollando el proyecto, si está en tus manos repararlo
                alert('Hay algo mal fuera de tus manos.');
            });
        } else {
            alert('No has llenado todos los campos o has llenado de forma incorrecta un campo.');
        }
    
    }

    return(
    <Layout classNameName="container mh-100" title="Home">
        {JSON.stringify(task)}
    <h1>AddTask</h1>
        <div>
            <div className="form-group">
                <label htmlFor="title">Titulo de la tarea: </label>
                <input type="text" className="form-control" id="title" 
                value={task.title} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="description">Descripción : </label>
                <input type="text" className="form-control" id="description" 
                value={task.description} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="time">Tiempo: </label>
                <input type="number" className="form-control" id="time" max="24" min="1" 
                value={task.time} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="priority">Prioridad: </label>
                <input type="number" className="form-control" id="priority" max="5" min="1" 
                value={task.priority} onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={createTask}>Agregar Tareas</button>
    </div>
    </Layout>
);
};

export default AddTask;