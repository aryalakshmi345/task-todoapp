import React, { useContext ,useRef} from 'react'
import { TodoContext } from '../context/TodoContext'

function Todo({tasks}) {
    const [todos,setTodos] = useContext(TodoContext)
    const completedTodo = (e)=>{
        const filterTodos = todos.map((item)=>{
            if(item.id===e.target.value){
                item.completed=false
                if(e.target.checked){
                    item.completed = true
                }
            }
            return item
        })
        setTodos(filterTodos)
    }
    const isCompleted = tasks.completed ? 'checked' :''

    const deleteTodo = (e)=>{
        e.preventDefault()
        const filterTodo = todos.filter((item)=>{
            return item.id !=e.target.id
        })
        setTodos(filterTodo)
    }
    
    
  return (
     <div>
        <div className='w-100 mb-4 d-flex justify-content-between align-items-center bg-light text-black p-2 rounded' >
        <div>
            <input type="checkbox" checked={isCompleted} value={tasks.id} id={tasks.id} onChange={(e)=>completedTodo(e)}/>
            <label className='ms-3' htmlFor={tasks.id}>{tasks.title}</label>
        </div>
        <div>
        <i id={tasks.id} onClick={(e)=>deleteTodo(e)} class="fa-solid fa-trash ms-3"></i>
        </div>
        </div>
    </div>
   
  )
}

export default Todo