import React, { useState } from "react";
import useGet from "../Fetches/useGet";
import "./categories.css";
import axios from "axios";

const Categories = () => {
    const {data, loading, error} = useGet();
    
    // const [done, setDone] = useState([]);
    // console.log(done);
    
    const makeComplete = (id) => {
        axios.put("http://localhost/api/complete.php", {id: id});
        console.log(id);
    }

    let todos;

    if(loading) return <div>Loading...</div>;

    if(error) console.log(error);

    if(data) {
        todos = data.data;
        console.log(todos);
    }

    return (
        <div className="categories-outer">
        {todos && todos.map((todo) => {
            return (
                <div>
                    {todo.complete === 0 ?
                        <div className="todo">
                            <div className="todo-body">
                                <div>{todo.title}</div>
                                <div>{todo.body}</div>
                            </div>
                            <div className="complete-delete">
                                {/* <button className="complete" onClick={() => setDone(done => [todo.title, todo.body, todo.category, ...done])}><i className="fas fa-check"></i></button> */}
                                <button className="complete" onClick={makeComplete(todo.id)}><i className="fas fa-check"></i></button>
                                <button className="delete"><i className="fas fa-trash-can"></i></button>
                            </div>
                        </div> :
                        <div className="todo hide"></div>}
                </div>
            )
        })}
        </div>
    )
}

export default Categories;