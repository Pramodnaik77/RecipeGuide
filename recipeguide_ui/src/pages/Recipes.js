import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"
import API from "../api-service"
import React,{ useState, useEffect} from 'react'
import { useCookies } from 'react-cookie';
export default function Recipes(){
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
        },
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
        }
        ,
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
        },
        // {
        //     title: "Chicken Pan Pizza",
        //     image: "/img/gallery/img_1.jpg",
        //     authorImg: "/img/top-chiefs/img_1.jpg",
        // },
        // {
        //     title: "Spaghetti and Meatballs",
        //     image: "/img/gallery/img_4.jpg",
        //     authorImg: "/img/top-chiefs/img_2.jpg",
        // },
        // {
        //     title: "American Cheese Burger",
        //     image: "/img/gallery/img_5.jpg",
        //     authorImg: "/img/top-chiefs/img_3.jpg",
        // },
        // {
        //     title: "Mutton Biriyani",
        //     image: "/img/gallery/img_6.jpg",
        //     authorImg: "/img/top-chiefs/img_5.jpg",
        // },
        // {
        //     title: "Japanese Sushi",
        //     image: "/img/gallery/img_10.jpg",
        //     authorImg: "/img/top-chiefs/img_6.jpg",
        // },
        // {
        //     title: "American Cheese Burger",
        //     image: "/img/gallery/img_5.jpg",
        //     authorImg: "/img/top-chiefs/img_3.jpg",
        // },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
        }
    ].sort(() => Math.random() - 0.5)

    // API.getRecipe()
    const [recipeList, setRecipe] = useState([]);
    const [token , setToken] = useCookies(['recipe_token']);
    const [isEmpty, setIsEmpty] = useState(true)
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/recipe/",{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['recipe_token']}`
                }
        })
        .then( resp => resp.json())
        .then(resp => setRecipe(resp))
        .catch( error => console.log(error))
    },[])
    useEffect(()=>{
        if(recipeList.length > 0)
            setIsEmpty(false);
    },[recipeList])
    // console.log('recipe'+recipeList);
    // recipeList.map(recipe =>{
    //     console.log("Recipelist "+recipe.name);
    // })

    return (

        <div>{isEmpty ?
            (<div>
                <h2>Sign in to view recipe</h2>
                <a href="/login">Login</a>
            </div>
            ):
            (<div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipeList.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
            </div>)
            }
        </div>
    )
}