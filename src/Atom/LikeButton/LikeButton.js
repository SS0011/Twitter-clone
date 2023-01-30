
import { BsFillHeartFill } from "react-icons/bs";
import { useState } from "react";
export default function LikeButton() {
 const [show , setShow] = useState(false)
    function colorRed() {
        if(show=== true ){
            setShow(false)
        }else{
            setShow(true)
        }
    }

    // let red = {
    //     color : "red"
    // }
    // let white = {
    //     color : "grey" ,
    //     // backgroundColor : "grey"
    // }

    return (
        <>
        <BsFillHeartFill onClick={colorRed} style={show ? {color : "red"} :{color : "grey"}} />
        </>
    )
}