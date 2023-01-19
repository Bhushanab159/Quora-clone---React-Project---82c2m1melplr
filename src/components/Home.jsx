import React, {useContext} from 'react'
import "../CSS/home.css";
import Quorabox from './Quorabox';
import {Link } from "react-router-dom";
import Post from './Post';
import { LoginContext } from './App';
import { Avatar } from '@material-ui/core';




function Home() {
  const {isLoggedIn , setIsLoggedIn, loggedInUser, setLoggedInUse} = useContext(LoginContext);

 

  return (
    <>
    <div className='home'>
      <section className='left' >
           <Quorabox />
           <Post />
           
      </section>
      <section className='right' >
            <div className='question_bar' >
                  <h2>Questions List</h2>
                  <p>What color is the sky?</p>
            </div>
      </section>  
     
    </div>
    
</>
  )
}

export default Home
