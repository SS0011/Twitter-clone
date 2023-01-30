import { style } from "@mui/system";
import { useState } from "react";
import FollowButton from "../../Atom/FollowButton/FollowButton";
import RightBotStyle from "./Follow.module.css";
export default function Follow() {
  const [show, setShow] = useState(true);

  const content = [
    {
      image:
        "https://pbs.twimg.com/profile_images/1565985672501927936/d-r-h241_400x400.jpg",
      name: "Narendra Modi",
      userName: "@narendramodi",
      dots: "Follow",
      dots3: "Following",
    },
    {
      image:
        "https://tse1.mm.bing.net/th?id=OIP.hKVyzWBE16aOIBDGI14fzwHaHa&pid=Api&P=0",
      name: "Sachin Tendulkar",
      userName: "@sachinTendulkar",
      dots: "Follow",
      dots3: "Following",
    },
    {
      image:
        "https://tse3.mm.bing.net/th?id=OIP.ScYp15kHnxHhSEsItsUc4wHaIT&pid=Api&P=0",
      name: "Sharukh Khan",
      userName: "@srk",
      dots: "Follow",
      dots3: "Following",
    },
  ];

 

  return (
    <>
      <div className={RightBotStyle.box}>
        <h3 style={{paddingLeft:"1rem"}}>Who To Follow </h3>

        {content.map((element, index) => (
          <div className={RightBotStyle.contentmain}>
            <div className={RightBotStyle.content}>
              <img
                style={{ paddingTop: "1.5em", borderRadius: "50%" }}
                src={element.image}
                width="60em"
                height="60em"
                alt="proppp"
              />
            </div>
            <div>
              <p>{element.name}</p>
              <p>{element.userName}</p>
            </div>
            <div style={{ paddingTop: "1.5em" }}>
              <FollowButton  className={RightBotStyle.followButton}/>
            </div>
          </div>
        ))}
        <h4 className={RightBotStyle.ShowMore}>Show more</h4>
      </div>
    </>
  );
}
