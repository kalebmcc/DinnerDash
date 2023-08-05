import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import 'materialize-css'
import { Button, TextInput} from 'react-materialize'
import axios from 'axios';
import M from 'materialize-css';

export default function SignUpForm() {

    let history = useHistory();
    const [newUser, setNewUser] = useState({
		'email': '',
		'username': '',
		'password': '',
        'likes': 0
	});

    async function handleSubmit(event){
        event.preventDefault();

        try {
            let addUser = {...newUser}
            const addUserURL = 'https://dinnerdashbackend-052fd4a08eaf.herokuapp.com/users/'
            console.log(addUser)
            let res = await axios.post(addUserURL, addUser)
            if(res){
                M.toast({html:'Successfully Registered!'})
                history.push('signin_form')
            }
        } catch (error) {
            M.toast({html: 'Unexpected Error! Try Again!'})
        }
    }

    function handleChange(event){
        event.preventDefault();

        setNewUser({ ...newUser, [event.target.className]: event.target.value })
    } 
    return (
        <div className='signupform' style={{display:'flex',justifyContent:'center'}}>
            <div style={{width:'65%'}}>
             <h4>Sign Up</h4>
            <form onSubmit={handleSubmit}>
        <TextInput
            email
            id="TextInput-207"
            label="Email"
            className='email'
            validate
            onChange={handleChange}
            /><br/>
        <TextInput
            id="TextInput-222"
            label="Username"
            className='username'
            onChange={handleChange}
            /><br/>
        <TextInput
            id="TextInput-210"
            label="Password"
            className='password'
            password
            onChange={handleChange}
            /><br/>
            <TextInput
            id="TextInput-210"
            label="Confirm Password"
            className='re_password'
            password
            onChange={handleChange}
            />

        <Button type='submit'>SUBMIT</Button>
        
  </form>
  </div>
        </div>
    )
}
