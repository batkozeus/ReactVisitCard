import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import MovieCard from '../MovieCard/MovieCard';

class Home extends React.Component {

	componentWillMount() {
		let homePath = this.props.match.path;
		console.log(homePath);

	};

	render() {
		// let homePath = this.props.match.path;
		// console.log(homePath);

		return (
			<h2>Home Page</h2>
		);
	}

}

export default Home;