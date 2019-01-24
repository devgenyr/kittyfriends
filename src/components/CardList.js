import React from 'react';
import Card from "./Card";

const CardList = ({ kitties }) => {
	/* Error boundry test
	if (true) {
		throw new Error('NOOOOOOooo!');
	}*/
	return(
		<div>
			{
				kitties.map(
					( user ) => {
						return (
							<Card
								key={user.id}
								id={user.id}
								name={user.name}
								email={user.email}
							/>
						);
					}
				)
			}
		</div>
	);
};

export default CardList;
