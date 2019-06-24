import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import PlannerEvents from "./components/PlannerEvents"

function App() {
    return (
        <Router>
            <Route exact path="/" component={PlannerEvents} />
            <Route path="/login" component={Login} />
        </Router>
    );
}

export default App;
