import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class NavBar extends React.Component{
    
    render() {
        return (
            <nav>
                <img src="" alt="WeddingGram Logo" />
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to={`/dashboard${this.props.userId}`}>Dashboard</Link>
            </nav>
        );
    }
}

const mapStateToProps = ({userId}) => {
    return {userId}
}

export default connect(mapStateToProps)(NavBar);