import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout, loginFix } from "../../actions";
import "./NavBar.scss";
import wg_logo from "../../utils/wg_logo.png"


// Links need logic to display or not display depending on whether user is logged in.

class NavBar extends React.Component{

    componentDidMount() {
        const id = localStorage.getItem("userId");
        if (id) {
            this.props.loginFix(id)
        }
    }
    
    render() {
        if (this.props.loggedBoolean) {
            const id = localStorage.getItem("userId")
            return (
                <div className="navbar-container">
                    <nav className="navbar">
                        <div><img src={wg_logo} alt="WeddingGram Logo" /></div>
                        <a href="https://wedinggram.netlify.com">LEARN MORE</a>
                        <NavLink activeClassName="active" to="/">HOME</NavLink>
                        <NavLink activeClassName="active"  to={`/dashboard/${id}`}>DASHBOARD</NavLink>
                        <NavLink activeClassName="active"  onClick={this.props.logout} to="/">LOGOUT</NavLink>
                    </nav>
                </div>
            )
        } else {
            return (
                <div className="navbar-container">
                    <nav className="navbar">
                        <div><img src={wg_logo} alt="WeddingGram Logo" /></div>
                        <a href="https://wedinggram.netlify.com">LEARN MORE</a>
                        <NavLink activeClassName="active"  to="/">HOME</NavLink>
                        <NavLink activeClassName="active"  to="/login">LOGIN</NavLink>
                        <NavLink activeClassName="active"  to="/register">REGISTER</NavLink>
                    </nav>
                </div>
            );
        }
    }
}

const mapStateToProps = ({ loggedBoolean }) => {
    return { 
        loggedBoolean,
    }
}

export default connect(mapStateToProps, { logout, loginFix })(NavBar);