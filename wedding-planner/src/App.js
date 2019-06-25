import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AddEvent from "./components/AddEvent";
import PlannerEvents from "./components/PlannerEvents"

function App() {
    return (
        <Router>
            {/* <Route path= "/dashboard" component={DashBoard} /> */}
            <Route path="/addEvent" component={AddEvent} />
            <Route exact path="/" component={PlannerEvents} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Router>
    );
}

export default App;
