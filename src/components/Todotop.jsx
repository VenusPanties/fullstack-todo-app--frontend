import React from 'react'
import { addTodos, updateTodos } from '../../utils/handleApis'

export default function Todotop(props) {
  const {text,_id, setText, setTodos, isUpdating, setIsUpdating} = props;
  return (
    <div className='top'>
      <h2> Todo App </h2>
      <div className="todo-input">
        <input type="text" placeholder='Add Todos...' value={text} onChange={(e)=>{
          setText(e.target.value)
        }}/>
        <button onClick={()=>{
          isUpdating ? updateTodos(_id, text, setText, setTodos, setIsUpdating) :
          addTodos(text, setText, setTodos)
        }}> {isUpdating ? "Update" : "Add"}</button>
      </div>
    </div>
  )
}
