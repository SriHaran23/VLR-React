import React,{useState} from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import Del from './Del'
import Doneundo from './Doneundo'
import Edit from './Edit'

function TodoList(){
    const [todo,setTodo]= useState([
                                    {title:"To pay electricity bill",status:false},
                                    {title:"To buy grosseries", status:false},
                                    {title:"Fill bike petrol-tank", status:false},
                                    {title:"Recharge mobile", status:true},
                                    {title:"Book gas cylinder", status:false}
                                ])
    const [todos,setTodos]= useState([{title:"", status:false}])
    const [comp,setComp] = useState([...todo])
    const [data,setData]= useState([{title:"", status:false}])
    let r1=useRef();
    useEffect(()=>{
        r1.current.focus();
        setTodos([...todo])
    },[])
    function handleChange(e){
      setData([e.target.value])
    }
    function add(){
        data.title=data
      setTodo([...todo,data])
        setComp([...comp,data])
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
    }
    function doneTask(index){
        var temp = [...todo];
        {
            temp[index].status === false 
            ? (temp[index].status = true)
            :temp[index].status = false 
        }
        setTodo([...temp])
    }
    function edit(index){
        document.getElementById("type").value=todo[index].title;
    }
    function del(index){
        var temp = [...todo];
        temp.splice(index,1)
        setTodo([...temp])
    }
    return (
      <div className='border border-2 m-2 p-2 bg-light w-75'>
        <input type="search" id="type" ref={r1} onChange={handleChange} />
        <button onClick={add} className='ms-2'>Add Task</button>
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
            <ul className='m-2 p-2'>
                {
                todo.map((todo,i)=>{
                    return  <li type='none' id='li' className={todo.status===true?'text-decoration-line-through bg-success':'bg-danger'}>
                                <div  className='p-2 d-flex flex-wrap justify-content-around'>
                                    <div className='w-75'>
                                        {todo.title}
                                    </div>
                                    <div>
                                        <Doneundo todo={todo.status} doneTask={doneTask} i={i}></Doneundo>
                                    </div>
                                    <div >
                                        <Edit edit={edit} i={i}></Edit>
                                    </div> 
                                    <div >
                                        <Del del={del} i={i}></Del>
                                    </div>     
                                </div>
                            </li>
                        }) 
                }
            </ul>
      </div>
    );
  }
  
  export default TodoList;