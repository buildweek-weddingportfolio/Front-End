import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import NavBar from "./components/navBar/NavBar";
import AddEvent from "./components/AddEvent";
import PlannerEvents from "./components/PlannerEvents";
import DashBoard from './components/dashboard/DashBoard'

function App() {
    return (
        <Router>
            <NavBar/>
            <Route path= "/dashboard/:id" component={DashBoard} />
            <Route path="/addEvent" component={AddEvent} />
            <Route exact path="/" component={PlannerEvents} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Router>
    );
}

export default App;
