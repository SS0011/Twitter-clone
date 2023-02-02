import React from "react";
import style from "./ThreadPage.module.css";
import { BsArrowLeft } from "react-icons/bs";
import LeftSection from "../../Section/LeftSection/LeftSection";
import RightSection from "../../Section/RightSection/RightSection";
import { useNavigate } from "react-router-dom";
import {Thread} from '../../RecoilState/Thread/Thread'
import { useRecoilValue } from "recoil";
import { BiMessageRounded } from "react-icons/bi";
import { CgPoll } from "react-icons/cg";
import { FaRetweet } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import LikeButton from "../../Atom/LikeButton/LikeButton";
import CommentBox from "../../Component/CommentBox/CommentBox";


export default function ThreadPage() {
let naviagte = useNavigate()
 const threadReadDetails = useRecoilValue(Thread)  //threadREaddetail is an object  /empty

 console.log(threadReadDetails , "I am from thread or status of particular user post")
 

 
 function redirectToProfile() {
  console.log(threadReadDetails,"i ma like count friom")
  // setTweetDetailsProfile(element)
  localStorage.setItem("otherUserDetails",JSON.stringify(threadReadDetails))
  naviagte('/otherprofile')
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
        <div className={style.postContainer} key={threadReadDetails.name}>
       
     {
      //other profile  page  redirect
     } 
     <img
     onClick={()=>redirectToProfile()}
       className={style.userProfle}
       src={threadReadDetails.tweets[0].tweetPic}
       alt="profilePic"
     />
    
     
    
       <div>
         <span className={style.postUserName}>{threadReadDetails.name}</span><br/>
         <span className={style.postHandleName}>
           {threadReadDetails.handlerName}
         </span>
       </div>
       </div>
       <div className={style.postSubContainer}>
      
       
       <span className={style.tweetText}>{threadReadDetails.tweets[0].tweetText}</span>
       {threadReadDetails.tweets[0].tweetPic ?
       <img
         className={style.tweetPic}
         src={threadReadDetails.tweets[0].tweetPic}
         alt="tweetPic"
         width="560rem"
       />
       : ""}
       <span className={style.iconsWrapper}>
       <span className={style.subIconsWrapper}>
         <BiMessageRounded className={style.icons} />
         <span className={style.iconText}>
         {threadReadDetails.tweets[0].tweetCount}
         </span>
         </span>
         <span  className={style.subIconsWrapper}>
         <FaRetweet className={style.icons} />
         <span className={style.iconText}>
         {threadReadDetails.tweets[0].retweetCount}
         </span>
         </span>
         <span  className={style.subIconsWrapper}>
         <LikeButton />
         <span className={style.iconText}>
         {threadReadDetails.tweets[0].likesCount}
         </span>
         </span>
         <span  className={style.subIconsWrapper}>
         <CgPoll className={style.icons} />
         <span className={style.iconText}>
         {threadReadDetails.tweets[0].viewsCount}
         </span>
         </span>
         <BsUpload className={style.icons} />
       </span>
       </div>
     
    
        </div> 

        <div>
        
        </div>



       
      <CommentBox replyToName= {threadReadDetails.handlerName}/>

      {
        //comments
      }
  
      
  <div >
     {threadReadDetails.tweets[0].TweetReplies.map(x=>
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
          {threadReadDetails.tweets[0].tweetCount}
          </span>
          </span>
          <span  className={style.subIconsWrapper}>
          <FaRetweet className={style.icons} />
          <span className={style.iconText}>
          {threadReadDetails.tweets[0].retweetCount}
          </span>
          </span>
          <span  className={style.subIconsWrapper}>
          <LikeButton />
          <span className={style.iconText}>
          {threadReadDetails.tweets[0].likesCount}
          </span>
          </span>
          <span  className={style.subIconsWrapper}>
          <CgPoll className={style.icons} />
          <span className={style.iconText}>
          {threadReadDetails.tweets[0].viewsCount}
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
