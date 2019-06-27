import React from "react";
import { connect } from "react-redux";
import { login, noError } from "../../actions";
import wg_logo from "../../utils/wg_logo.png"
import Loader from "react-loaders";
import "./Login.scss";

class Login extends React.Component {
    state = {
        username: "",
        password: "",
    }
    // className={this.props.loggingIn ? "loader-active" : "loader-hidden"}

    render() {
        return(
            <div className="login">
                <div className="login-container">
                    <h1 className={this.state.username.length === 0 ? null : "clickable"} >Log In</h1>
                    <div className="img-container">
                        <img src={wg_logo} alt="Wedding Gram" />
                        <Loader  type="ball-spin-fade-loader" className={this.props.loggingIn ? "loader-active" : "loader-hidden"} />
                    </div>
                    <p className={this.props.error ? "error active" : "error"}>{this.props.error}</p>
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
                        <button className={this.state.username.length === 0 ? null : "clickable"} type="submit">Log In</button>
                    </form>
                </div>
            </div>
        );
    }


    componentDidMount() {
        this.props.noError();
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
                    const id = localStorage.getItem("userId")
                    this.props.history.push(`/dashboard/${id}`);
                }
            });
    }
}

const mapStateToProps = ({ loggingIn, error }) => {
    return {
        loggingIn,
        error,
    };
}

export default connect(mapStateToProps, { login, noError } )(Login);