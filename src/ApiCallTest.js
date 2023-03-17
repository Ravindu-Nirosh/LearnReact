import React from "react";

export default function ApiTest(){
    const [dataList,setDataList] = React.useState({})
    const [count,setCount]=React.useState(1)
   
    console.log("rederd")

    
    function handdelclicked(){
        setCount(prevCOunt=>prevCOunt+1)
    }
    
    React.useEffect(function(){
        fetch(`https://jsonplaceholder.typicode.com/users/${count}`).then(res => res.json()).then(data=>setDataList(data))
        console.log(dataList)
    },[count])




    return(
        <>
        <h1>{JSON.stringify(dataList,null,1)}</h1>
        <p>{count}</p>
        <button onClick={handdelclicked}>clicked</button>
        </>
    )
}