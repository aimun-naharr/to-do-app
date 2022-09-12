import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
    
    const [todos, setTodos]=useState([])

   
    //     
    
    useEffect(() => {
        localStorage.setItem('list',JSON.stringify(todos));
        
    }, [todos])
    
    
    const addTodo=todo=>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos=[todo, ...todos]
      
       setTodos(newTodos)
       localStorage.setItem('list', JSON.stringify(newTodos))
    }

    const updateTodo=(todoId, newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }
        setTodos(prev=>prev.map(item=>(item.id===todoId? newValue: item)))
    }

    const completeTodo=id=>{

        let updatedtodos=todos.map(todo=>{
            if(todo.id===id){
                todo.isComplete=!todo.isComplete
            }
            return todo
        }
        )
        localStorage.setItem('list', JSON.stringify(updatedtodos))
        setTodos(updatedtodos)
    }
    const removeTodo=id=>{
        const removeArr=todos.filter(todo=>todo.id !==id)
        setTodos(removeArr)
    }
    const list = JSON.parse(localStorage.getItem("list"));
  
    useEffect(() => {
            
           
             if(list){
               setTodos(list);
              console.log(list)
             }
           },[])
   
    return (
        <div className='todoList'>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    );
};

export default TodoList;