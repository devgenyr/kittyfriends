import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
// import { kitties } from './kitties';
import './App.css';

class App extends Component {

	constructor() {
		super();
		this.state = {
			kitties: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		// this.setState( { kitties: kitties } );
		// console.log( this.state );
		fetch( 'https://jsonplaceholder.typicode.com/users' )
			.then( response => response.json() )
			.then( users => this.setState( { kitties: users } ) )
	}

	onSearchChange = ( event ) => {
		this.setState( { searchfield: event.target.value } );
	};

	render() {
		const filteredKitties = this.state.kitties.filter( kitty => {
			return kitty.name.toLowerCase().includes( this.state.searchfield.toLowerCase() );
		});
		if ( this.state.kitties.length === 0 ) {
			return <h1 className={'tc'}>Loading...</h1>;
		} else {
			return(
					<div className={'tc'}>
						<h1 className={'f1'}>Kitty friends</h1>
						<SearchBox searchChange={ this.onSearchChange }/>
						<CardList kitties={ filteredKitties } />
					</div>
			);
		}
	}

}

export default App;
