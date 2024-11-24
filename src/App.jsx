import { useEffect, useState } from "react"
import TodoCard from "./components/TodoCard"
import TodoList from "./components/TodoList"
import Todotop from "./components/Todotop"
import { getTodos } from "../utils/handleApis"

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")
  const [editTodoId, setEditTodoId] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const updateMode = (editTodoId, text)=>{
    setEditTodoId(editTodoId);
    setText(text);
    setIsUpdating(true);
  }
  useEffect(()=>{
    getTodos(setTodos)
  }, [])
  return (
    <div className="app">
      <Todotop text = {text} setText = {setText} setTodos = {setTodos} isUpdating = {isUpdating} _id = {editTodoId} setIsUpdating={setIsUpdating}/>
      <TodoList todos = {todos} setTodos={setTodos} updateMode = {updateMode}/>
    </div>
  )
}

export default App
