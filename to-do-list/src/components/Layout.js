import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({title,children}) => {
    return(
        <div className="container">
        <Navbar title={title}/>
        {children}
        <Footer/>
        </div>
    );
}

export default Layout;