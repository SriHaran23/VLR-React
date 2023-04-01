import React from 'react'

function Done({todo,done,i}) {
  return (
    <div>
    {todo.status===false?<button onClick={()=>{done(i)}}>Done</button>:<button onClick={()=>{done(i)}}>Undo</button>}

    </div>
  )
}

export default Done