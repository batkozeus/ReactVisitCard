import React from 'react';
import propTypes from 'prop-types';
import './MemberCard.css';


const MemberCard = ({ name, photo, position }) => {

	return (
		<div className="MemberCard">
			<img className="MemberCard__img" src={photo} alt={name} />			
			<div className="MemberCard__info">
				<h2 className="MemberCard__name">{name}</h2>
				<p className="MemberCard__pos">{position}</p>
			</div>
		</div>
	);
};

MemberCard.propTypes = {
	name: propTypes.string.isRequired,
	photo: propTypes.string.isRequired,
	position: propTypes.string.isRequired
};

export default MemberCard;