
export default function Profile(prop){
    return(
        <div >
            <h3>full name : {prop.FullName}</h3>
            <h3>bio : {prop.Bio}</h3>
            <h3>proffission : {prop.Proffission}</h3>
            <img src={prop.children}/>
            <button onClick = {prop.Func}>alert name</button>
        </div>
    )
}