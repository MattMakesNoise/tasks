import React, { useState } from "react";
import "./categories.css";
import axios from "axios";

const Categories = () => {
    const [todos, setTodos] = useState([]);

    const getTodos = () => {
        axios({
            method: "GET",
            url: "http://localhost/api/post/read.php",
            data: (todos)
        }).then((response) => {
            console.log(response);
            setTodos(response);
        })
    }

    getTodos();


    return (
        <div className="categories-outer">I am the categories with todos</div>
    )
}

export default Categories;