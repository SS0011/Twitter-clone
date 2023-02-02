import React from "react";
import Style from "./ProfilePage.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import LeftSection from "../../Section/LeftSection/LeftSection";
import RightSection from "../../Section/RightSection/RightSection";
import { useNavigate } from "react-router-dom";
import { BiMessageRounded } from "react-icons/bi";
import { CgPoll } from "react-icons/cg";
import { FaRetweet } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import LikeButton from "../../Atom/LikeButton/LikeButton";
import { Thread } from "../../RecoilState/Thread/Thread";
import { useRecoilState } from "recoil";

// import { TweetProfileDetails } from "../../RecoilState/TweetProfileDetails/TweetProfileDetails";
// import { useRecoilState } from "recoil";

export default function OtherProfilePage() {
 const[threadStatus , setThreadStatus] = useRecoilState(Thread)
 const UserTweets = JSON.parse(localStorage.getItem("otherUserDetails"))
  console.log(UserTweets.tweets[0].tweetPic
    , "i amm from profile page");
  const naviagte = useNavigate()
  const date = new Date();
  let joinedDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
  }).format(date);

  function handleArrow() {
    naviagte('/home')
  }

  function redirectToThreadPage() {
    setThreadStatus(UserTweets)
    naviagte('/status')
  }
  return (
    <>
      <div className={Style.main}>
        <div style={{ border: "0px solid" }}>
          <LeftSection />
        </div>

        <div style={{ border: "1px solid  rgb(209, 209, 209)" }}>
    
          <div className={Style.box}>
          <span  onClick={handleArrow} className={Style.arrow}>
            <BsArrowLeft  />
            </span>
            <h3>{UserTweets.name}</h3>
          </div>
          <div className={Style.wallpaper}></div>
          <div className={Style.mainUserData}>
            <div className={Style.userData}>
              <div><img  className={Style.userProflePic} src={ UserTweets.tweets[0].tweetPic } alt="pop" /></div>
              <h3 className={Style.UpUserName}>{UserTweets.name} </h3>
              <span>{UserTweets.handlerName}</span>
              <div className={Style.joined}>
                <CgCalendarDates className={Style.calender} />
                <p>Joined {UserTweets.joinedDate}</p>
              </div>
              <div className={Style.follower}>
                <div className={Style.subFollower}>
                  <p>112</p>
                  <p>Following</p>
                </div>
                <div className={Style.subFollower}>
                  <p>127.5M</p>
                  <p>Followers</p>
                </div>
              </div>
            </div>
          </div>
          <div className={Style.option}>
          <h4 className={Style.optionCategory}>Tweets</h4>
          <h4 className={Style.optionCategory}>Tweets & Replies</h4>
          <h4 className={Style.optionCategory}>Media</h4>
          <h4 className={Style.optionCategory}>Likes</h4>
          </div>

          <div className={Style.postContainer}>
          <img
         
            className={Style.userProfle}
            src={UserTweets.tweets[0].tweetPic}
            alt="profilePic"
          />
          <div className={Style.postSubContainer}>
          <div>
          <span className={Style.postUserName}>{UserTweets.name}</span>
          <span className={Style.postHandleName}>
            {UserTweets.handlerName}
          </span>
        </div>
        <div onClick={redirectToThreadPage}>
        <span>{UserTweets.tweets[0].tweetText}</span>

          <img   className={Style.tweetPic}  width="450rem" src={ UserTweets.tweets[0].tweetPic } alt="pop" />

          </div>
          <span className={Style.iconsWrapper}>
              <span className={Style.subIconsWrapper}>
                <BiMessageRounded className={Style.icons} />
                <span className={Style.iconText}>
                {UserTweets.tweets[0].tweetCount}
                </span>
                </span>
                <span  className={Style.subIconsWrapper}>
                <FaRetweet className={Style.icons} />
                <span className={Style.iconText}>
                {UserTweets.tweets[0].retweetCount}
                </span>
                </span>
                <span  className={Style.subIconsWrapper}>
                <span ><LikeButton /></span>
                <span className={Style.iconText}>
                {UserTweets.tweets[0].likesCount}
                </span>
                </span>           
                <span  className={Style.subIconsWrapper}>
                <CgPoll className={Style.icons} />
                <span className={Style.iconText}>
                {UserTweets.tweets[0].viewsCount}
                </span>
                </span>
                <BsUpload className={Style.icons} />
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
