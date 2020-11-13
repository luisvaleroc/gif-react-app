import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//const categories = ['One Punch', 'Samurai X', 'Dragon Ball']

export const GifExpertApp = () => {
    
    const [categories, setcategories] = useState(['Dragon Ball'])

    const handdleAdd = () => {
        //setcategories([...categories, 'luis']);
       // setcategories(cats=> [...cats, 'Luisito']);
    }

    return (      
    <>
        <h2>GifExpertApp</h2>
        <hr />
        <AddCategory setcategories={ setcategories } />
        <ol>
            {
                //(category, i)
                categories.map(category => (
                    //{
                //return <li key={category}> { category } </li>

                //}
                <GifGrid 
                    key={category} 
                    category={category} 
                    />
                ))
            }
        </ol>
        <hr />
    </>
    
    )
}

