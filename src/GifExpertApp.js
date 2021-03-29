import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    //const categories = ['Ral Madrid','Barcelona','Chelsea','ManU']
    const [categories, setcategories] = useState(['Ral Madrid'])
    // const handleAdd = () =>{
    //     //setcategories( [...categories,'Atleti'] );
    //     setcategories(cats=> [...cats,'City']);
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories = {setcategories} />
            <hr></hr>
            <ol>
                { 
                    //.map recibe dos elementos, indice y elemento
                    categories.map( category => {
                        return <GifGrid 
                                key={category}
                                category = {category}
                                />
                    })
                }
            </ol>
        </>
    )
}