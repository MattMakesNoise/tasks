import React, { createContext, useReducer } from "react";
import {newTodo} from "../Form/Form.js";

export const TodosContext = createContext();

export const ACTIONS = {
    ADD_TASK: 'add-todo',
    TASK_DONE: 'todo-complete',
    TASK_NOT_DONE: 'todo-incomplete',
    DELETE_TASK: 'delete-todo'
}

function reducer(todos, action) {
    switch(action.type) {
        case ACTIONS.ADD_TASK:
            return [...todos, newTodo(action.payload.title)];
        case ACTIONS.TASK_DONE:
            return todos.map((task) => task.id === action.payload.id ? {...task, complete: 1} : task);
        case ACTIONS.TASK_NOT_DONE:
            return todos.map((task) => task.id === action.payload.id ? {...task, complete: 0} : task);
        // case ACTIONS.DELETE_TASK:
        //     return {todos: state.todos.map((task, index) => index === action.index ? {...task, complete: 0} : task) };
        default:
            return todos; 
    }
}

export const TodosProvider = (props) => {
    const [todos, dispatch] = useReducer(reducer, []);

    return(
        <TodosContext.Provider value={[todos, dispatch]}>
            {props.children}
        </TodosContext.Provider>
    );
}