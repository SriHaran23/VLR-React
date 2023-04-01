import React from 'react'

function Del({del,i}){
  return (
    <div>
        <button className='border-0 bg-light p-1' onClick={()=>del(i)}>Del</button>
    </div>
  )
}

export default Del