import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { kitties } from './kitties';

class App extends Component {

	constructor() {
		super();
		this.state = {
			kitties: kitties,
			searchfield: ''
		}
	}

	onSearchChange = ( event ) => {
		this.setState( { searchfield: event.target.value } );
	};

	render() {
		const filteredKitties = this.state.kitties.filter( kitty => {
			return kitty.name.toLowerCase().includes( this.state.searchfield.toLowerCase() );
		});
		return(
			<div className={'tc'}>
				<h1>Kitty friends</h1>
				<SearchBox searchChange={ this.onSearchChange }/>
				<CardList kitties={ filteredKitties } />
			</div>
		);
	}

}

export default App;
