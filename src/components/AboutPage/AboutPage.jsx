import React from 'react';
import propTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import './AboutPage.css';
import AboutNav from '../AboutNav/AboutNav';
import TeamList from '../TeamList/TeamList';


const aboutLinks = [
	{
		path: '/team',
		text: 'The Team',
	},
	{
		path: '/stack',
		text: 'Our Stack',
	},
	{
		path: '/career',
		text: 'Career',
	}
];

const AboutPage = (props) => {

	console.log(props.match.path);
	return (
		<div className="AboutPage">
			<div className="AboutPage__nav">
				<AboutNav items={aboutLinks}  currentPath={props.match.path} />
			</div>
			<div className="AboutPage__body">
				<Switch>
					<Route path={`${props.match.path}/team`} component={TeamList} />
					<Route path={`${props.match.path}/stack`} render={() => <h2>Users Page</h2>} />
					<Route path={`${props.match.path}/career`} render={() => <h2>Users Page</h2>} />
				</Switch>
			</div>
		</div>
	);

}

export default AboutPage;