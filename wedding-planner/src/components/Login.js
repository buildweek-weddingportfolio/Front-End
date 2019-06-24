import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";

class Login extends React.Component {
    state = {
        username: "",
        password: "",
    }

    render() {
        return(
            <div>
                <form onSubmit={this.login}>
                    <input 
                        type="text"
                        placeholder="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type="text"
                        placeholder="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChanges}
                        required
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

    login = e => {
        e.preventDefault();
        const creds = {
            username: this.state.username,
            password: this.state.password,
        }
        this.props.login(creds);
    }

}

const mapStateToProps = () => {
    return {};
}

export default connect(mapStateToProps, {login} )(Login);