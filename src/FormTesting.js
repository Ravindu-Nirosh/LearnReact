import React from "react"

export default function Form(){
    const [formData,setformData]=React.useState(
        {firstName:"",lastName:"",email:"",comments:"",chk:true,employement:"",favColour:""}
        )

        function changeData(event){
           const {name,type,value,checked}=event.target
            setformData(prevFromData => {
            return {
                ...prevFromData,
                [name]:type==="checkbox" ? checked: value
            }
        })
     
    }
    console.log(formData)
    function handelSubmit(event){
        event.preventDefault()
        console.log(formData)
    }

    return (
        <div>
            <form onSubmit={handelSubmit}>
            <input type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={changeData}/>
            <input type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={changeData}/>
            <input type="email" placeholder="Email" name="email" value={formData.email} onChange={changeData}/>
            <textarea value={formData.comments} onChange={changeData} name="comments" />
            <input type="checkbox" checked={formData.chk}  onChange={changeData} name="chk"/>
            <fieldset>
                <legend>Employement Status</legend>
                <input type="radio" id="unemployed" name="employement" onChange={changeData} value="unemployed" checked={formData.employement==="unemployed"}/>
                <label htmlFor="unemployed">Unemployed</label>
                <br/>
                <input type="radio" id="part-time" name="employement" onChange={changeData} value="part-time" checked={formData.employement==="part-time"}/>
                <label htmlFor="part-time">Part Time</label>
                <br/>
                <input type="radio" id="full-time" name="employement" onChange={changeData}  value="full-time" checked={formData.employement==="full-time"}/>
                <label htmlFor="full-time">Full Time</label>
            </fieldset>
            <label htmlFor="favColour">Fav Colour</label>
            <select id="favColour" value={formData.favColour} name="favColour" onChange={changeData}>
                <option value="Red">Red</option>
                <option value="Yellow">Yellow</option>
                <option value="Green">Green</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
            </select>
            <br/>
            <button>Button</button>
            </form>
        </div>
    )
}