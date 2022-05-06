import React, { useContext } from "react";
import Todo from "../Todo/Todo";
import "./inprogress.css";
import { TodosContext } from "../Context/TodosContext";

const InProgress = (props) => {
    // let todos = props.list;
    // const { todoList, setTodoList} = useContext(TodosContext);
    // const [todos, setTodos] = useContext(TodosContext);
    const [todos, dispatch] = useContext(TodosContext);

    return (
        <div className="inprogress-outer">
            {todos.map((task, index) => {
                return (
                    task.complete === 0 ? <Todo key={index} title={task.title} complete={task.complete} dispatch={dispatch}/> : <></> 
                    // <Todo key={task.id} title={task.title} complete={task.complete} /> 
                )
            })}
        </div>
    )
}

export default InProgress;