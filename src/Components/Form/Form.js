import React, { useState } from "react";
import "../Form/form.css";
import axios from "axios";

const Form = () => {
    const [inputs, setInputs] = useState({
        category: "",
        title: "",
        body: ""
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Submited! ${JSON.stringify(inputs)}`);
        axios({
            method: "POST",
            url: "http://localhost/api/post/create.php",
            data: JSON.stringify(inputs)
        }).then((response) => {
            if(response.data.status === 'success') {
                console.log("Task Created")
                setInputs({category: "", title: "", body: ""});
            } else if(response.data.status === 'fail') {
                console.log("There was an issue creating your task")
            }
        })
    }

    const resetForm = () => {
        
    }

    return (
        <form>
            <div>Look at me, I'm a form!</div>
            <input type="text" name="category" onChange={handleChange} placeholder="category"/>
            <input type="text" name="title" onChange={handleChange} placeholder="title"/>
            <input type="text" name="body" onChange={handleChange} placeholder="body"/>
            <button type="submit" onClick={handleSubmit}>Add Task</button>
        </form>
    )
}

export default Form;