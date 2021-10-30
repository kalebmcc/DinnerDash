import React from 'react'
import 'materialize-css'
import { Button, Navbar,Icon,NavItem } from 'react-materialize';
import SignUp from './Forms/SignUpButton';
import SignIn from './Forms/SignInButton';
import {Link, useHistory} from 'react-router-dom';
import {useContext} from 'react'
import { DataContext } from '../contexts/DataContext';


export default function Nav() {

	let history = useHistory();
	const {loginStatus, setLoginStatus} = useContext(DataContext)
	const { logUser,setLogUser } = useContext(DataContext);

	function logOutUser() {
		setLogUser(null);
		setLoginStatus(false)
		localStorage.clear();
		history.push('/signin_form')
	}

    return (
			<div>{!loginStatus ? <Navbar
  alignLinks="right"
  brand={<a className="brand-logo" href="/">Dinner Dash</a>}
  centerChildren
  centerLogo
  id="mobile-nav"
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
  }}
>
  <NavItem href="/signup_form">
    Sign Up
  </NavItem>
  <NavItem href="/signin_form">
    Log In
  </NavItem>
</Navbar>

//  <Navbar
// 					alignLinks='right'
// 					brand={
// 						<a className='brand-logo' href='#'>
// 							Dinner Dash
// 						</a>
// 					}
// 					id='mobile-nav'
// 					menuIcon={<Icon>menu</Icon>}
// 					options={{
// 						draggable: true,
// 						edge: 'left',
// 						inDuration: 250,
// 						onCloseEnd: null,
// 						onCloseStart: null,
// 						onOpenEnd: null,
// 						onOpenStart: null,
// 						outDuration: 200,
// 						preventScrolling: true,
// 					}}>
// 					<Link to='/signup_form'>
// 					<Button node='a'>Sign Up</Button>
// 					</Link>
// 					<Link to='/signin_form'>
// 					<Button node='a'>Sign In</Button>
// 					</Link>
					
// 				</Navbar>
				
				: 
				<Navbar
  alignLinks="right"
  brand={<a className="brand-logo" href="/">Dinner Dash</a>}
  id="mobile-nav"
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
    preventScrolling: true
  }}
><NavItem href="/new_recipe_form">
    Add Recipe
  </NavItem>
  <NavItem href="/user/">
    My Account
  </NavItem>
  <NavItem onClick={logOutUser}>
    Logout
  </NavItem>
</Navbar>


				// <Navbar
				// 	alignLinks='right'
				// 	brand={
				// 		<a className='brand-logo' href='#'>
				// 			Dinner Dash
				// 		</a>
				// 	}
				// 	id='mobile-nav'
				// 	menuIcon={<Icon>menu</Icon>}
				// 	options={{
				// 		draggable: true,
				// 		edge: 'left',
				// 		inDuration: 250,
				// 		onCloseEnd: null,
				// 		onCloseStart: null,
				// 		onOpenEnd: null,
				// 		onOpenStart: null,
				// 		outDuration: 200,
				// 		preventScrolling: true,
				// 	}}>
				// 	<Link to='/user/:id'><Button node='a'>User Account</Button></Link>
				// 	<Link to='/user/post_recipe'>
				// 		<Button node='d'>New Recipe</Button>
				// 	</Link>
				// 	<Button node='a' onClick={logOutUser}>Log Out</Button>
					
				// </Navbar>
			}
			</div>
		);
}
