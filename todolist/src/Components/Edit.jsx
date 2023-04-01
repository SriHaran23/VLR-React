import React from 'react'

function Edit(edit,i) {
  return (
    <div>
        <button className='border-0 bg-light p-1' onClick={()=>edit(i)}>Edit</button>
    </div>
  )
}

export default Edit