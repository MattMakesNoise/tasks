import React, { useContext } from "react";
import Todo from "../Todo/Todo";
import "./completed.css";
import { TodosContext } from "../Context/TodosContext";

const Completed = (props) => {
    // const [todos, setTodos] = useContext(TodosContext);
    const [todos, dispatch] = useContext(TodosContext);

    // return (
    //     <div className="completed-outer">
    //         {todos && todos.map((task) => {
    //             return (
    //                 task.complete === "1" 
    //                     ? <Todo key={task.id} title={task.title} body={task.body} completed={task.complete} /> 
    //                     : <></>
    //             )
    //         })}
    //     </div>
    // )
    return (
        <div className="completed-outer">
            {todos.map((task, index) => {
                return (
                    task.complete === 1 ? <Todo key={index} title={task.title} complete={task.complete} dispatch={dispatch}/> : <></> 
                    // <Todo key={task.id} title={task.title} complete={task.complete} /> 
                )
            })}
        </div>
    )
}

export default Completed;