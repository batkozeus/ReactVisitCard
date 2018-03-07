import React from 'react';
import PropTypes from 'prop-types';
import './AboutPage.css';
import MovieCard from '../MovieCard/MovieCard';

class AboutPage extends React.Component {

	render() {
		console.log(this.props.match.path);
		
		return (
			<h2>About Page</h2>
		);
	}

}

export default AboutPage;