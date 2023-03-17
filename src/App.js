import Header from "./Header"
import BodySection from "./BodySection"
import Testing from "./Testing"
import Form from "./FormTesting"
import ExForm from "./exFrom"
import ApiTest from "./ApiCallTest"
import WindowTracker from "./WindowTracker"
import React from "react"

export default function App(){

    const [show,setShow]=React.useState(false)

    function handdelCliekd(){
        setShow(prev=>!prev)
    }

    return (
        <>
        <Header/>
        <BodySection/>
        <ApiTest/>
         <Testing/>
        <Form/>
        <ExForm/>
        <button onClick={handdelCliekd}>Toggel window trcker</button>
        {show && <WindowTracker/>}
        </>
    )
}