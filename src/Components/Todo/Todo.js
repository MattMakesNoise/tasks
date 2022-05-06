import React, {useReducer, useContext} from "react";
// import axios from "axios";
import { ACTIONS } from "../Context/TodosContext";
import { TodosContext } from "../Context/TodosContext";
import "./todo.css";

const Todo = (props) => {
    // const makeComplete = () => {
    //     axios.put("http://localhost/api/post/complete.php", {id: props.id});
    //     console.log(props.completed);
    // }
    // const [state, dispatch] = useReducer(reducer, initialState);
    const [todos, dispatch] = useContext(TodosContext);
    console.log(todos)

    return(
        <div className="todo">
            <div className="todo-body">
                {props.complete === 0
                        ? <div>{props.title}</div>
                        : <div className="strikethrough">{props.title}</div>}
            </div>
            <div className="complete-delete">
                {props.complete === 0
                    ? <button className="complete" onClick={() => dispatch({type: ACTIONS.TASK_DONE, payload: {id: props.id}})}><i className="fas fa-check"></i></button>
                    : <button className="incomplete" onClick={() => dispatch({type: ACTIONS.TASK_NOT_DONE, payload: {id: props.id}})}><i className="fas fa-x"></i></button>}
                <button className="delete" onClick={() => dispatch({type: ACTIONS.DELETE_TASK, payload: {id: props.id}})}><i className="fas fa-trash-can"></i></button>
            </div>
        </div>
    )
}

export default Todo;