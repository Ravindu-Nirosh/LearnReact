import React from "react"

export default function Box(props){
    const styles={
        backgroundColor:props.isOn ? "black":"white"
     }
   
    return(
        <div  style={styles} className="box" onClick={props.handdelClicked}></div>
    )
}