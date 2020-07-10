import React, {useState, useEffect} from 'react';
import Layout from './../components/Layout';
import Task from './../components/Task';
import axios from 'axios';

const Home = () => {
    const [tasks , setTasks] = useState({});

    useEffect(() => {
        getTaks();
    }, []);

    const getTaks = () => {
        axios.get('https://prueba-cinta-roja-mali.firebaseio.com/tasks.json')
        .then(({data, status}) => {
            if (status === 200){
                setTasks(data);
            }
        });
    }

    const showTasks = () => {
        return Object.keys(tasks).length <= 0 
        ? <h1>No hay Tareas</h1>
        : Object.keys(tasks).map(task => <Task 
            key={task} 
            title={tasks[task].title} 
            time={tasks[task].time}
            />);
    }; 

    return(
    <Layout title="Home">
        {showTasks()}
    </Layout>
    );
};

export default Home;