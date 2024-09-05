import React, {useState} from "react";
export const TodoForm = ({addTodo})=>{
  const [value, setValue] = useState("")

  const handleChange =(event)=>{
    setValue(event.target.value);
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    addTodo(value);
    setValue("")
  }
  return(
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" className="todo-input" autoComplete="off" minLength="1" value={value}
      placeholder="Enter your task" onChange={handleChange}/>
      <button type="submit" className="todo-btn">Add Task</button>
    </form>
  )
}