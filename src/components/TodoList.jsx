import React, { useContext, useEffect, useState } from 'react'
import Todo  from './Todo'
import { TodoContext } from '../context/TodoContext'

function TodoList() {
    const [todos,setTodos] = useContext(TodoContext)
    const [filterTodo,setFilterTodo] = useState([])
    
    const handleFilter = ()=>{
        setFilterTodo(todos.filter(item=>item.completed===true))
    }
    useEffect(()=>{
        handleFilter()
    },[todos])
  return (
    <div >
        <div>
            {
                todos.length>0?
                todos.map(item=>(
                    <Todo tasks={item} key={item.id}/>
                    )):
                    <p className='text-center mt-4 '>No Tasks To Do...!</p>
            }
        </div>
               <div className='text-center mt-5'> <p className='text-light fw-bold' >Completed Tasks</p>
                     <div>
                         {
                            filterTodo.length>0?
                            filterTodo.map(item=>(
                              <div className='w-100  text-light p-2 rounded mt-2 d-flex align-items-center justify-content-center' >
                                <img src="https://www.freeiconspng.com/thumbs/checkmark-png/black-checkmark-png-4.png" alt="tickmark" style={{height:'15px',width:'15px'}} />
                              <label className='ms-1' htmlFor={item.id}>{item.title}</label>
                              </div>
                            )):""
                              
                         }
                     </div>
               </div>
    </div>

  )
}

export default TodoList