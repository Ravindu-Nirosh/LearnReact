import React from "react"

export default function Joke(props){

    const[display,setDislpay]=React.useState(false)

    function handdelCliked(){
        setDislpay(prevst=>!prevst)
    }
    return(
        <>
        {props.setup && <h3>{props.setup}</h3>}
        {display && <h4>{props.punchline}</h4>}
        <button onClick={handdelCliked}>{display?"Hide":"Show"}  Punchline</button>
        <hr/>
        </>
    )
}