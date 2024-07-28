import React, {useState} from "react";
export const EditTodoForm = ({editTodo,task})=>{
  const [value, setValue] = useState(task.task)

  const handleChange =(event)=>{
    setValue(event.target.value);
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    editTodo(value, task.id);
    setValue("")
  }
  return(
    <form className="TodoForm">
      <input type="text" className="todo-input" value={value}
      placeholder="Update Task" onChange={handleChange}/>
      <button type="submit" className="todo-btn" onClick={handleSubmit}>Update Task</button>
    </form>
  )
}