import React, { useContext, useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import { TodoContext } from '../context/TodoContext'

function AddTodo() {
    const [title, setTitle] = useState('')
    const [todos, setTodos] = useContext(TodoContext)
    console.log(todos);

    const addTodo = (e)=>{
        e.preventDefault()
        if(!title){
            alert('Please add a task...!')
        }else{
            const newTodos = [...todos,{id:uuidv4(), title:title, completed:false}]
            setTodos(newTodos)
            setTitle('')
        }
    }

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },)
  return (
    <div className='d-flex mb-5 mt-5'>
         <input type="text" value={title}  className='form-control w-100' placeholder='Enter Your Task' onChange={(e)=>setTitle(e.target.value)}/>
         <button className='btn btn-dark' onClick={addTodo}>Add</button>
    </div>
  )
}

export default AddTodo