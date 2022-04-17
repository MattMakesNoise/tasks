import React, { useContext } from "react";
import Todo from "../Todo/Todo";
import "./completed.css";
import { TodosContext } from "../Context/TodosContext";

const Completed = () => {
    const [todos, setTodos] = useContext(TodosContext);
    // let todos = props.list;

    return (
        <div className="completed-outer">
            {todos && todos.map((task) => {
                return (
                    task.complete === "1" 
                        ? <Todo key={task.id} title={task.title} body={task.body} completed={task.complete} /> 
                        : <></>
                )
            })}
        </div>
    )
}

export default Completed;