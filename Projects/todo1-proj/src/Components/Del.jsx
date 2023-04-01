import React from 'react'

function Del({del,i}) {
  return (
    <div>
        <button onClick={()=>{del(i)}}>Del</button>        
    </div>
  )
}

export default Del