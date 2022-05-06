import React, { useContext } from "react";
import Todo from "../Todo/Todo";
import "./inprogress.css";
import { TodosContext } from "../Context/TodosContext";

const InProgress = (props) => {
    const [todos, dispatch] = useContext(TodosContext);

    return (
        <div className="inprogress-outer">
            {todos.map((task) => {
                return (
                    task.complete === 0 ? <Todo key={task.id} title={task.title} id={task.id} complete={task.complete} dispatch={dispatch}/> : <></> 
                )
            })}
        </div>
    )
}

export default InProgress;