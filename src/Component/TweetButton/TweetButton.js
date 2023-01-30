import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import CustomButton from '../../Atom/CustomButton/CustomButton';
import {RxAvatar} from 'react-icons/rx'
import style from './TweetButton.module.css'
import TextArea from '../../Atom/TextArea/TextArea';
import { MdOutlinePoll } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { TbCalendarStats } from "react-icons/tb";
import { GrGallery } from "react-icons/gr";
import { AiOutlineFileGif } from "react-icons/ai";
import { IoEarthSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useRecoilState } from "recoil";
// import { Post } from "../../RecoilState/Post/Post";
import { UserPost } from "../../RecoilState/UserPost/UserPost";
export default function TweetButton() {
  const [open, setOpen] = useState(false);
  const [tweet , setTweet] = useState("")
  const [tweetPost,setTweetPost] = useRecoilState(UserPost)
  console.log(tweetPost , "i am from tweet box")
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  
  function handleTweet(e) {
    setTweet(e.target.value);
    console.log(e.target.value ,"i am from midtweetbox")
  }

  
  function handleTweetPost() {
    // alert("i am twet")
    let tweetText =  {name : "Ashar",tweetText :tweet}
    console.log([...tweetPost,tweetText])
    setTweetPost([tweetText,...tweetPost])
    setOpen(false)
  }

  return (
    <div>
      <CustomButton  onClick={handleClickOpen}
       buttonText="Tweet" className={style.leftSecTweetBtn}
      />
      <Dialog
      PaperProps={{
        style: {
          borderRadius: 20,
        },
      }}
        open={open}
        onClose={handleClose}
      >
      <div className={style.Container}>
      <CustomButton className={style.crossbtn} onClick={handleClose}
       buttonText={<RxCross1/>}
      />
      <div className={style.subContainer}>
      <RxAvatar className={style.avatar}/>
      <div className={style.input}>
      <CustomButton className={style.evryOnebtn} buttonText="Everyone" icon2={<sup>v</sup>}/>
      <TextArea placeholder="What's Happening?" value={tweet} onChange={handleTweet} className={style.inputBox}/>
      </div>
      </div>

      </div>
      <span className={style.evryOnebtnEartch}><IoEarthSharp />Everyone can reply</span>

        <div className={style.iconBtnWrapper}>
        <div className={style.iconBtn}> 
        <GrGallery className={style.iconss}/>
        <AiOutlineFileGif className={style.iconss}/>
       <MdOutlinePoll className={style.iconss}/>
       <TbCalendarStats className={style.iconss}/>
       <TfiLocationPin className={style.iconss}/>
       </div>
         <CustomButton onClick={handleTweetPost} className={style.tweetPushbtn} buttonText="Tweet" />
         </div>
      </Dialog>
    </div>
  );
}