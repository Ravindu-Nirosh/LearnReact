export default function Star(props){
    console.log(props)
    return(
        <div>
        <i className={props.isField ? 'fa-solid fa-star':'fa-regular fa-star'} onClick={props.handelClicked}></i>
        </div>
    )
}