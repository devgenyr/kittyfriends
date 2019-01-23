import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div className="pa2">
			<input
				className="pa3 ba b--green bg-lightest-blue"
				type="search"
				name="s"
				id="search-box"
				placeholder={'search kitties'}
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;
