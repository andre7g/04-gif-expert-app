import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {
    //const categories = ['Ral Madrid','Barcelona','Chelsea','ManU']
    const [categories, setcategories] = useState(['Ral Madrid','Barcelona','Chelsea','ManU'])
    // const handleAdd = () =>{
    //     //setcategories( [...categories,'Atleti'] );
    //     setcategories(cats=> [...cats,'City']);
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory/>
            <hr></hr>
            <ol>
                { 
                    //.map recibe dos elementos, indice y elemento
                    categories.map( category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}