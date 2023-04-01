import React from 'react'
import { useState } from 'react'
import Del from './Del'
import Done from './Done'

function Todo() {
    const [todo, setTodo] = useState([
        {title:'Buy groserries', status:false},
        {title:'Pay electricity bill', status:false},
        {title:'Book gas', status:true},
        {title:'Fill bike petrol-tank', status:false}
    ])
    const [data, setData] = useState([{title:'',status:false}])
    function handleChange(e){
        setData(e.target.value)
    }
    function add(){
        setTodo([...data])
    }
    function done(index){
        var temp=[...todo]
        {temp[index].status===true?temp[index].status=false:temp[index].status=true}
        setTodo([...todo])
    }
    function del(index){
        var temp=[...todo]
        temp.splice(index,1)
        setTodo([...todo])
    }

  return (
    <div>
        <div>
            <input type="search" onChange={handleChange}/>
            <button onClick={add}>Add Task</button>
        </div>
        <div>
            <ul>
                {
                    todo.map((todo,i)=>{
                        return <li className={todo.status===true?'text-decoration-line-through bg-success':'bg-danger'}>
                            <div className='d-flex flex-wrap justify-content-around'>
                                <div className='w-50'>{todo.title}</div>
                                <Done todo={todo} done={done} i={i}></Done>
                                <Del del={del} i={i}></Del>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default Todo