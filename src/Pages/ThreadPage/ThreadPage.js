import React from "react";
import style from "./ThreadPage.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
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


export default function ThreadPage() {
let naviagte = useNavigate()
 const threadReadDetails = useRecoilValue(Thread)

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
          <h3>Thread</h3>
        </div>
{
    //this is modification of user side post woith css
}
        <div>
        <div className={style.postContainer} key={threadReadDetails.name}>
       
     <img
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
      
      </div>

        <div style={{ border: "0px solid" }}>
          <RightSection />
        </div>
      </div>
    </>
  );
}
