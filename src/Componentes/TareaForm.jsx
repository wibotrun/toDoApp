import React,{useState} from "react";

function TareaForm({addTarea}){

const [userInput, setUserInput] = useState('');
const handleOnChange=(e)=>{
setUserInput(e.currentTarget.value);
console.log(userInput)

}
const handleSubmit=(e)=>{
    e.preventDefault()
    if(userInput.trim() != ''){
        addTarea(userInput);
        setUserInput('')
    }
}
    return(
        <div style={{margin:20}}>
            <form onSubmit={handleSubmit}>
               <input type="text" value={userInput} onChange={handleOnChange}></input>
                <button className="btn-agregar">Agregar</button>
            </form>
        </div>
    )
}


export default TareaForm;
