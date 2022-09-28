import React from "react";

function TareaItem({tarea, onComplete,onDeleteItem}){
  const getStyle=()=>{
    return{
        textDecoration: tarea.completada ? 'line-through' : 'none', 
            margin: '20px',
            border: '1px solid white',
            backgroundColor: 'yellowgreen',
            
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