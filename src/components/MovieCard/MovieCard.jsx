import React from 'react';
import propTypes from 'prop-types';
import './MovieCard.css';


export default class MovieCard extends React.Component {
	static propTypes = {
		title: propTypes.string.isRequired,
		text: propTypes.string.isRequired,
		rating: propTypes.number.isRequired,
		release: propTypes.number.isRequired,
		poster: propTypes.string.isRequired,
		AddMovieCard: propTypes.func
	};

	static defaultProps = {
		AddMovieCard: () => {}
	};

	render() {
		const { title, text, rating, release, poster, AddMovieCard } = this.props;

		return (
			<div className="MovieCard">
				<span className="MovieCard__rating">{rating}</span>	
				<img className="MovieCard__poster" src={poster} alt=""/>			
				<div className="MovieCard__info">
					<h2 className="MovieCard__title">{title}</h2>
					<p className="MovieCard__descr">{text}</p>
					<p className="MovieCard__release">Release date: {release}</p>
				</div>
				<button className="MovieCard__btn" onClick={AddMovieCard}>+</button>
			</div>
		);
	}
};