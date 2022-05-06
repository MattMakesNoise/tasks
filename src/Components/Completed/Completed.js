import React, { useContext } from "react";
import Todo from "../Todo/Todo";
import "./completed.css";
import { TodosContext } from "../Context/TodosContext";

const Completed = (props) => {
    const [todos, dispatch] = useContext(TodosContext);

    return (
        <div className="completed-outer">
            {todos.map((task) => {
                return (
                    task.complete === 1 ? <Todo key={task.id} title={task.title} id={task.id} complete={task.complete} dispatch={dispatch}/> : <></> 
                )
            })}
        </div>
    )
}

export default Completed;