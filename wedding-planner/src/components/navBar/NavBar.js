import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout, loginFix } from "../../actions";


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
                <nav>
                    <img src="" alt="WeddingGram Logo" />
                    <a href="#">Learn More</a>
                    <Link to="/">Home</Link>
                    <Link to={`/dashboard/${id}`}>Dashboard</Link>
                    <Link onClick={this.props.logout} to="/">Logout</Link>
                </nav>
            )
        } else {
            return (
                <nav>
                    <img src="" alt="WeddingGram Logo" />
                    <a href="#">Learn More</a>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </nav>
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