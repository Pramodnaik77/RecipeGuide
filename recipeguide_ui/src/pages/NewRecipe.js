import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"
import {API} from "../api-service"
import React,{ useState, useEffect} from 'react'
import { useCookies } from 'react-cookie';
export default function NewRecipe(){
    const formData =     {
        "name": "Chicken Pan Pizza",
        "image": "/img/gallery/img_1.jpg",
        "chef_id": 2,
        "chef_image": "/img/",
        "category": "cinese",
        "description": "sdns",
        "video_link": "/dwkjjdw",
        "rating": 4,
        "review": "wqwqw"
    };
    const handleError = () => {
        alert("error");
    }
    const handleClick = () =>{
        console.log("clickefd")
        fetch(`http://127.0.0.1:8000/api/recipe/`,{
            method:'POST',
            headers:{
                'Content-type': 'application/json'
                },
                body:JSON.stringify(formData),
        }).then( resp => {
            if(resp.status == 400)
                console.log("erororrrrr1");
            else
                console.log("No error")
            console.log(resp);
        })
        .catch( error => {
            console.log("erororrrrr2");
            console.log(error);
        })
    }
    return (

        <button onClick={handleClick} >Click</button>

    )
    }