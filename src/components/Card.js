import React from 'react';

const Card = ({ id, name, email }) => {
	return(
		<div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-4 tc'>
			<img alt='robots' src={`https://robohash.org/${ id }?size=200x200` } />
			<div>
				<h2>{ name }</h2>
				<p> { email }</p>
			</div>
		</div>
	);	
}

export default Card;