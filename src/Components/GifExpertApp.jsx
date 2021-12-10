import React, {useState} from 'react'
import AddCategory from './AddCategory'
import GifGrid from './GifGrid'

const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            
            <ol>
                {categories&& categories.map((categorie)=> 
                <GifGrid 
                category={categorie}
                key={categorie}
                /> )}
            </ol>
            
        </>
    )
}


export default GifExpertApp
