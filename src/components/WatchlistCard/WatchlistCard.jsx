import React from 'react';
import propTypes from 'prop-types';
import './WatchlistCard.css';


export default class WatchlistCard extends React.Component {
	static propTypes = {
		title: propTypes.string.isRequired,
		rating: propTypes.number.isRequired,
		release: propTypes.number.isRequired,
		poster: propTypes.string.isRequired,
		DeleteMovieCard: propTypes.func
	};

	static defaultProps = {
		DeleteMovieCard: () => {}
	};

	render() {
		const { title, rating, release, poster, DeleteMovieCard } = this.props;

		return (
			<div className="WatchlistCard">
				<img className="WatchlistCard__img" src={poster} alt=""/>			
				<div className="WatchlistCard__body">
					<h3 className="WatchlistCard__title">{title}</h3>
					<p className="WatchlistCard__release">Released: {release}</p>
					<p className="WatchlistCard__rating">Rating: {rating}</p>
					<button className="WatchlistCard__btn" onClick={DeleteMovieCard}>-</button>	
				</div>
			</div>
		);
	}
};