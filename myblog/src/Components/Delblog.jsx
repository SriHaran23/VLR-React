import React from 'react'

function Delblog({del,i}) {
  return (
    <div>
        <button onClick={()=>{del(i)}} className='border-0 bg-light p-2 m-2' >X</button>
    </div>
  )
}

export default Delblog