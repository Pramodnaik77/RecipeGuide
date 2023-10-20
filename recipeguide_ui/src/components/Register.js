import React, { useState } from 'react';
import "../styles/login.css";
import { API } from '../api-service';
import { useCookies } from 'react-cookie';
export default function Register() {

    const [username , setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token] = useCookies('recipe_token')

    const registerClicked = ()=>{
        // console.log("login clicked " , token);
        API.registerUser({username, password})
            .then(resp => window.location.href= '/login')
            .catch( error => console.log(error))
    }

    return (
      <>
        <div class="signup-box">
            <h1>Sign Up</h1>
            <div class="registerform">
                <label class="lab">First Name</label>
                <input class="in" type="text" placeholder="" />
                <label class="lab">Last Name</label>
                <input  class="in" type="text" placeholder="" />
                <label class="lab">Email</label>
                <input class="in" type="email" placeholder=""
                value={username}
                onChange={evt=> setUsername(evt.target.value)}/>
                <label class="lab">Password</label>
                <input class="in" type="password" placeholder=""
                value={password}
                onChange={evt=> setPassword(evt.target.value)}/>
                <label class="lab" >Confirm Password</label>
                <input class="in" type="password" placeholder="" />
                <button onClick={registerClicked} class="sub" >  Submit</button>
                <p class="para-2">
                Already have an account? <a href="/login">Login?</a>
                </p>
            </div>
    </div>
    </>

    )
}