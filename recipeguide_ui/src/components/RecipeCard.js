import CustomImage from "./CustomImage"
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { useState, useEffect } from "react";
import {v4} from 'uuid';
import {useNotification} from "../Notifications/NotificationProvider";
import { useContext } from "react";
import { API } from "../api-service";
import { useCookies } from 'react-cookie';
export default function RecipeCard({recipe}){
    // NotificationManager.setPosition('top-right');
    const [recipeList, setRecipeList] = useState([])
    const [color, setColor] = useState('white');
    const [isHeartBeating, setIsHeartBeating] = useState(false);
    const [chefImage, setChefImage] = useState('');
    const [token] = useCookies(['recipe_token']);
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/favorite/",{
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
    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/chefs/${recipe.chef_id}`,{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['recipe_token']}`
                }
        })
        .then( resp => resp.json())
        .then(resp => setChefImage(resp.image))
        .catch( error => console.log(error))
    },[])
    useEffect(()=>{
        recipeList.map( rec =>{
            if(recipe.id == rec.recipe){
                setColor("red");
            }
        })
        console.log("recipeList ",recipeList);
    },[recipeList])

    const dispatch = useNotification();

    const handleClick = () =>{
        // NotificationManager.info("okay")
        if(color === 'white'){
            // setColor('red')
            setIsHeartBeating(true);
            setTimeout(() => {
                setIsHeartBeating(false)
            }, 1000);
            dispatch({
                type: "SUCCESS",
                message: `${recipe.name} recipe added to Favorites`,
                title: "Successful Request"
              });
            // NotificationManager.notify('success', 'Your message has been sent successfully');
              API.setFavorite({'recipe': recipe.id}, token);
        }
        else{
            setColor('white')
            setIsHeartBeating(true);
            setTimeout(() => {
                setIsHeartBeating(false)

            }, 1000);
            dispatch({
                type: "ERROR",
                message: `${recipe.name} recipe removed from Favorites`,
                title: "Successful Request"
              });
              API.removeFavorite(recipe.id, token);
              setTimeout(() => {
                window.location.reload();
            }, 3950);
            // window.location.reload();
            // NotificationManager.notify('success', 'Your message has been removed successfully');
        }

    }
    return (
        <div className="recipe-card ">
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={chefImage} alt=""/>
                <p className="recipe-title">{recipe.name}</p>
                <p className="recipe-desc">{recipe.description.slice(0,100)}</p>
                {/* <a className="view-btn" href=`/viewrecipe/${recipe.id}` >VIEW RECIPE</a>
                 */}
                 <div className="inline">
                    <a className="view-btn" href={`/viewrecipe/${recipe.id}`}>View Recipe</a>
                    <FiHeart size={22} color="red" fill={color}
                    onClick={handleClick} cursor={'pointer'} className={isHeartBeating ? 'heart-beat' : ''}/>
                 </div>
            </div>
        </div>
    )
}