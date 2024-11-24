import React from 'react'
import { deleteTodos } from '../../utils/handleApis';

export default function TodoCard(props) {
    const {todo, id, setTodos, setText, updateMode} = props;
  return (
    <div className='todo-card'>
        <p> {todo} </p>
        <button className="update" onClick={updateMode}>
            <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button className="delete" onClick={()=>{
            deleteTodos(id, setTodos)
        }}>
            <i className="fa-solid fa-trash-can"></i>
        </button>
    </div>
  )
}
