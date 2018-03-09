import React from 'react';
import propTypes from 'prop-types';
import './StackList.css';
import css3 from './assets/css-3.svg';
import html5 from './assets/html5.svg';
import javascript from './assets/javascript.svg';
import react from './assets/react.svg';
import reactrouter from './assets/react-router.svg';
import redux from './assets/redux.svg';
import webpack from './assets/webpack-icon.svg';


const stackImages = [
	{
		path: html5,
		id: 'html5'
	},
	{
		path: css3,
		id: 'css3'
	},
	{
		path: javascript,
		id: 'javascript'
	},
	{
		path: react,
		id: 'react'
	},
	{
		path: reactrouter,
		id: 'reactrouter'
	},
	{
		path: redux,
		id: 'redux'
	},
	{
		path: webpack,
		id: 'webpack'
	}
];

const StackList = (props) => {
	return (
		<ul className="StackList">
			{stackImages.map(stack => (
				<li className="StackList_item">
					<img className="StackList_icon" src={stack.path} alt={stack.id} />
				</li>
			))}		
		</ul>
	);
};

StackList.propTypes = {};

export default StackList;