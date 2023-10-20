import RecipeCard from "../components/RecipeCard"
import API from "../api-service"
import React,{ useState, useEffect} from 'react'
import { useCookies } from 'react-cookie';
export default function Favorites(){


    const [recipeList, setRecipeList] = useState([])
    const [token] = useCookies(['recipe_token']);
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/api/favorites/",{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['recipe_token']}`
                }
        })
        .then( resp => resp.json())
        .then(resp => setRecipeList(resp))
        .catch( error => console.log(error))
    },[])
    return (
        <div>
            {/* <PreviousSearches /> */}
            <div className="recipes-container">
                {recipeList.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />

                ))}
            </div>
        </div>
    )
}