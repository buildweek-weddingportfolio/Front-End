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
                        type="password"
                        placeholder="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChanges}
                        required
                    />
                    <button type="submit">Log In</button>
                    <p className="error">{this.props.error}</p>
                </form>
            </div>
        );
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    login = e => {
        e.preventDefault();
        const creds = {
            username: this.state.username,
            password: this.state.password,
        }
        this.props.login(creds)
            .then(res => {
                if (res) {
                    const username = this.state.username;
                    this.props.history.push(`/dashboard/${username}`);
                }
            });
        this.setState({
            username: "",
            password: "",
        })
    }

}

const mapStateToProps = ({loggingIn, error}) => {
    return {
        loggingIn,
        error
    };
}

export default connect(mapStateToProps, {login} )(Login);