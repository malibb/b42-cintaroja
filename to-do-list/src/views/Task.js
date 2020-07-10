import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from './../components/Layout';

const Task = () => {
    const { id } = useParams();
    return(
    <Layout className="container mh-100" title="Home">
        <h1>Task</h1>
        <h2>{id}</h2>
        <Link to="/">
            <button className="btn">Inicio</button>
        </Link>
    </Layout>
    );
};

export default Task;