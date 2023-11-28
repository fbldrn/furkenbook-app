import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
            <Link to="/" style={{textDecoration:"none"}}>
                <h3 className="loginLogo">FurkenBook</h3>
                </Link>
                <span className="loginDesc">
                    Connect with friends and the world around you on FurkenBook.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Username' className="loginInput" />
                    <input placeholder='Email' className="loginInput" />
                    <input placeholder='Password' className="loginInput" />
                    <input placeholder='Password Again' className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <Link to="/login">
                    <button className="loginRegisterButton">Log into Account</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login