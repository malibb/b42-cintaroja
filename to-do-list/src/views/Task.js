import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from './../components/Layout';
import T from './../components/Task';
import axios from 'axios';

const Task = () => {
    const { id } = useParams();
    const [ task, setTask ] = useState({});
    const [ error, setError ] = useState(null);
    useEffect(() => {
        getTask();
    }, []);

    const getTask = () => {
        axios.get(`https://prueba-cinta-roja-mali.firebaseio.com/tasks/${id}.json`)
        .then(({data, status}) => {
            if (status === 200){
                setTask(data);
            }
        })
        .catch(({response}) => {
            setError(response.error);
        });
    }
    
    return(
    <Layout className="container mh-100" title="Home">
        <h1>Task</h1>
        <h2>{id}</h2>
        {
            error 
            ? <h1>No existe esa tarea</h1>
            : <T
            title={task.title} 
            time={task.time}
            description={task.description}
            done={task.done}
            priority={task.priority}
            />
        }
        <Link to="/">
            <button className="btn">Inicio</button>
        </Link>
    </Layout>
    );
};

export default Task;