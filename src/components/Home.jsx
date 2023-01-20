import React, {useContext, useState} from 'react'
import "../CSS/home.css";
import Quorabox from './Quorabox';
import {Link } from "react-router-dom";
import Post from './Post';
import { LoginContext } from './App';
import { Avatar } from '@material-ui/core';




function Home() {
  const {isLoggedIn , setIsLoggedIn, loggedInUser, setLoggedInUse} = useContext(LoginContext);

  const QuestionArr = JSON.parse(localStorage.getItem("questionAndAnswers"));

  const [data, setData] = useState(()=>{
    if(QuestionArr === null){
      return [];
    }else{
      return QuestionArr;
    }
  })

  return (
    <div className='home'>
      <section className='left' >
         <Link to={"/addquestion"} ><Quorabox /> </Link>
           <Post />
           
      </section>
      <section className='right' >
            <div className='question_bar' >
                  <h2>Questions List</h2>
                  {
                   data.map((i)=>{
                    return (
                      <p>{i.question}</p>
                    )
                   }) 
                  }
                  
            </div>
      </section>  
     
    </div>
    
  )
}

export default Home
