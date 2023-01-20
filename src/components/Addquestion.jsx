import React, { useState, useContext, useEffect } from 'react'
import "../CSS/addquestion.css";
import { LoginContext } from './App';
// import Login from './Login';
import { useNavigate } from 'react-router-dom';




function Addquestion() {
  
  const renderAtAddQuestion = useNavigate();
 

  const {isLoggedIn, setIsLoggedIn, loggedInUser, setLoggedInUser } = useContext(LoginContext);

  console.log("check", loggedInUser);

  const questiondb =  JSON.parse(localStorage.getItem("questionAndAnswers"));

  console.log(questiondb)

  const [questionData, setQuestionData] = useState({
    id:"",
   answeredBy: "",
    questionedBy: "",
    question: "",
    answer: ""

  }) 

  const [data, setData] = useState(()=>{
    if(questiondb === null){
      return []
    }else{
      return questiondb;
    }
  })
    console.log(data);

  const [id, setId] = useState(()=>{
    if(questiondb === null){
      return 1;
    }else{
      return (questiondb[0].id * 1)+1 ;
    }
  });

  const [inputdata, setInputData] = useState("");
 
  const getData = (e) => {

    const {value, name} = e.target ;
    setInputData(e.target.value)
    setQuestionData (()=>{
        return {
          ...questionData, 
          [name]: value,
          questionedBy: loggedInUser.username,
          id: id
        }
    })
}

const addData = (e) => {
  e.preventDefault();

      setId(id + 1);

      localStorage.setItem("questionAndAnswers", JSON.stringify([questionData, ...data]));
      const temp = [questionData, ...data];
      
      setData(()=>{
        return temp;
      })
      setInputData("")
    renderAtAddQuestion("/")

}

  return (
      <>
      {
        isLoggedIn ? ( <div className='addquestion-box'>
        <input className='question-input' type="text" name='question' value={inputdata} onChange={getData} placeholder='Type your Question here...' />
        <div className='btn'>
        </div>
        <div className="question-btn">
        <button>cancel</button>
        <button onClick={addData}>Add Question</button>
        </div>
    </div> ) : window.location.assign("/userlogin") 
      }
    </>
  )
}

export default Addquestion
