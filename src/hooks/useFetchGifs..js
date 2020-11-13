import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGif = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

//efectos no pueden ser async
    useEffect(()=> {
    
        getGifs(category)
             .then(imgs => {
                 console.log(imgs)
                 setstate({
                     data: imgs,
                     loading: false
                 })
             });
     }, [category])


    
    return state; //{data:[], loading: true}
}


/*
setTimeout(() => {
        setstate({
            data: [1,2,3,4,5,6,7,],
            loading: false
        });
    }, 3000);

*/