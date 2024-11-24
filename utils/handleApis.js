import axios from  'axios'
const baseUrl = 'http://localhost:5000'
export const getTodos = (setTodos) =>{
    axios.get(baseUrl)
    .then(response=>{
        setTodos(response.data)
        console.log(response.data)
    })
}
export const addTodos = (text, setText, setTodos) => {
    axios.post(`${baseUrl}/save`, {text})
    .then(()=>{
        console.log(text)
        setText("");
        getTodos(setTodos)
    })
}
export const updateTodos = (_id, text, setText, setTodos, setIsUpdating) =>{
    axios.post(`${baseUrl}/update`, {_id, text})
    .then(()=>{
        console.log("update success")
        setIsUpdating(false);
        setText("");
        getTodos(setTodos);
    })
}
export const deleteTodos = (_id, setTodos)=>{
    axios.post(`${baseUrl}/delete`, {_id})
    .then(()=>{
        console.log("delete success");
        getTodos(setTodos)
    })
}