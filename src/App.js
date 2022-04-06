import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Completed from "./Components/Completed/Completed";
import Form from "./Components/Form/Form";
import Categories from "./Components/Categories/Categories";
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <div className='app-main-outer'>
                <div className='app-main-inner'>
                    <Completed />
                    <Form />
                    <Categories />
                </div>
            </div>
            
            <Footer />
        </div>
    );
}

export default App;
