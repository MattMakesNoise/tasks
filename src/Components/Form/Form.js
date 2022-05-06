import React, { useState, useContext } from "react";
import "../Form/form.css";
import { ACTIONS } from "../Context/TodosContext";
import { TodosContext } from "../Context/TodosContext";
// import axios from "axios";

export const newTodo = (text) => {
    return {id: Date.now(), title: text, complete: 0}
}

const Form = () => {
    const [text, setText] = useState('');
    const [todos, dispatch] = useContext(TodosContext);

    const fillTask = (e) => {
        setText(e.target.value);
    }

    const addTask = (e) => {
        e.preventDefault();
        dispatch({type: ACTIONS.ADD_TASK, payload: {title: text}});
        setText("")
    }

    console.log(todos);
    
    return(
        <>
        <form onSubmit={addTask}>
            <input type="text" name="text" placeholder="Start typing to add a task" value={text} onChange={fillTask}/>
            <button>Add Task</button>
        </form>
        {/* <pre>{JSON.stringify(todos)} </pre> */}
        </>
    );
}

export default Form;