import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
// import { kitties } from './kitties';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
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
		const { kitties, searchfield } = this.state;
		const filteredKitties = kitties.filter( kitty => {
			return kitty.name.toLowerCase().includes( searchfield.toLowerCase() );
		});
		return ! kitties.length ?
			<h1 className={'tc'}>Loading...</h1> :
		(
			<div className={'tc'}>
				<h1 className={'f1'}>Kitty friends</h1>
				<SearchBox searchChange={ this.onSearchChange }/>
				<Scroll>
					<ErrorBoundry>
						<CardList kitties={ filteredKitties } />
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}

}

export default App;
