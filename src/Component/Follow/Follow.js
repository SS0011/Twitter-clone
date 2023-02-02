import React from 'react'
import { useState } from "react";
import FollowButton from "../../Atom/FollowButton/FollowButton";
import RightBotStyle from "./Follow.module.css";
import { Post } from '../../RecoilState/Post/Post';
import { useRecoilValue } from 'recoil';

export default function Trends() {
  const postData = useRecoilValue(Post)

  const content = [
    {
      id: 1,
    
      

      
      upText: "The White House",
      midText: "@The White House",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7PCbXn-dXLt087I_3kjfqRGXmiL4ZrSvZ6k6KVjDmWU0fUf6TGuo63HM&s'
    },
    {
      id: 2,
      
      upText: "Coder",
      midText: "@coder001",
      image: 'https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png'
      
    },
    {
      id: 3,

      
      upText: "AmovieLover",
      midText: "@MovieLover:)",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZOWxoVA7hwKdzbhow0NpiSFpU4vcYbnIiQ&usqp=CAU'
    },
    {
      id: 4,

      
      upText: "SachinLover",
      midText: "@Mahi462",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTp2I6_JdUrlQMasDC-GTPjU2WFra0_JVGfQ&usqp=CAU'
    },
    {
      id: 5,

      
      upText: "BTSArmy",
      midText: "@froeverBTS",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl7qJNoIqj4Q37jJWX8k3bzzeAgf7BQyHmSA&usqp=CAU'
    },
    {
      id: 6,

      
      upText: "Bhuvan Bam",
      midText: "@bhuvan.bam22",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7PCbXn-dXLt087I_3kjfqRGXmiL4ZrSvZ6k6KVjDmWU0fUf6TGuo63HM&s'
    },
    {
      id: 7,
      
      upText: "Coder",
      midText: "@coder001",
      image: 'https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png'
      
    },
    {
      id: 8,

      
      upText: "AmovieLover",
      midText: "@MovieLover:)",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZOWxoVA7hwKdzbhow0NpiSFpU4vcYbnIiQ&usqp=CAU'
    },
    {
      id: 9,

      
      upText: "SachinLover",
      midText: "@Mahi462",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTp2I6_JdUrlQMasDC-GTPjU2WFra0_JVGfQ&usqp=CAU'
    },
    {
      id:10,

      
      upText: "BTSArmy",
      midText: "@froeverBTS",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl7qJNoIqj4Q37jJWX8k3bzzeAgf7BQyHmSA&usqp=CAU'
    },
  ];

 

  const [list , setList] = useState(content.slice(0,4));
  const [showing ,setShowing] = useState(false)
  
function handleShowMore() {
    setList(content)
    if(list.length === content.length){
        setList(content.slice(0,4))
    }
    if(showing){
        setShowing(false)
    }else{
        setShowing(true)
    }
}
  return (
    <>
      <div className={RightBotStyle.box}>
        <h3 style={{paddingLeft:"1rem"}}>Who to follow </h3>

        {list.map((element) => (
          <div className={RightBotStyle.contentmain}>
             <img
                style={{  borderRadius: "50%" }}
                src={element.image}
                width="60rem"
                height="60rem"
                alt="pp"
              />
            <div className={RightBotStyle.content}>

              <span className={RightBotStyle.upText}>{element.upText}</span>
              <span className={RightBotStyle.content1}>{element.midText}</span>
              
            </div>
           
            <span className={RightBotStyle.poperParent}>
             
            <FollowButton  className={RightBotStyle.followButton}/>
            </span>
          </div>
        ))}

        <h4 onClick={handleShowMore} className={RightBotStyle.ShowMore}>{showing ? "Show less" : "Show More "}</h4>
      </div>
    </>
  );
}