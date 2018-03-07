import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import MoviesPage from '../MoviesPage/MoviesPage';
import AboutPage from '../AboutPage/AboutPage';


const navLinks = [
	{
		path: '/',
		text: 'HOME'
	},
	{
		path: '/movies',
		text: 'MOVIES'
	},
	{
		path: '/about',
		text: 'ABOUT'
	}		
];

class App extends React.Component {

	state = {
		mainPath: ''
	};

	// componentWillMount() {
	// 	this.setState({
	// 		mainPath: true
	// 	});
	// };

	render() {
		// console.log(this.props);

		return (
			<div className="App">
				<Header text="Movie Mate" items={navLinks} />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/movies" component={MoviesPage} />
					<Route path="/about" component={AboutPage} />
					<Redirect to="/" />
				</Switch>

			</div>
		);
	}
}

export default App;