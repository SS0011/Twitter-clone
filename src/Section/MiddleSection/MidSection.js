import React, { useState } from "react";
import MidTweetBox from "../../Component/MiddleTweetBox/MidTweetBox";
import style from "./MidSection.module.css";
import { Post } from "../../RecoilState/Post/Post";
import { useRecoilState, useRecoilValue } from "recoil";
import { BiMessageRounded } from "react-icons/bi";
import { CgPoll } from "react-icons/cg";
import { FaRetweet } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import UserSidePost from "../../Component/UserSidePost/UserSidePost";
import LikeButton from "../../Atom/LikeButton/LikeButton";
// import { TweetProfileDetails } from "../../RecoilState/TweetProfileDetails/TweetProfileDetails";
import { useNavigate } from "react-router-dom";
import { Thread } from "../../RecoilState/Thread/Thread";

export default function MidSection() {
  const postData = useRecoilValue(Post);
  const [threadData ,setThreadData] = useRecoilState(Thread)
  const [ likesCounting ,setLikesCounting] = useState(115)
  const navigate = useNavigate()
//   const [TweetDetailsProfile , setTweetDetailsProfile] = useRecoilState(TweetProfileDetails)
  
//   const [likes ,setLikes]=useState('')

  function handleLike() {
  
    // let likeVariable = element.tweets[0].likesCount
    // postData.map(elem => {
    //     if(elem.)
    // })
   
    // setLikes(like)
    // if(element.id === postData[0].id){
    // setLikes(element.tweets[0].likesCount + 1)
    // }
    if( likesCounting === 115) setLikesCounting(likesCounting + 1)
   else setLikesCounting(115)
   
  }

  function redirectToProfile(element) {
    console.log(element,"i ma like count friom")
    // setTweetDetailsProfile(element)
    localStorage.setItem("otherUserDetails",JSON.stringify(element))
    navigate('/otherprofile')
  }
 
  function redirectToThreadOrTweetPage(e) {
    console.log(e , "i am thred post to be set on recoil form mid sec")
    setThreadData(e)
    navigate('/status')
  }

  return (
    <>
      <div className={style.main}>
        <div className={style.subMain}>
          <h3 className={style.head}>Home</h3>
          <div className={style.container}>
            <h4 className={style.forYou}>For You</h4>
            <h4 className={style.forYou}>Following</h4>
          </div>
        </div>
        <MidTweetBox />

        <UserSidePost/>
      
       
     

        {
          //jagduiush sir ka data
        }
        {postData.map((element, index) => (
          <div className={style.postContainer} key={element.name}>
            <img
            onClick={()=>redirectToProfile(element)}
              className={style.userProfle}
              src={element.tweets[0].tweetPic}
              alt="profilePic"
            />
            <div  className={style.postSubContainer}>
              <div>
                <span className={style.postUserName}>{element.name}</span>
                <span className={style.postHandleName}>
                  {element.handlerName}
                </span>
            {
              //twet text and tweet big pic
            }
              <div onClick={()=>redirectToThreadOrTweetPage(element)}>
              <span>{element.tweets[0].tweetText}</span>
              <img
                className={style.tweetPic}
                src={element.tweets[0].tweetPic}
                alt="tweetPic"
                width="450rem"
              />
              </div>
              <span className={style.iconsWrapper}>
              <span className={style.subIconsWrapper}>
                <BiMessageRounded className={style.icons} />
                <span className={style.iconText}>
                {element.tweets[0].tweetCount}
                </span>
                </span>
                <span  className={style.subIconsWrapper}>
                <FaRetweet className={style.icons} />
                <span className={style.iconText}>
                {element.tweets[0].retweetCount}
                </span>
                </span>
                <span  className={style.subIconsWrapper}>
                <span onClick={()=>handleLike()}><LikeButton /></span>
              {
                //element.tweets[0].likesCount
            }
            {likesCounting}
                </span>
                <span  className={style.subIconsWrapper}>
                <CgPoll className={style.icons} />
                <span className={style.iconText}>
                {element.tweets[0].viewsCount}
                </span>
                </span>
                <BsUpload className={style.icons} />
              </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
