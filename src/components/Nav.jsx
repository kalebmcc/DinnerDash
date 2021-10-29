import React from 'react'
import 'materialize-css'
import { Button, Navbar,Icon, } from 'react-materialize';
import SignUp from './Forms/SignUpButton';
import SignIn from './Forms/SignInButton';
import {Link, useHistory} from 'react-router-dom';
import {useContext} from 'react'
import { DataContext } from '../contexts/DataContext';


export default function Nav() {

	let history = useHistory();
	const {loginStatus, setLoginStatus} = useContext(DataContext)
	const { user, setUser } = useContext(DataContext);

	function logOutUser() {
		setUser(null);
		setLoginStatus(false)
		localStorage.clear();
		history.push('/users/login')
	}

    return (
			<div>{!loginStatus ? <Navbar
					alignLinks='right'
					brand={
						<a className='brand-logo' href='#'>
							Dinner Dash
						</a>
					}
					id='mobile-nav'
					menuIcon={<Icon>menu</Icon>}
					options={{
						draggable: true,
						edge: 'left',
						inDuration: 250,
						onCloseEnd: null,
						onCloseStart: null,
						onOpenEnd: null,
						onOpenStart: null,
						outDuration: 200,
						preventScrolling: true,
					}}>
					<Link to='/signup_form'>
					<Button node='a'>Sign Up</Button>
					</Link>
					<Link to='/signin_form'>
					<Button node='a'>Sign In</Button>
					</Link>
					
				</Navbar>:
				<Navbar
					alignLinks='right'
					brand={
						<a className='brand-logo' href='#'>
							Dinner Dash
						</a>
					}
					id='mobile-nav'
					menuIcon={<Icon>menu</Icon>}
					options={{
						draggable: true,
						edge: 'left',
						inDuration: 250,
						onCloseEnd: null,
						onCloseStart: null,
						onOpenEnd: null,
						onOpenStart: null,
						outDuration: 200,
						preventScrolling: true,
					}}>
					<Link to='/user/:id'><Button node='a'>User Account</Button></Link><Button node='a' onClick={logOutUser}>Log Out</Button>
					
				</Navbar>}
			</div>
		);
}
