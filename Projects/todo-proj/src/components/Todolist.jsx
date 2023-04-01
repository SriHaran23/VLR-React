import React from 'react'
import { useState } from 'react'

function Todolist() {
    const [todo, setTodo] = useState([
        {title:'Buy groserries', status:false},
        {title:'Pay electricity bill', status:false},
        {title:'Book gas', status:true},
        {title:'Fill petrol in bike', status:false}
    ]);
    const [data, setData] = useState({title:"",status:false});
    const [comp,setComp] = useState([...todo]);
    function handleChange(e){
        setData([e.target.value])
    }
    function add(){
        data.title=data
        setTodo([...todo,data])
        setComp([...comp,data])
        console.log(data)
    }
    
    function handleFilter(value){
        let temp = [...comp]
        if(value ==='complete'){
            let comlist= temp.filter((list,i)=>list.status===true)
            setTodo(comlist) 
        }
        else if(value==='incomplete'){
            let incomlist= temp.filter((list,i)=>list.status===false)
            setTodo(incomlist) 
        }
        else{
            setTodo(comp) 
        }
        console.log(temp)
    }
    function done(index){
        let temp= [...todo];
        {
            temp[index].status===false
            ? (temp[index].status=true)
            : (temp[index].status=false)
        }
        setTodo([...temp])
    }
    function del(index){
        let temp= [...todo];
        temp.splice(index,1)
        setTodo([...temp])
    }
  return (
    <div>
        <div>
            <input type="search" onChange={handleChange}/>
            <button onClick={add}>Add Task</button>
        </div>
        <div className='d-flex flex-wrap justify-content-between w-50'>
            <div>
                <input type="radio" value='all' name='filter' id='filter' onClick={(e)=>handleFilter(e.target.value)}/>
                <label htmlFor="">All</label>
            </div>
            <div>
                <input type="radio" value='complete' name='filter' id='filter' onClick={(e)=>handleFilter(e.target.value)}/>
                <label htmlFor="">Completed</label>
            </div>
            <div>
                <input type="radio" value='incomplete' name='filter' id='filter' onClick={(e)=>handleFilter(e.target.value)}/>
                <label htmlFor="">Not completed</label>
            </div>
        </div>
        <div>
            <ul type="none">
                {
                    todo.map((todo,i)=>{
                        return <li key={todo.title+i}className={todo.status===true? 'text-decoration-line-through bg-success p-1 m-1':'bg-danger p-1 m-1'}>
                            <div className='d-flex flex-wrap justify-content-around mb-1'>
                                <div className='w-75'>
                                    {todo.title}
                                </div>
                                <div>
                                    {todo.status===false?<button onClick={()=>{done(i)}}>Done</button>:<button onClick={()=>{done(i)}}>Undo</button>}
                                </div>
                                <div>
                                    <button onClick={()=>{del(i)}}>Del</button>
                                </div>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
         
    </div>
  )
}

export default Todolist