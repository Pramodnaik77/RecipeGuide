import axios from 'axios';
import { useCookies } from 'react-cookie';
export class API{




    static loginUser(body){
        return fetch(`http://127.0.0.1:8000/auth/`,{
            method:'POST',
            headers:{
                'Content-type': 'application/json',
                },
            body: JSON.stringify(body)
        }).then( resp => resp.json())
    }

    static registerUser(body){
        return fetch(`http://127.0.0.1:8000/api/users/`,{
            method:'POST',
            headers:{
                'Content-type': 'application/json'
                },
            body: JSON.stringify(body)
        }).then( resp => resp.json())
    }
    static getRecipeList(body, token){
        return fetch(`http://127.0.0.1:8000/api/recipe/`,{
            method:'GET',
            headers:{
                'Content-type': 'application/json',
                'Authorization': `Token ${token['recipe_token']}`
                },
            body: JSON.stringify(body)
        }).then( resp => resp.json())
    }

    static getSingleRecipeList(id, token){
        return fetch(`http://127.0.0.1:8000/api/recipe/${id}`,{
            method:'GET',
            headers:{
                'Content-type': 'application/json',
                'Authorization': `Token ${token['recipe_token']}`
                },
        }).then( resp => resp.json())
    }
    // static getIngredientList(id){
    //     return fetch(`http://127.0.0.1:8000/api/recipe/${id}`,{
    //         method:'GET',
    //         headers:{
    //             'Content-type': 'application/json'
    //             },
    //     }).then( resp => resp.json())
    // }
    static setRecipe(formData){
        return fetch(`http://127.0.0.1:8000/api/recipe/`,{
            method:'POST',
            headers:{
                'Content-type': 'application/json'
                },
                body:JSON.stringify(formData),
        }).then( resp => resp.json())
    }
    static getIngredientList(id, token){
        return fetch(`http://127.0.0.1:8000/api/api/ingredient/${id}`,{
            method:'GET',
            headers:{
                'Content-type': 'application/json',
                'Authorization': `Token ${token['recipe_token']}`
                },
        }).then( resp => resp.json())
      };

      static setReview(id,formData, token){
        return fetch(`http://127.0.0.1:8000/api/recipe/${id}/`,{
            method:'PATCH',
            headers:{
                'Content-type': 'application/json',
                'Authorization': `Token ${token['recipe_token']}`
                },
                body:JSON.stringify(formData),
        }).then( resp => resp.json())
      };
    //   static setReview(id,formData){
    //     return axios.patch(`http://127.0.0.1:8000/api/recipe/${id}/`, formData, {
    //         headers: {
    //         'Content-Type': 'multipart/form-data',
    //         },
    //     });
    // }
    static  setFavorite(formData, token){
        return fetch(`http://127.0.0.1:8000/api/favorite/`,{
            method:'POST',
            headers:{
                'Content-type': 'application/json',
                'Authorization': `Token ${token['recipe_token']}`
                },
                body:JSON.stringify(formData),
        }).then( resp => resp.json())
      };
      static removeFavorite(id, token){
        return fetch(`http://127.0.0.1:8000/api/api/favorite/${id}`,{
            method:'DELETE',
            headers:{
                'Content-type': 'application/json',
                'Authorization': `Token ${token['recipe_token']}`
                },
        }).then( resp => resp.json())

      };
}