import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import './App.css';
// import { Button, Form, Input, InputGroup, Row } from 'reactstrap';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }

    }
    // email(event) {
    //     this.setState({ email: event.target.value })
    // }
    // password(event) {
    //     this.setState({ password: event.target.value })
    // }

    handleChange(event) {
        var value = event.target.name;
        this.setState({
          [value]: event.target.value
        });
      }

    async login(event) {
        console.log(this.state)
        await fetch('http://localhost:8092/api/v1/employee/get-login_in', {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            }).then((Response) => Response.json())
                .then((result) => {
                    console.log(result);
                    window.location = "/welcomePage";
                    if (result.Status == 'Invalid')
                        alert('Invalid User');
                    else {
                        return false;
                    }
                })
        }
        
        render() {
            return (
            <div id="login" style={{background: "linear-gradient(115deg, #56d8e4 10%, #9f01ea 90%)", width:"100%", height:"88.2vh"}}>
            <div className="center">
                    <input type="checkbox" id="show" />
                    <label for="show" className="show-btn">View Form</label>
                    <div className="container">
                    <label for="show" className="close-btn fas fa-times" title="close"></label>
                    <div className="text">
                        Login Form
                    </div>
                <form action="#">
                    <div className="data">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange.bind(this)} required />
                </div>
                <div className="data">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange.bind(this)} required />
                </div>
                <div className="forgot-pass">
                <a href="#">Forgot Password?</a></div>
                <div className="btn">
                    <div className="inner">
                </div>
                    <button onClick={this.login.bind(this)} color="success" block>login</button>
                </div>
                <div className="signup-link">
                    Not a member? <a href="#">Signup now</a></div>
                </form>
                </div>
                </div>
            </div>

            );
        }
    }
