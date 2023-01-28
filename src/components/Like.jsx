import React, {useState} from 'react'
import "../CSS/like.css";
import {  ThumbDownOutlined, ThumbUpOutlined } from '@material-ui/icons'



const Like = () => {

    const [likeColor, setLikeColor] = useState("gray")
    const [disLikeColor, setDisLikeColor] = useState("gray")
    const [likeCount, setLikeCount] = useState(0);

    const questionArr = JSON.parse(localStorage.getItem("questionAndAnswers"));
  
    const [data, setData] = useState(()=>{
      if(questionArr === null){
        return []
      }else{
        return questionArr;
      }
    })



    const que = data.filter((data)=>{
        // console.log("id", data.id, "p", param.id);
            let id = (data.id * 1)
            let p = (id * 1)
            if(id === p){
              return data;
            }
      })


    const setAns = () => {
        data.forEach((i)=>{
          console.log("dsa", i.id)
          let id = (data.id * 1)
          let p = (param.id * 1)
               if(i.id === p){
                i.like = likeCount;
              }
        })  
        // setAnswer("");
        localStorage.removeItem("questionAndAnswers")
        localStorage.setItem("questionAndAnswers", JSON.stringify([...data]));
        renderAtAddQuestion("/")
      }




    


    const handleLike = () => {
        if (likeColor === "gray") {
          setLikeColor("blue");
          setLikeCount(1);
          setDisLikeColor("gray")
        } else {
          setLikeColor("gray")
          setLikeCount(0)
        }
      }
    
      const handleDislike = () => {
        if (disLikeColor === "gray") {
          setDisLikeColor("black");
          setLikeColor("gray")
          setLikeCount(0)
        } else {
          setDisLikeColor("gray")
        }
      }
    



  return (
    <div>
         <button  className='likebtn' onClick={handleLike}> <span className='like-count'>{likeCount}</span> <ThumbUpOutlined  style={{ color: `${likeColor}`, cursor: "pointer",  }} /></button>
      
      <button  className='likebtn' onClick={handleDislike}> <ThumbDownOutlined  style={{  color: `${disLikeColor}`,  cursor: "pointer",}} /></button>
    </div>
  )
}

export default Like
