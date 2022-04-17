import React from "react";
import axios from "axios";
import "./todo.css";

const Todo = (props) => {
    const makeComplete = () => {
        axios.put("http://localhost/api/post/complete.php", {id: props.id});
        console.log(props.completed);
    }

    return(
        <div className="todo">
            <div className="todo-body">
                {props.completed === "0"
                        ? <div>{props.title}</div>
                        : <div className="strikethrough">{props.title}</div>}
            </div>
            <div className="complete-delete">
                {props.completed === "0"
                    ? <button className="complete" onClick={makeComplete}><i className="fas fa-check"></i></button>
                    : <></>}
                <button className="delete"><i className="fas fa-trash-can"></i></button>
            </div>
        </div>
    )
}

export default Todo;