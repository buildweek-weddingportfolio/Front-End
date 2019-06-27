import React from "react";
import { connect } from "react-redux";
import { register } from "../../actions";
import wg_logo from "../../utils/wg_logo.png"
import Loader from "react-loaders";
import "./Register.scss";

class Register extends React.Component {
    state = {
        username: "",
        password: "",
        email: "",
        city: "",
        state: "",

    }

    render() {
        const clickable = this.state.username.length === 0 ||
                          this.state.password.length === 0 ||
                          this.state.email.length    === 0 ||
                          this.state.city.length     === 0;

        return(
            <div className="register">
                <div className="register-container">
                    <h1 className={clickable ? null : "clickable"}>Register</h1>
                    <div className="img-container">
                        <img src={wg_logo} alt="Wedding Gram" />
                        <Loader  type="ball-spin-fade-loader" className={this.props.loggingIn ? "loader-active" : "loader-hidden"} />
                    </div>
                    <p className={this.props.error ? "error active" : "error"}>{this.props.error}</p>
                    <form onSubmit={this.register}>
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
                        <input 
                            type="email"
                            placeholder="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChanges}
                            required
                        />
                        <input 
                            type="text"
                            placeholder="city"
                            name="city"
                            value={this.state.city}
                            onChange={this.handleChanges}
                            required
                        />
                        <select 
                            name="state"
                            value={this.state.state}
                            onChange={this.handleChanges}
                            required
                        >
                            <option value="AL">AL</option>
                            <option value="AK">AK</option>
                            <option value="AS">AS</option>
                            <option value="AZ">AZ</option>
                            <option value="AR">AR</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                            <option value="DE">DE</option>
                            <option value="DC">DC</option>
                            <option value="FM">FM</option>
                            <option value="FL">FL</option>
                            <option value="GA">GA</option>
                            <option value="GU">GU</option>
                            <option value="HI">HI</option>
                            <option value="ID">ID</option>
                            <option value="IL">IL</option>
                            <option value="IN">IN</option>
                            <option value="IA">IA</option>
                            <option value="KS">KS</option>
                            <option value="KY">KY</option>
                            <option value="LA">LA</option>
                            <option value="ME">ME</option>
                            <option value="MH">MH</option>
                            <option value="MD">MD</option>
                            <option value="MA">MA</option>
                            <option value="MI">MI</option>
                            <option value="MN">MN</option>
                            <option value="MS">MS</option>
                            <option value="MO">MO</option>
                            <option value="MT">MT</option>
                            <option value="NE">NE</option>
                            <option value="NV">NV</option>
                            <option value="NH">NH</option>
                            <option value="NJ">NJ</option>
                            <option value="NM">NM</option>
                            <option value="NY">NY</option>
                            <option value="NC">NC</option>
                            <option value="ND">ND</option>
                            <option value="MP">MP</option>
                            <option value="OH">OH</option>
                            <option value="OK">OK</option>
                            <option value="OR">OR</option>
                            <option value="PW">PW</option>
                            <option value="PA">PA</option>
                            <option value="PR">PR</option>
                            <option value="RI">RI</option>
                            <option value="SC">SC</option>
                            <option value="SD">SD</option>
                            <option value="TN">TN</option>
                            <option value="TX">TX</option>
                            <option value="UT">UT</option>
                            <option value="VT">VT</option>
                            <option value="VI">VI</option>
                            <option value="VA">VA</option>
                            <option value="WA">WA</option>
                            <option value="WV">WV</option>
                            <option value="WI">WI</option>
                            <option value="WY">WY</option>
                        </select>
                        <button className={clickable ? null : "clickable"} type="submit">Register</button>
                    </form>
                </div>
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
            email: this.state.email,
            location: `${this.state.city}, ${this.state.state}`,
        }
        this.props.register(creds)
            .then(res => {
                if (res) {
                    const id = localStorage.getItem("userId")
                    this.props.history.push(`/dashboard/${id}`);
            }});
    }

}

const mapStateToProps = ({ loggingIn, error }) => {
    return {
        loggingIn,
        error,
    };
}

export default connect(mapStateToProps, {register} )(Register);