import React from "react"

export default function ExForm(){
    let errorMessage;
    const [formData,setformData]=React.useState(
        {emailAddress:"",password:"",confirmPassword:"",isJoin:false}
    )

    function handleChange(event){
        const {name,value,type,checked}=event.target
        setformData(preFromData => {
            return{
                ...preFromData,
                [name]:type==="checkbox"? checked: value
            }
        })
    }

    function submitData(event){
        event.preventDefault()
        if(errorMessage==="" && formData.isJoin===true){
            console.log(formData)
        }else{
            console.log("error")
        }
       
    }

    formData.password===formData.confirmPassword?errorMessage="":errorMessage=<h6 className="passError">Password Does Not Match</h6>
    
    

    return(
        <div className="Form--Container">
            <form className="form--item" onSubmit={submitData}>
                <input type="email" placeholder="Email Here.." className="e--address" onChange={handleChange} name="emailAddress" value={formData.emailAddress}/>
                <input type="password" placeholder="****" className="password" name="password" onChange={handleChange} value={formData.password}/>
                <input type="password" placeholder="****" className="ConfirmPass" name="confirmPassword" onChange={handleChange} value={formData.confirmPassword}/>
                {errorMessage}
                <div className="chekbxContainer">
                    <input type="checkbox" id="isJoing" className="IsJoin" name="isJoin" onChange={handleChange} checked={formData.isJoin}/>
                    <label htmlFor="isJoing" className="IsJoinLb">Do you Want To Join For News Letter</label>
                </div>
                <button className="btnSign">Sign Up</button>
                </form>
        </div>
    )
}