import React from "react";
import { connect } from "react-redux";
import { register } from "../actions";

class Register extends React.Component {
    state = {
        username: "",
        password: "",
    }

    render() {
        return(
            <div>
                <form onSubmit={this.register}>
                    <input 
                        type="text"
                        placeholder="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChanges}
                    />
                    <input 
                        type="text"
                        placeholder="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChanges}
                    />
                    <button type="submit">Log In</button>
                </form>
            </div>
        );
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    register = e => {
        e.preventDefault();
        const creds = {
            username: this.state.username,
            password: this.state.password,
        }
        this.props.register(creds);
    }

}

const mapStateToProps = () => {}

export default connect(mapStateToProps, {register} )(Register);