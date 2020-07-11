import React, {useState, useEffect} from 'react';
import Layout from './../components/Layout';
import Task from './../components/Task';
import axios from 'axios';

const Home = () => {
    const [tasks , setTasks] = useState({});
    const [ error, setError ] = useState(null);

    useEffect(() => {
        getTaks();
    }, []);

    const getTaks = () => {
        axios.get('https://prueba-cinta-roja-mali.firebaseio.com/tasks.json')
        .then(({data, status}) => {
            if (data !== null){
                setTasks(data);
            } else {
                setError('No hay tareas');
            }
        })
        .catch(({response}) => {
            setError(response);
        });
    }

    const showTasks = () => {
        return error
        ? <h1>{error}</h1>
        : Object.keys(tasks).map(task => <Task 
            key={task} 
            id={task}
            title={tasks[task].title} 
            time={tasks[task].time}
            description={tasks[task].description}
            done={tasks[task].done}
            priority={tasks[task].priority}
            isHome={true}
            />);
    }; 

    return(
    <Layout title="Home">
        <div className="d-flex justify-content-center flex-wrap overflow-auto " >
            {showTasks()}
        </div>
    </Layout>
    );
};

export default Home;