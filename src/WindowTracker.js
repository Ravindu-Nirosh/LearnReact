import React from "react"

export default function WindowTracker(){

    const [windowWith,setWindwWithd]=React.useState(window.innerWidth)

    
    React.useEffect(()=>{
        console.log("effet run")
        function winWidth(){
            console.log("added")
            setWindwWithd(window.innerWidth)
        }
        window.addEventListener('resize',winWidth)

        return function (){
            console.log("rem")
            window.removeEventListener('resize',winWidth)
        }
    },[])

   return(
        <h1>Windows Width {windowWith}</h1>
    )
    
}