import React, { useContext } from "react";
import Todo from "../Todo/Todo";
import "./inprogress.css";
import { TodosContext } from "../Context/TodosContext";

const InProgress = () => {
    // let todos = props.list;
    // const { todoList, setTodoList} = useContext(TodosContext);
    const [todos, setTodos] = useContext(TodosContext);
    // console.log(todoList);

    return (
        <div className="inprogress-outer">
            {todos && todos.map((task) => {
                return (
                    task.complete === "0" 
                        ? <Todo key={task.id} title={task.title} body={task.body} completed={task.complete} /> 
                        : <></>
                )
            })}
        </div>
    )
}

export default InProgress;