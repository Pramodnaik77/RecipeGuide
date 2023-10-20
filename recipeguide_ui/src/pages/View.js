import React, { useEffect, useState } from 'react'
import { API } from '../api-service';
import Review from '../components/Review'
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
export default function View() {
    const [recipe, setRecipe] = useState([])
    const [ingredient, setIngredients] = useState([])
    const {id} = useParams();
    const [token , setToken] = useCookies(['recipe_token']);
    useEffect( () => {
        API.getSingleRecipeList(id, token)
        .then(resp => setRecipe(resp))
        .catch( error => console.log(error))

      },[id]);

      useEffect( () => {
        API.getIngredientList(id, token)
        .then(resp => setIngredients(resp))
        .catch( error => console.log(error))
      },[]);

//   const first=[{
//     title:"Grilled Bone-In Chicken Thighs",
//     id:"1",
//     img:"/img/gallery/img_6.jpg",
//     intru:"How can such a simple recipe for grilled chicken thighs taste so flavorful and satisfying? Once you sink your teeth into the super-crispy skin and find rich, tasty dark meat waiting underneath, you’ll understand. This low and slow cooking method yields tender, succulent meat with carefully developed flavors. Make grilled chicken thighs the simple way, because juicy, decadent chicken doesn’t have to be so complicated.",
//     step:[ '1/2 cup black iced tea', ' 1/4 cup lemonade',' Lemon slices for garnish, optional','1/2 cup (29 g) Assam tea','4 cups cold water'],

//   },
// ]
      console.log("ingrednjqsdjbjqhwd ",ingredient)
      console.log("recipe ",recipe)
  return (
    <div>
    {/* {recipe.map((recipe,index) => ( */}
     <Review id={id} recipe={recipe} ingredient={ingredient}/>

  {/* ))} */}

  </div>


  )
}