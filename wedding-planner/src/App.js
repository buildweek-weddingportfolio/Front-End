import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import NavBar from "./components/navBar/NavBar";
import {PrivateRoute} from "./utils/PrivateRoute";
import PlannerEvents from "./components/events/PlannerEvents";
import DashBoard from './components/dashboard/DashBoard'

function App() {
    return (
        <Router>
            <NavBar />
            <div className="spacer" />
            <div className="wallpaper" />
            <div className="white" />
            <PrivateRoute path= "/dashboard" component={DashBoard} />
            <Route exact path="/" component={PlannerEvents} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Router>
    );
}

export default App;
