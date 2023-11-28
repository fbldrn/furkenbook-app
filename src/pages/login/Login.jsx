import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">FurkenBook</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on FurkenBook.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder='Email' className="loginInput" />
                        <input placeholder='Password' className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <Link to="/register">
                            <button className="loginRegisterButton">Create a New Account</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login