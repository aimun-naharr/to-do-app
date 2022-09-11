import React, { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const handleChange=(e)=>{
    setInput(e.target.value)
  }
  const handleSubmit=e=>{
    e.preventDefault()

    props.onSubmit({
        id:Math.floor(Math.random()*1000),
        text: input
    })
    setInput('')
  }
  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input type="text" name='text' placeholder="Add a todo...." value={input} onChange={handleChange}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
