import React, { useEffect, useState } from 'react'
import "../styles/login.css";
import { API } from '../api-service';
import { useCookies } from 'react-cookie';

export default function Login() {

  const [username , setUsername] = useState('');
  const [password, setPassword] = useState('');


  const [token , setToken] = useCookies(['recipe_token']);

  useEffect( () => {
    console.log("token "+token['recipe_token']);
    if(token['recipe_token'] != undefined ){ window.location.href = '/recipes';}
    else{
      console.log("eroor in register");
      token['recipe_token'] = null;
    }

  },[token]);

  const loginClicked = ()=>{
    console.log("login clicked");
    API.loginUser({username, password})
          .then(resp => setToken('recipe_token',resp.token))
          .catch( error => console.log(error))
  }
  return (
    <>
    <div class="login-box">
      <h1>Login</h1>
      <div class="loginform">
      {/* <form action="/" > */}
        <label class="lab" for="email">Email</label>
        <input type="email" class="in" id="email" placeholder="" value={username}
          onChange={evt=> setUsername(evt.target.value)}/>
        <label class="lab" for="pass">Password</label>
        <input type="password" class="in" id="pass" placeholder="" value={password}
          onChange={evt=> setPassword(evt.target.value)} />
        {/* <input onClick={loginClicked} type="button" value="Submit"  />
         */}
        <button onClick={loginClicked} class="sub" >Submit</button>
      {/* <closeform></closeform></form> */}
    </div>
    <p class="para-2">
      Not have an account? <a href="/Register">Register?</a>
    </p>
    </div>
  </>

  )
}