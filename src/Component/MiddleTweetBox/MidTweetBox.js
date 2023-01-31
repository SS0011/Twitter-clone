import { RxAvatar } from "react-icons/rx";
import { MdOutlinePoll } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { TbCalendarStats } from "react-icons/tb";
import { TfiGallery } from "react-icons/tfi";
import { AiOutlineFileGif } from "react-icons/ai";
import { IoEarthSharp } from "react-icons/io5";
import CustomButton from "../../Atom/CustomButton/CustomButton";
import TextArea from "../../Atom/TextArea/TextArea";
import style from "./MidTweetBox.module.css";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
// import { Post } from "../../RecoilState/Post/Post";
import { UserPost } from "../../RecoilState/UserPost/UserPost";

export default function MidTweetBox() {
  const [tweet, setTweet] = useState("");
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);
  const inputRef = useRef(null)

  const [tweetPost,setTweetPost] = useRecoilState(UserPost)
  console.log(tweetPost , "i am from mid tweet box")
  function handleTweet(e) {
    setTweet(e.target.value);
    console.log(e.target.value ,"i am from midtweetbox")
  }

  function handleTweetPost() {
    // alert("i am twet")
    let tweetText =  {name : "Ashar",tweetText :tweet , tweetPic : image }
    console.log([...tweetPost,tweetText])
    setTweetPost([tweetText,...tweetPost])
    setTweet("")
    setImage("")
  }

  function handleShow() {
    setShow(true);
  }

  function handleImage(){
    // alert(" i am picked")
    inputRef.current.click()
  }
  const onImageChange = (event) => {
    if (event.target.files[0] ) {
      console.log(event.target.files[0])
      setImage(URL.createObjectURL(event.target.files[0]));
    }
   }
  return (
    <>
      <div className={style.inputContainer}>
        <div onClick={handleShow} className={style.subContainer}>
          <RxAvatar className={style.avatar} />
          <div className={style.input}>
            {show ? (
              <CustomButton
                className={style.evryOnebtn}
                buttonText="Everyone"
                icon2={<sup>v</sup>}
              />
            ) : (
              ""
            )}
            <TextArea
              placeholder="What's Happening?"
              value={tweet}
              onChange={handleTweet}
              className={style.inputBox}
            />
          </div>
        </div>
        {image ? 
        <img className={style.inputBoxImage} src={image} alt="uploadImage" width="200px" /> : ""
        }

        {show ? (
          <span className={style.evryOnebtnEartch}>
            <IoEarthSharp />
            Everyone can reply
          </span>
        ) : (
          ""
        )}

        <div className={style.iconBtnWrapper}>
          <div className={style.iconBtn}>
            <TfiGallery  onClick={handleImage} className={style.iconss} />
            <input  hidden ref={inputRef}  type="file" onChange={onImageChange} className="filetype" />
            <AiOutlineFileGif className={style.iconss} />
            <MdOutlinePoll className={style.iconss} />
            <TbCalendarStats className={style.iconss} />
            <TfiLocationPin className={style.iconss} />
          </div>
          <CustomButton onClick={handleTweetPost} className={style.tweetPushbtn} buttonText="Tweet" />
        </div>

        {show ? (
          <div className={style.showMore}>
            <CustomButton
            
              className={style.showMoreBtn}
              buttonText="Show More Tweets"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
