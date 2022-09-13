import React, { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit? props.edit.value:'');
  const inputRef=useRef(null)
  useEffect(()=>{
    inputRef.current.focus()
  },[])
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
    <div className="">
      <form onSubmit={handleSubmit} className='todo-form'>
        {
            props.edit?<><input className="todo-input edit" type="text" name='text' placeholder="Update the todo...." value={input} onChange={handleChange} ref={inputRef}/>
            <button className="todo-button" type="submit">Update</button></>:
            <><input className="todo-input" type="text" name='text' placeholder="Add a todo...." value={input} onChange={handleChange} ref={inputRef}/>
            <button className="todo-button" type="submit">Add</button></>
        }
      </form>
    </div>
  );
};

export default TodoForm;
