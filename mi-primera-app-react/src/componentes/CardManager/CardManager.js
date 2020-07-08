import React, { useState, useEffect } from 'react';
import Card from './../Card/Card';
import './CardManager.css';
import axios from 'axios';

const CardManager = () => {
    // Como creamos un estado ? 
    // primero creamos una variable que se obtiene del método o hook useState
    const [data, setData] = useState([]);
    const [palabra, setPalabra] = useState('');
    const [indiceResultadoActual, setIndiceResultadoActual] = useState(0);
    const [totalElementos, setTotalElementos] = useState(0);
    const API_KEY = 'q97vCS1VN98OqonNcEonEOnf4D7El3ul';
    const numerDeElementosPorPeticion = 10;
    // data.map(() => );
    const pintarCartas = () => {
        return data.length > 0 
        ? data.map((item) => <Card key={item.id} src={item.images.downsized_large.url}></Card>)
        : <h1>No hay información.</h1>;
    }

    useEffect(()=>{
        getGifts();
    }, [palabra, indiceResultadoActual]);

    const getGifts = () => {
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${palabra}&limit=${numerDeElementosPorPeticion}&offset=${indiceResultadoActual}&lang=es`)
        .then(({data, status}) => {
            setData(data.data);
            setTotalElementos(data.pagination.total_count);
            // if(palabra.length > 0) setPalabra();
            // numero de elementos que trae de resultado
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
        <h1>{palabra}</h1>
        <h1>{indiceResultadoActual}</h1>
        <button onClick={()=>{
            setIndiceResultadoActual(
                // 10                         = 10 < (13 )
                // 15                         = 25 < (13 )
                indiceResultadoActual < totalElementos 
                ? indiceResultadoActual + numerDeElementosPorPeticion
                : indiceResultadoActual
            );
        }}>Siguiente Página</button>
        <button onClick={()=>{
            setIndiceResultadoActual(
                indiceResultadoActual - numerDeElementosPorPeticion >= 0
                ? indiceResultadoActual - numerDeElementosPorPeticion
                : indiceResultadoActual
            );
        }}>Anterior Página</button>
        <div className="card-manager">
        {pintarCartas()}
        </div>
        </>
    );
};

export default CardManager;