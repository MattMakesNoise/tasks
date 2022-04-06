import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <div>Hello World!</div> 
            <Form />
            <Footer />
        </div>
    );
}

export default App;
