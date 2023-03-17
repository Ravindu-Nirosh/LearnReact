import React from "react"
import Count from "./Count"
import Star from "./Star"
import BoxData from "./BoxData"
import Box from "./Box"
import JokeData from "./JokeData"
import Joke from "./Joke"

function Testing(props){
    const [thingsarry,setThingsArray]=React.useState(['thing 1','thing 2','thing 3'])
    let arry
    function addItem(){
        setThingsArray(function(prv){
            return [...prv,`thing ${thingsarry.length+1}`]
        })
       
    }
   

    arry=thingsarry.map(item=>{
        return <p key={item}>{item}</p>
    })


    const [result,setResult]=React.useState(0)
    console.log(result)

    const [details,setDetails]=React.useState({
        name:'Ravindu',
        age:10,
        isFavourit:true
    })



    function increse(){
        result>=10 ? setResult(prevResutl => prevResutl=10) :setResult(prevResutl => prevResutl+1)
        // if(result>=10){
        //     setResult(prevResutl => prevResutl=10)
        // }else{
        //     setResult(prevResutl => prevResutl+1)
        // }

    }

    function decrese(){
        result<=0?setResult(prevResutl => prevResutl=0): setResult(prevResutl => prevResutl-1)
        // if(result<=0){
        //     setResult(prevResutl => prevResutl=0)
        // }else{
        //     setResult(prevResutl => prevResutl-1)
        // }
    }

    function addfav(){
        setDetails(preSate=> {
            return{
                ...preSate,
                isFavourit: !preSate.isFavourit
            } 
        })
    }

    const [box,setBox]=React.useState(BoxData)
    console.log(box)
    
    const boxElements = box.map(squer=>(
        <Box isOn={squer.on} key={squer.id} handdelClicked={()=>toggel(squer.id)}/>
    ))
    
    // function toggel(id){
    //    setBox(prevst=>{
    //     const newSquer = []
    //     for(let i=0;i<prevst.length;i++){
    //         if(id===prevst[i].id){
    //             const updateSqur={
    //                 ...prevst[i],
    //                 on:!prevst[i].on
    //             }
    //             newSquer.push(updateSqur)
    //         }else{
    //             newSquer.push(prevst[i])
    //         }
    //     }
        
    //     return newSquer
    //    })
    // }

    function toggel(id){
        setBox(prevst =>{
           return prevst.map(squer =>{
                return squer.id===id ? {...squer,on:!squer.on} : {...squer}
            })
        })
    }

   

    const jokeComp=JokeData.map(joke=>{
        return <Joke key={joke.id}  setup={joke.setup} punchline={joke.punchline} />
    })

    

    

    return(
        <>
        <button onClick={addItem} id="myBtn">Add Items</button>
        <div id="things">
        {arry}
        </div>
        <div className="state--vlaue">
            <button onClick={decrese}>-</button>
            <Count value={result}/>
            <button onClick={increse}>+</button>
        </div>
        <hr/>
        <h6>{details.name}</h6>
        <p>{details.age}</p>
        {/* <i className={details.isFavourit ? 'fa-regular fa-star':'fa-solid fa-star'} onClick={addfav}></i> */}
        <Star isField={details.isFavourit} handelClicked={addfav}/>
        <hr></hr>
        <div className="box--container">{boxElements}</div>
        <hr></hr>
        <div>{jokeComp}</div>
        </>
    )
}
export default Testing