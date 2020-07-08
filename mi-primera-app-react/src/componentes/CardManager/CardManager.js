import React, { useState, useEffect } from 'react';
import Card from './../Card/Card';
import './CardManager.css';
import axios from 'axios';

const CardManager = () => {
    // Como creamos un estado ? 
    // primero creamos una variable que se obtiene del método o hook useState
    const [data, setData] = useState([]);
    const [palabra, setPalabra] = useState('');
    const API_KEY = 'q97vCS1VN98OqonNcEonEOnf4D7El3ul';
    // data.map(() => );
    const pintarCartas = () => {
        return data.length > 0 
        ? data.map((item) => <Card key={item.id} src={item.images.downsized_large.url}></Card>)
        : <h1>No hay información.</h1>;
    }

    useEffect(()=>{
        getGifts();
    }, [palabra]);
    
    const getGifts = () => {
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${palabra}&limit=10&lang=es`)
        .then(({data, status}) => {
            setData(data.data);
        });
    };

    return (
        <>
        <label>Busca tus gifs favoritos!</label>
        <input 
        type="text" 
        placeholder="Escribe los gifs que buscas" 
        onChange={(event) => {
            setPalabra(event.target.value);
        }}/>
        {palabra}
        <div className="card-manager">
        {pintarCartas()}
        </div>
        </>
    );
};

export default CardManager;