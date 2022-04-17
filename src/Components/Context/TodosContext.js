import React, { createContext, useReducer } from "react";

export const TodosContext = createContext();

function reducer(state, action) {
    switch(action.type) {
        case "add-todo":
            return {todos: [...state.todos, {text: action.text, complete: 0}] };
        default:
            return state; 
    }
}

export const TodosProvider = (props) => {
    const [{todos}, dispatch] = useReducer(reducer, {todos: []});
    // const [todos, setTodos] = useState([
    //     {
    //         id: 1,
    //         title: "Please work",
    //         complete: "0"
    //     },
    //     {
    //         id: 2,
    //         title: "I'm done",
    //         complete: "1"
    //     }
    // ]);

    return(
        <TodosContext.Provider value={[{todos}, dispatch]}>
            {props.children}
        </TodosContext.Provider>
    );
}