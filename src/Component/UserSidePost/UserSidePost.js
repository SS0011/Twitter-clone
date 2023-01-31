import { UserPost } from "../../RecoilState/UserPost/UserPost";
import { RxAvatar } from "react-icons/rx";
import { useRecoilState, useRecoilValue } from "recoil";
import style from './UserSidePost.module.css'
import { BiMessageRounded } from "react-icons/bi";
import { CgPoll } from "react-icons/cg";
import { FaRetweet } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import LikeButton from "../../Atom/LikeButton/LikeButton";
import { useNavigate } from "react-router-dom";
import { ThreadofMinePOst } from "../../RecoilState/Thread/Thread";

export default function UserSidePost() {
    let matchedUserDetails = JSON.parse(localStorage.getItem("matchedUser"))
    const UserPostData = useRecoilValue(UserPost);
    const navigate = useNavigate()
    const [threadData ,setThreadData] = useRecoilState(ThreadofMinePOst)
    function redirectToProfile() {
        
        navigate('/profile')
      }
     
    return(
        <>
        <div>
        {
            UserPostData.map(element=> 
                <div className={style.postContainer} key={element.name}>
                <span onClick={()=>redirectToProfile(element)}>
              
            <img
              className={style.userProfle}
              src="https://tse1.mm.bing.net/th?id=OIP.Lui6lVdzvecYDAJ_ahUOawAAAA&pid=Api&P=0"
              alt="profilePic"
            />
            </span>
            <div className={style.postSubContainer}>
              <div>
                <span className={style.postUserName}>{ matchedUserDetails.Name}</span>
                <span className={style.postHandleName}>
                  {element.handlerName}
                </span>
              </div>
              <div>
              <span>{element.tweetText}</span>
              {element.tweetPic ?
              <img
                className={style.tweetPic}
                src={element.tweetPic}
                alt="tweetPic"
                width="450rem"
              />
              : ""}
              <span className={style.iconsWrapper}>
              <span className={style.subIconsWrapper}>
                <BiMessageRounded className={style.icons} />
                <span className={style.iconText}>
                {element.tweetCount}
                </span>
                </span>
                <span  className={style.subIconsWrapper}>
                <FaRetweet className={style.icons} />
                <span className={style.iconText}>
                {element.retweetCount}
                </span>
                </span>
                <span  className={style.subIconsWrapper}>
                <LikeButton />
                <span className={style.iconText}>
                {element.likesCount}
                </span>
                </span>
                <span  className={style.subIconsWrapper}>
                <CgPoll className={style.icons} />
                <span className={style.iconText}>
                {element.viewsCount}
                </span>
                </span>
                <BsUpload className={style.icons} />
              </span>
              </div>
            </div>
          </div>
                )
        }
        </div>
        </>
    )
}