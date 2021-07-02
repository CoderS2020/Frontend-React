import React,{useState} from 'react'
import {Link} from 'react-router-dom';

function Register() {
    const [user,setUser] = useState({name:'',email:'',password:'',confirmPassword:''});

    let name, value;
    //Update changes in form
    const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    
    };


    const postRegisterData = async (e) => {
        console.log('Registering');
        e.preventDefault();
        const res = await fetch("users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name:user.name,email:user.email, password:user.password, confirmPassword:user.confirmPassword
          })
    
        });
        const data = await res.json();
    

        if(data){
          //Check if the login was successful and then push user to Session.js
          // history.push('/session');
          console.log(data);
        }
        else{
            //If the credentials were wrong then alert wrong credentials
            // alert('Wrong credentials');
    
          // history.push('/login');
    
        }
    
    
    
    
    
      };


    return (
        <div>
            <form method="POST">
                <div>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" value={user.name} onChange={handleChange} required/>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" value={user.email} onChange={handleChange} required/>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" value={user.password} onChange={handleChange} required/>
                </div>
                <div>
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} required/>
                </div>
                    <button type="submit" onClick={postRegisterData}>Register</button>
                </form>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Register
