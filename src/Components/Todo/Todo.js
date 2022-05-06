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

    return(
        <div className="todo">
            <div className="todo-body">
                {props.complete === 0
                        ? <div>{props.title}</div>
                        : <div className="strikethrough">{props.title}</div>}
            </div>
            <div className="complete-delete">
                {props.complete === 0
                    // ? <button className="complete" onClick={makeComplete}><i className="fas fa-check"></i></button>
                    ? <button className="complete" onClick={() => dispatch({type: 'done', index: props.key})}><i className="fas fa-check"></i></button>
                    : <button className="incomplete"><i className="fas fa-x"></i></button>}
                <button className="delete"><i className="fas fa-trash-can"></i></button>
            </div>
        </div>
    )
}

export default Todo;