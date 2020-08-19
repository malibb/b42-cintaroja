import React from 'react';
import Layout from './../components/Layout';
import { Link } from 'react-router-dom';

const P404 = () => {
    return(
    <Layout>
        <div className="row">
            <img src="https://http.cat/404" alt="img"></img>
        </div>
        <Link to="/">
            <button className="btn-primary">Inicio</button>
        </Link>
    </Layout>);
};

export default P404;