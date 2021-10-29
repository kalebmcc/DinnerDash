import React from 'react'
import {useState,useContext} from 'react'
import {useHistory} from 'react-router-dom'
import 'materialize-css'
import { Button, Modal, TextInput,Toast } from 'react-materialize'
import axios from 'axios';
import M from 'materialize-css';
import {DataContext} from '../../contexts/DataContext.js'

export default function SignInForm() {

    let history = useHistory();
    const {loginStatus, setLoginStatus} = useContext(DataContext)
    const { user,setUser } = useContext(DataContext);
    const [logUser, setLogUser] = useState({
		'email': '',
		'password': ''
	});

    async function handleSubmit(event){
        event.preventDefault();

        try {
            let addUser = {...logUser}
            const addUserURL = 'https://boiling-escarpment-83647.herokuapp.com/token/login'
            console.log(addUser)
            let res = await axios.post(addUserURL, addUser)
            if(res){
                setLoginStatus(true);
                console.log(res)
				localStorage.setItem('token', res.data.auth_token);
				localStorage.setItem('loginStatus', loginStatus);
                M.toast({html:'Signed In!'})
                history.push('/')
            }
        } catch (error) {
            M.toast({html: 'Unexpected Error! Try Again!'})
        }
    }

    function handleChange(event){
        event.preventDefault();

        setLogUser({ ...logUser, [event.target.className]: event.target.value })
    } 
    return (
        <div className='signinform'>
            <h4>Sign In</h4>
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
            id="TextInput-210"
            label="Password"
            className='password'
            password
            onChange={handleChange}
            /><br/>

        <Button type='submit'>SUBMIT</Button>
        
  </form>
        </div>
    )
}
