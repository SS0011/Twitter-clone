import React from "react";
import Style from "./ProfilePage.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import LeftSection from "../../Section/LeftSection/LeftSection";
import RightSection from "../../Section/RightSection/RightSection";
import { useNavigate } from "react-router-dom";
import UserSidePost from "../../Component/UserSidePost/UserSidePost";

export default function ProfilePage() {
  let matchedUserDetails = JSON.parse(localStorage.getItem("matchedUser"));
  console.log(matchedUserDetails, "i amm from profile page");
  const naviagte = useNavigate()
 

  function handleArrow() {
    naviagte('/home')
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
            <h3>{matchedUserDetails.Name}</h3>
          </div>
          <div className={Style.wallpaper}></div>
          <div className={Style.mainUserData}>
            <div className={Style.userData}>
              <div className={Style.userProflePic}></div>
              <h3 className={Style.UpUserName}>{matchedUserDetails.Name} </h3>
              <span>{matchedUserDetails.Email || matchedUserDetails.Name.toLowerCase()+"@" }</span>
              <div className={Style.joined}>
                <CgCalendarDates className={Style.calender} />
                <p>Joined June 2009</p>
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
          <h4>Tweets</h4>
          <h4>Tweets & Replies</h4>
          <h4>Media</h4>
          <h4>Likes</h4>
          </div>

          <UserSidePost />
        </div>

        <div style={{ border: "0px solid" }}>
          <RightSection />
        </div>
      </div>
    </>
  );
}
