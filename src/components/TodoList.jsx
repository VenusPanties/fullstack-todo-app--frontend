import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const { todos , setTodos, updateMode} = props;
  return (
    <div className='todolist'>
        <ul>
            {
                todos.map((todo) => {
                    return(
                    <li key={todo._id}>
                        <TodoCard todo = {todo.text} setTodos = {setTodos} id = {todo._id} updateMode={() => (updateMode(todo._id, todo.text))}/>
                    </li>)
                })
            }
        </ul>
    </div>
  )
}
