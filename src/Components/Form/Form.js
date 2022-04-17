import React, { useState, useContext } from "react";
import "../Form/form.css";
import { TodosContext } from "../Context/TodosContext";
// import axios from "axios";

const Form = () => {
    const [text, setText] = useState('');
    const [{todos}, dispatch] = useContext(TodosContext);

    const fillTask = (e) => {
        setText(e.target.value);
    }

    const addTask = (e) => {
        e.preventDefault();
        dispatch({type: "add-todo", text});
        setText("")
    }

    // console.log(todos);
    
    return(
        <form onSubmit={addTask}>
            <input type="text" name="text" value={text} onChange={fillTask}/>
            <button>Add Task</button>
        </form>
    )


    // const [inputs, setInputs] = useState({category: "", title: "", body: ""});

    // const handleChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setInputs(values => ({...values, [name]: value}));
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(`Submited! ${JSON.stringify(inputs)}`);
    //     axios({
    //         method: "POST",
    //         url: "http://localhost/api/post/create.php",
    //         data: JSON.stringify(inputs)
    //     }).then((response) => {
    //         setInputs({category: "", title: "", body: ""});
    //         if(response.data.status === 'success') {
    //             console.log("Task Created");
    //             //Add success pop up
    //         } else if(response.data.status === 'fail') {
    //             console.log("There was an issue creating your task");
    //             //Add failure popup
    //         }
    //     })
    // }

    // return (
    //     <form>
    //         <input type="text" name="category" onChange={handleChange} placeholder="category" value={inputs.category}/>
    //         <input type="text" name="title" onChange={handleChange} placeholder="title" value={inputs.title}/>
    //         <input type="text" name="body" onChange={handleChange} placeholder="body" value={inputs.body}/>
    //         <button type="submit" onClick={handleSubmit}>Add Task</button>
    //     </form>
    // )
}

export default Form;