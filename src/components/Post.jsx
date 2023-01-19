import { Avatar } from '@material-ui/core'
import { ChatBubbleOutline, MoreHorizOutlined, ShareOutlined, ThumbDownOutlined, ThumbUpOutlined } from '@material-ui/icons'
import React, { useState, useContext } from 'react'
import "../CSS/post.css"
import { LoginContext } from './App';
import { Link } from 'react-router-dom';





function Post() {
  const {isLoggedIn, setIsLoggedIn, loggedInUser, setLoggedInUser } = useContext(LoginContext);


    const [likeColor,setLikeColor] = useState("gray")
    const [disLikeColor,setDisLikeColor] = useState("gray")

    const questionArr = JSON.parse(localStorage.getItem("questionAndAnswers"));

    const [data, setData] = useState(()=>{
      if(questionArr === null){
        return []
      }else{
        return questionArr;
      }
    }) 





    const handleLike = () =>{
            if(likeColor === "gray"){
                setLikeColor("blue");
                setDisLikeColor("gray")

            }else{
                setLikeColor("gray")
            }
    }

    const handleDislike = () => {
        if(disLikeColor === "gray"){
            setDisLikeColor("black");
            setLikeColor("gray")
        }else{
            setDisLikeColor("gray")
        }
    }
    
  return (
    <div>
        {
        data.map((data)=>(
            <div className='post' key={data.id}>
            <div className="post-info">
              <Avatar />
              
              <h5> {data.questionedBy} </h5>
              
              
              <small>Timestamp</small>
            </div>
            <div className="post-body">
              <div className="post-question">
                  <p >Question: {data.question}</p>
                  <Link className='post-btn' to={`/addanswer/${data.id}` }> <button className='post-btn'>Answer</button></Link>
              </div>
              <div className="post-answer">
                  <p>Answer: {data.answer}</p>
                  <span>{data.answeredBy}</span>
              </div>
              <img src="" alt="" />
            </div>
            <div className="post-footer">
              <div className="post-footerAction">
                 <button className='likebtn' onClick={handleLike}> <ThumbUpOutlined  style={{ cursor: "pointer",  
                   color: `${likeColor}`,
                   }} /></button>
      
                  <button className='likebtn' onClick={handleDislike}> <ThumbDownOutlined  style={{ cursor: "pointer",
                   color: `${disLikeColor}`
                   }} /></button>
              </div>
              <div className="">
                   <ChatBubbleOutline className='mui-icon'  style={{ cursor: "pointer",
                   marginRight: "40px",
                   color: "gray",
                   }  } />
                  <ShareOutlined  style={{ cursor: "pointer",
                   marginRight: "40px",
                   color: "gray",
                   }} />
                  <MoreHorizOutlined  style={{ cursor: "pointer",
                   marginRight: "40px",
                   color: "gray",
                   }} />
              </div>
            </div>
          </div>
        ))  
    }
    </div>
    
    
  )
}

export default Post
