import './style.css'
import React from "react"
function BodySection(){
 
    const [meme,setMeme]=React.useState({
        topText:'',
        bottomText:'',
        randomImage:"https://via.placeholder.com/600/b0f7cc"
    })

    const [allMemeImages,setAllMemeImages]=React.useState([])

    //let [randomurl,setRandomurl]=React.useState(Data[0].url)

    React.useEffect(function(){
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data=>setAllMemeImages(data))
        console.log("im rv")
    },[])

    function handlleCliked(){
        const randomNumber=Math.floor(Math.random()*allMemeImages.length)
        console.log("random"+randomNumber)
        setMeme(preState =>({
            ...preState,
            randomImage:allMemeImages[randomNumber].url
        }))
        

    }

    function handleChnage(event){
        const{name,value}=event.target
        setMeme(preState=>{
            return {
                ...preState,
                [name]:value

            }
        })
    }

    // let ary="APPLE"
    // console.log(ary.length)
    // let aryn=''
    // for(let i=0;i<ary.length;i++){
    //     aryn=aryn+ary.charAt(ary.length-i-1)
    // }
    // console.log(aryn)


    // console.log(" I ")
    // console.log(" eat ")
    // setTimeout(() => {
    //     console.log(" ice cream ")
    // }, 3000);
    // console.log(" with a ")
    // console.log(" spoon ")


    let stocks={
        fruite:["strawberry","apple","banana"],
        liquid:["water","ice"],
        holder:["cone","cup","stick"],
        topping:["chocolate","peanuts"],
    }
    
    
    

    const LoadData =async ()=>{
        try{
            const url="https://jsonplaceholder.typicode.com/users"
            const res=await fetch(url)
            console.log(await res.json())
        }
        catch(err){
            console.log("error"+err)
        }
        finally{
            console.log("Im runing any ways")
        }
    }
   
    LoadData()
    return(
        <main>
            <div className='form'>
                
                <input type="text" className='form--inputs' placeholder='Top Text' onChange={handleChnage} name="topText" value={meme.topText}/>
                <input type="text" className='form--inputs' placeholder='Bottom Text' onChange={handleChnage}  name="bottomText" value={meme.bottomText}/>
                <button type='submit' className='form--button' onClick={handlleCliked}>Get a new meme image  🖼</button>
                    <div className="meme">
                        <h1 className="top--text">{meme.topText}</h1>
                        <h1 className="bottom--text">{meme.bottomText}</h1>
                        <img src={meme.randomImage} alt='img'/>
                    </div>
                    
                </div>
        </main>
    )
}

export default BodySection