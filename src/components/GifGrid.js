import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {

   // const [count, setCount] = useState(0);


   const [images, setImages] = useState([]);
    useEffect(()=> {
       // getGifs();
       getGifs(category)
            //.then(img => setImages(imgs))
            .then(setImages);
    }, [category])


   /* const  getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=zYNCTixSi5Vx3k8z4nOI8wsMzfBZoxU3`
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map (img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
        console.log(gifs);
        setImages(gifs);
    }*/

   // getGifs();
    return (
        <>
          <h3>{category}</h3>
        <div className="card-grid">
            
            
                {
                    images.map( img => (
                    <GifGridItem  
                    key={img.id}
                    //img={img}
                    { ...img }
                    />
                    ))
                }
           
            
        </div>
        </>
    )
}

// <button onClick={ ()=> setCount(count == 0)}>+</button>
//            <h3>{category}</h3>


/*

 <ol>
                {
                    images.map(({id, title}) => (
                    <li key={id}>{title}</li>
                    ))
                }
            </ol>

            */