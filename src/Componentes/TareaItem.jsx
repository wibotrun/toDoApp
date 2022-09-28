import React from "react";

function TareaItem({tarea, onComplete,onDeleteItem}){
  const getStyle=()=>{
    return{
        textDecoration: tarea.completada ? 'line-through' : 'none', 
            margin: '10px',
            border: '1px solid white',
            backgroundColor: tarea.completada ? 'rgb(112, 64, 64)':'white',
            borderRadius: '5px',
            
            }
    }
  
    
    return(
        <div style={getStyle()}>
            <input type="checkbox" checked={tarea.completada} onChange={()=>onComplete(tarea.id)}></input>
                {tarea.task}
            <button className="add-btn" onClick={()=>onDeleteItem(tarea.id)}>X</button>  
            
        </div>
    )
}


export default TareaItem;