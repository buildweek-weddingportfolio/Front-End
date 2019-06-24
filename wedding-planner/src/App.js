import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
    return (
        <Router>
            <Route path="/login" component={Login} />
        </Router>
    );
}

export default App;
