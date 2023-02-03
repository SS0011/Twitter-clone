import React from "react";
import style from "./ThreadPage.module.css";
import { BsArrowLeft } from "react-icons/bs";
import LeftSection from "../../Section/LeftSection/LeftSection";
import RightSection from "../../Section/RightSection/RightSection";
import { Link, useNavigate } from "react-router-dom";
import {Thread, ThreadofMinePOst} from '../../RecoilState/Thread/Thread'
import { useRecoilValue } from "recoil";
import { BiMessageRounded } from "react-icons/bi";
import { CgPoll } from "react-icons/cg";
import { FaRetweet } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import LikeButton from "../../Atom/LikeButton/LikeButton";
import CommentBox from "../../Component/CommentBox/CommentBox";
import { myCommentReplyState} from "../../RecoilState/CommentReplyState/myCommentReplyState";
import { LinearProgress } from "@mui/material";


export default function MySatusPage() {
let naviagte = useNavigate()
let matchedUserData = JSON.parse(localStorage.getItem("matchedUser"))
const postComment = useRecoilValue(myCommentReplyState)

 const threadOfLogUser = useRecoilValue(ThreadofMinePOst) // mine log uswer detail post
 console.log(threadOfLogUser , "I am from thread or status of particular user post")
 

 
 function redirectToProfile() {
 naviagte(`/profile/${matchedUserData.Name}`)
}

 function handleArrow() {
    naviagte('/home')
  }
  
  return (
    <>
      <div className={style.main}>
        <div style={{ border: "0px solid" }}>
          <LeftSection />
        </div>

        <div style={{ border: "1px solid  rgb(209, 209, 209)" }}>
        <div className={style.box}>
        <span  onClick={handleArrow} className={style.arrow}>
          <BsArrowLeft  />
          </span>
          <h3>Tweet</h3>
        </div>
{
    //this is modification of user side post woith css
}
  
        <div>
        <div className={style.postContainer} >
       
     {
      //self profile  page  redirect
     } 
    
     <img
     onClick={()=>redirectToProfile()}
       className={style.userProfle}
       src="https://tse1.mm.bing.net/th?id=OIP.Lui6lVdzvecYDAJ_ahUOawAAAA&pid=Api&P=0"  // constant rkhege iskko
       alt="profilePic"
     />
    
     
    
       <div>
         <span className={style.postUserName}>{matchedUserData.Name}</span><br/>
         <span className={style.postHandleName}>
           {matchedUserData.Name.toLowerCase()+"@"}
         </span>
       </div>
       </div>
       <div className={style.postSubContainer}>
      
       
       <span className={style.tweetText}>{threadOfLogUser.tweetText}</span>
       {threadOfLogUser.tweetPic ?
       <img
         className={style.tweetPic}
         src={threadOfLogUser.tweetPic}
         alt="tweetPic"
         width="560rem"
       />
       : ""}
       
       <span className={style.iconsWrapper}>
       <span className={style.subIconsWrapper}>
         <BiMessageRounded className={style.icons} />
         <span className={style.iconText}>
         {}
         </span>
         </span>
         <span  className={style.subIconsWrapper}>
         <FaRetweet className={style.icons} />
         <span className={style.iconText}>
         {}
         </span>
         </span>
         <span  className={style.subIconsWrapper}>
         <LikeButton />
         <span className={style.iconText}>
         {}
         </span>
         </span>
         <span  className={style.subIconsWrapper}>
         <CgPoll className={style.icons} />
         <span className={style.iconText}>
         {}
         </span>
         </span>
         <BsUpload className={style.icons} />
       </span>
       </div>
       
     
    
        </div> 

        <div>
      
        </div>



       
      <CommentBox replyToName={matchedUserData.Name}/>

      {
        //comments
      }
  
      
  <div >
  <div >
  { postComment.map(x=>
    <>
    <div className={style.commentMain}>
     <h4><img src="https://tse2.mm.bing.net/th?id=OIP.1yoSL-WO0YU5mQKROudvswHaHa&pid=Api&P=0"  alt= "comment profile" className={style.avatar}/></h4>
     <div className={style.commenSubMain}>

     <div className={style.commentNameHandleNAme}>
     <span className={style.commenSubName}>{x.name}</span>
     <span className={style.commenSubName}>{x.handlerName}</span>

     </div>

     <p className={style.tweetCommentText}>{x.tweetReplyText}</p>
     <span className={style.iconsCommentWrapper}>
     <span className={style.subIconsWrapper}>
       <BiMessageRounded className={style.icons} />
       <span className={style.iconText}>
      {}
       </span>
       </span>
       <span  className={style.subIconsWrapper}>
       <FaRetweet className={style.icons} />
       <span className={style.iconText}>
       {}
       </span>
       </span>
       <span  className={style.subIconsWrapper}>
       <LikeButton />
       <span className={style.iconText}>
       {}
       </span>
       </span>
       <span  className={style.subIconsWrapper}>
       <CgPoll className={style.icons} />
       <span className={style.iconText}>
       {}
       </span>
       </span>
       <BsUpload className={style.icons} />
     </span>
     </div>
     </div>
     </>
     )}
   </div>

      </div>
 

      </div>

{
    //right section
}
        <div style={{ border: "0px solid" }}>
          <RightSection />
        </div>
      </div>
    </>
  );
}
