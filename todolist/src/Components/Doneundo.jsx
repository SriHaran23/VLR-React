import React from 'react'

function Doneundo({todo,doneTask,i}) {
  return (
    <span>
        {
            todo===true
            ?(<button className='border-0 bg-light p-1' onClick={()=>{doneTask(i)}}>Undo</button>)
            :(<button className='border-0 bg-light p-1' onClick={()=>{doneTask(i)}}>Done</button>)
        }
    </span>
  )
}

export default Doneundo