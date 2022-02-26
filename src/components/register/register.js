import React, {Component} from 'react';
import './register.css';
import axios from 'axios';
import { loginUser } from '../../default/default';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
export default class Register extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: ""
        }
    }


    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    register = (event) => {
        event.preventDefault();
        const {username, password} = this.state;
        axios
            .post("/auth/register", {username, password})
            .then((res) => {
                this.props.loginUser(res.data);
                this.props.history.push("/Signin");
            })
            .catch((error) => {
                alert(error, "Couldn't register a user at this time");
            });
    };

    render() {
        const { username, password } = this.state;
        return (
          <div className="register-container">
            
            <div className="register-content">
              <p className="register-page-title-content">Lets get to sharing!</p>
              <form className="form-content" onSubmit={this.register}>
                <input
                  className="register-input-box"
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={username}
                  onChange={(event) => this.changeHandler(event)}
                />
                <input
                  className="register-input-box"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => this.changeHandler(event)}
                />
                <div className="form-btns">
                  <input 
                    className="form-blue-btn" 
                    type="submit"
                    value="Register" />
                  <Link to="/">
                  <input
                    className="form-blue-btn"
                    type="button"
                    value="Back"
                  />
                  </Link>
                </div>
                <p className="dont-have-sentence">
                  Already have an account?{" "}
                  <Link style={{ textDecoration: "none" }} to="/SignIn">
                    <span className="register-btn-landing">Sign in Here</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        );
      }

}
