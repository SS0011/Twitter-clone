import React from "react";
import style from "./MidSection.module.css";
import AllUserPost from "../../Component/AllUserPost/AllUserPost";
import MiddleSecTweetBox from "../../Component/Middle Sec TweetBox/MiddleSecTweetBox";

export default function MidSection() {
  
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
        <MiddleSecTweetBox />
        <AllUserPost />
      </div>
    </>
  );
}
