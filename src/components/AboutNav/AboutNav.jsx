import React from 'react';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './AboutNav.css';


const AboutNav = ({ items, currentPath }) => {

	return (
		<nav className="AboutNav">
			{items.map((i, idx) => (
				<NavLink to={`${currentPath}${i.path}`} className="AboutNav__link" activeClassName="AboutNav__link--active" key={idx}>{i.text}</NavLink>
			))}
		</nav>
	);
}

AboutNav.propTypes = {
	items: propTypes.arrayOf(propTypes.shape({
		path: propTypes.string.isRequired,
		text: propTypes.string.isRequired
	}).isRequired).isRequired,
	currentPath: propTypes.string
}

AboutNav.defaultProps = {
	currentPath: ''
}

export default AboutNav;