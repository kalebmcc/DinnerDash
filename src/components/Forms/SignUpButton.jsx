import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import 'materialize-css'
import { Button, Modal} from 'react-materialize'
import axios from 'axios';
import M from 'materialize-css';

export default function SignUp() {
    let history = useHistory();
    const [newUser] = useState();

    async function handleSubmit(event){
        event.preventDefault();

        try {
            let addUser = {...newUser}
            const addUserURL = 'https://dinnerdashbackend-052fd4a08eaf.herokuapp.com/users/'
            let res = await axios.post(addUserURL, addUser)
            if(res){
                M.toast({html:'Successfully Registered!'})
                history.push('login')
            }
        } catch (error) {
            M.toast({html: 'Unexpected Error! Try Again!'})
        }
    }



    return (
        <div>
            <Modal
  actions={[
    <Button flat modal="close" node="button" waves="green">Close</Button>
  ]}
  bottomSheet={false}
  fixedFooter={false}
  header="Sign Up"
  id="Modal-10"
  open={false}
  options={{
    dismissible: true,
    endingTop: '10%',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    opacity: 0.5,
    outDuration: 250,
    preventScrolling: true,
    startingTop: '4%'
  }}
  trigger={<Button node="a">Sign Up</Button>}
>
  <form onSubmit={handleSubmit}>
        {/* <TextInput
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

        <Button type='submit'>SUBMIT</Button> */}
        
  </form>
</Modal>
        </div>
    )
}
