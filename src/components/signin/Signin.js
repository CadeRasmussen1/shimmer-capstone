import React, {Component} from "react";
import "./Signin.css";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

export default class Signin extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: "",
            loggedIn: false
        };
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    signIn = (event) => {
        event.preventDefault();
        axios
          .post('http://localhost:4001/auth/signIn', this.state)
          .then(() => this.setState({...this.state, loggedIn: true}))
          .catch((error) => alert(error.response.data, "Username or Password is incorrect"))
    }

    render() {
        const { username, password, loggedIn } = this.state;
        if(this.state.loggedIn)
          return(<Navigate to='/mainpage' />)

        return (
          <div className="signin-container">
            
            <div className="signin-content">
              <p className="signin-page-title-content">Welcome Back!</p>
              <form className="form-content" onSubmit={this.signIn}>
                <input
                  className="signin-input-box"
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={username}
                  onChange={(event) => this.changeHandler(event)}
                />
                <input
                  className="signin-input-box"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => this.changeHandler(event)}
                />
                <div className="form-btns">
                  <input className="form-blue-btn-one" type="submit" value="Sign In" />
                  <Link to="/">
                    <input className="form-blue-btn-two" type="button" value="Back" />
                  </Link>
                </div>
                
              </form>
            </div>
          </div>
        );
    }
}
