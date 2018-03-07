import React from 'react';
import propTypes from 'prop-types';
import './AboutPage.css';


class AboutPage extends React.Component {

	render() {
		console.log(this.props.match.path);
		
		return (
			<h2>About Page</h2>
		);
	}

}

export default AboutPage;