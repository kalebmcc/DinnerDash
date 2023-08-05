import './App.css';
import Nav from './components/Nav.jsx';
import Categories from './components/Categories';
import {Route} from 'react-router-dom';
import axios from 'axios'
import {useState,useEffect} from 'react'
import {DataContext} from './contexts/DataContext.js'
import SignUpForm from './components/Forms/SignUpForm';
import SignInForm from './components/Forms/SignInForm';
import NewRecipe from './components/Forms/NewRecipe';
import SelectRecipe from './components/SelectRecipe.jsx';
import UserProfile from './components/UserProfile';
import EditRecipe from './components/Forms/EditRecipe';

function App() {
  const [recipes, setRecipes] = useState()
  const [logUser, setLogUser] = useState(localStorage.getItem('user'));
  const [loginStatus, setLoginStatus] = useState(
		false || localStorage.getItem('loginStatus')
	);
  const [cat, setCat] = useState({category: 'Asian'});

  useEffect(()=> {
    // INITIAL RECIPES
    const recipesURL =
			'https://dinnerdashbackend-052fd4a08eaf.herokuapp.com/recipes/';
    axios.get(recipesURL)
    .then(res=>setRecipes(res.data))
    .catch(err=>console.log(err))
  },[])

  return (
		<div className='App'>
			<DataContext.Provider
				value={{
					cat,
					setCat,
					recipes,
					logUser,
					setLogUser,
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
				<Route path='/new_recipe_form'>
					<NewRecipe />
				</Route>
				<Route path='/recipes/:id'>
					<SelectRecipe />
				</Route>
				<Route path='/update_recipe/:id'>
					<EditRecipe />
				</Route>
				<Route path='/user/'>
					<UserProfile />
				</Route>
			</DataContext.Provider>
		</div>
	);
}

export default App;
