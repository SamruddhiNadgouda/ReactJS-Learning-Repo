import { useState } from "react";
import { v4 as uuid4 } from 'uuid';

export default function TodoList(){
    let [todos, setTodos] = useState([{task: "Sample Task", id: uuid4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () =>{
        setTodos((prevTodos) =>{
            return [...prevTodos, {task: newTodo, id: uuid4(), isDone: false}]
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) =>{
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    };

    let markAsDoneAll = () =>{
        setTodos((prevTodos) => (
            prevTodos.map((todo) =>{
                return {
                    ...todo,
                    isDone: true,
                };
            })
        ));
    };

    let markAsDone = (id) =>{
        setTodos((prevTodos) => (
            prevTodos.map((todo) =>{
                if(todo.id == id){
                    return {
                        ...todo,
                        isDone: true,
                    };
                } else{
                    return todo;
                }
            })
        ));
    };


    return(
        <div>
            <input placeholder="Add a task" value={newTodo} onChange={updateTodoValue}></input>  
            <br></br>
            <br></br>  

            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>
            <h4>Todo List</h4>
            <ul>
                {
                    todos.map((todo) =>(
                        <li key={todo.id}>
                            <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span> 
                            &nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            &nbsp;&nbsp;
                            <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
                        </li>
                    ))
                }
            </ul>
            <br></br>
            <button onClick={markAsDoneAll}>Mark as Done All</button>

        </div>
    );
}