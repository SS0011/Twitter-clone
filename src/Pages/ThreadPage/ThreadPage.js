import React from "react";
import Style from "./ProfilePage.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import LeftSection from "../../Section/LeftSection/LeftSection";
import RightSection from "../../Section/RightSection/RightSection";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  let matchedUserDetails = JSON.parse(localStorage.getItem("matchedUser"));
  console.log(matchedUserDetails, "i amm from profile page");
  const date = new Date();
  let joinedDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
  }).format(date);

  
  return (
    <>
      <div className={Style.main}>
        <div style={{ border: "0px solid" }}>
          <LeftSection />
        </div>

        <div style={{ border: "1px solid  rgb(209, 209, 209)" }}>
         mid
        </div>

        <div style={{ border: "0px solid" }}>
          <RightSection />
        </div>
      </div>
    </>
  );
}
