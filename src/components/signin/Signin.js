import React, {Component} from "react";
import "./Signin.css";
import axios from "axios";
import { Link } from "react-router-dom";


export default class Signin extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: ""
        };
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    login = (event) => {
        event.preventDefault();
        const {username, password} = this.state;
        axios
            .post('/auth/login', {username, password})
            .then((res) => {
                console.log(res.data);
                this.props.loginUser(res.data)
                this.props.history.push('/profile');
            })
            .catch((error) => alert(error, "Username or Password is incorrect"))
    }

    render() {
        const { username, password } = this.state;
        return (
          <div className="signIn-container">
            
            <div className="signIn-content">
              <p className="signIn-page-title-content">Welcome Back!</p>
              <form className="form-content" onSubmit={this.login}>
                <input
                  className="signIn-input-box"
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={username}
                  onChange={(event) => this.changeHandler(event)}
                />
                <input
                  className="signIn-input-box"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => this.changeHandler(event)}
                />
                <div className="form-btns">
                  <input className="form-blue-btn" type="submit" value="Sign In" />
                  <Link to="/">
                    <input className="form-blue-btn" type="button" value="Back" />
                  </Link>
                </div>
                <p className="dont-have-sentence">
                  Don't already have an account?{" "}
                  <Link style={{ textDecoration: "none" }} to="/register">
                    <span className="register-btn-landing">Register Here</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        );
    }
}
