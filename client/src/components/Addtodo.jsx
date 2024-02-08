import React, { useState } from 'react'
import axios from 'axios'

export default function Addtodo(){
 
    const [message, setMessage] = useState('') 
    const createTodo = async () => {
        if(message === ''){
            alert('cannod add empty message')
        }
        try {
            const response = await axios.post('http://localhost:3000/todolist',{
                message:message
            })

         console.log(response)
         if(response.data.success ===  true){
            window.location.reload()
         }
        } catch (error) {
            console.log(error)
        }
    }
return(
    <div> 
        <input type="text" placeholder="Add task here.." onChange={(e) => setMessage(e.target.value)}/>
        <button onClick={createTodo}>Add Todo</button>
    </div>
)
}

