import React from 'react'
import {Link} from 'react-router-dom';

function Register() {
    return (
        <div>
            <form action="/register" method="POST">
                <div>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required/>
                </div>
                <div>
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required/>
                </div>
                    <button type="submit">Register</button>
                </form>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Register
