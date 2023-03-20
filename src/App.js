import "./App.css";
import Robots from "./components/Robots";
import { Button, Modal } from 'antd';


function App() {
    
    return (
        <section className="container">
            <h1 className="title">MES AMIS ROBOTS</h1>
            <Robots/>
        </section>
    );
}

export default App;
