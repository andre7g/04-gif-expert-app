import React, {  } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    // const [images, setImages] = useState([]);
    // //solo llama a la funcion cuando renderiza por primera vez 

    const { data, loading } = useFetchGifs( category );
    //console.log(state)

    //getGifs();
    return (
        <>
            <h3>{category}</h3> 
            { loading && <p>Loading...</p> }
                <div className='card-grid'>
                <ol>
                    {
                        data.map( (img) => (
                            <GifGridItem 
                            key = {img.id}
                            {...img}
                            
                            />
                        ))
                    }
                </ol>
            </div>
        </>
    )
}