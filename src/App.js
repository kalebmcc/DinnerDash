import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.jsx';
import Categories from './components/Categories';
import {Route} from 'react-router-dom';
import axios from 'axios'
import {useState,useEffect} from 'react'
import {DataContext} from './contexts/DataContext.js'
import SignUpForm from './components/Forms/SignUpForm';
import SignInForm from './components/Forms/SignInForm';

function App() {
  const [recipes, setRecipes] = useState()
  const [user,setUser] = useState()
  const [loginStatus, setLoginStatus] = useState(
		false || localStorage.getItem('loginStatus')
	);
  const [cat, setCat] = useState();

  useEffect(()=> {
    // INITIAL RECIPES
    const recipesURL =
			'https://boiling-escarpment-83647.herokuapp.com/recipes/';
    axios.get(recipesURL)
    .then(res=>setRecipes(res))
    .catch(err=>console.log(err))
  },[])

  return (
		<div className='App'>
			<DataContext.Provider
				value={{
          cat,
          setCat,
          recipes,
          user,
          setUser,
					loginStatus,
					setLoginStatus,
				}}>
				<Route path='/'>
					<Nav />
				</Route>
				<Route path='/' exact>
					<Categories />
				</Route>
				<Route path='/signup_form'>
					<SignUpForm />
				</Route>
				<Route path='/signin_form'>
					<SignInForm />
				</Route>
        
			</DataContext.Provider>
		</div>
	);
}

export default App;
