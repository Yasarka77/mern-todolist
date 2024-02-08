import { AiOutlineEdit } from "react-icons/ai"; 
import { RiDeleteBin2Fill } from "react-icons/ri"; 
import axios from 'axios' 
import React, { useState,useEffect } from "react";
import { toast } from "react-toastify";


const Todolist=()=>{
    const [Todoo, setTodoo]=useState([])
    const getAllTodos = async() => {
        try {
            const response = await axios.get('http://localhost:3000/todolist/getallTodo')
            console.log(response.data.data)  //array data
            setTodoo(response.data.data)  //array data stroing in state
        } catch (error) {
            console.log(error.message)
        } 
    }

    const handleDelete = async(id) =>{ 


try {
    const result = await axios.delete(`http://localhost:3000/todolist/tododelete/${id}`)
     console.log(result) 
     if(result.data.success === true ){
     toast('Todo Deleted')
     getAllTodos()
     }
} catch (error) {
    
}}


    useEffect(() => {
    getAllTodos()
    },[])

    return(
        <div>
            <ul>
               {Todoo.map((todo)=>{
                return (
                    <li className="style" key={todo._id} > {todo.message} <RiDeleteBin2Fill onClick={()=> handleDelete(todo._id)} /></li>
                   
                       
                )
               })}
            </ul>
        </div>
    )
}

export default Todolist