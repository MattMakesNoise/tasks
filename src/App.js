import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Completed from "./Components/Completed/Completed";
import Form from "./Components/Form/Form";
import InProgress from './Components/InProgress/InProgress';
import Footer from './Components/Footer/Footer';
import useGet from './Components/Fetches/useGet';
import { TodosProvider } from './Components/Context/TodosContext';

function App() {
    let todos;

    const {data, loading, error} = useGet();

    if(loading) return <div>Loading...</div>;

    if(error) console.log(error);

    if(data) {
        todos = data.data;
        console.log(todos);
    }
    return (
        <div className="App">
            <Header />
            <div className='app-main-outer'>
                <div className='app-main-inner'>
                    <TodosProvider>
                        <Completed/>
                        <Form />
                        <InProgress/>
                    </TodosProvider>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}

export default App;
