import React, { useState } from 'react'
import { connect } from 'react-redux'

function TodoList(props) {
    const [task, setTask] = useState('')
    console.log("props in TodoList",props)
    function add(){
        props.dispatch({type:'ADD',payload:task})
    }
    function del(i){
        props.dispatch({type:'DEL',payload:i})
    }
    function edit(i){
        props.dispatch({type:'EDIT',payload:i})
    }
  return (
    <div className='border border-2 border-info mx-2'>
        <h1>TodoList</h1>
        <input type="text" onChange={(e)=>{setTask(e.target.value)}}/>
        <button className='ms-2' onClick={add}>Add Todo</button>
        {
            props.todos.todos.map((todo,i)=>{
                return <li>
                    {todo}
                    <button className='ms-2' onClick={()=>{edit(i)}}>Edit</button>
                    <button className='mx-2 my-1' onClick={()=>{del(i)}}>Del</button>
                    </li>
            })
        }
    </div>
  )
}

export default connect(function(store){return store})(TodoList)