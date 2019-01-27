import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
// import { kitties } from './kitties';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField, requestKitties } from "../actions";

/*import mapStateToProps
	from "react-redux/es/connect/mapStateToProps";
import mapDispatchToProps
	from "react-redux/es/connect/mapDispatchToProps";*/

const mapStateToProps = state => {
	return {
		searchField: state.searchKitties.searchField,
		kitties: state.requestKitties.kitties,
		isPending: state.requestKitties.isPending,
		error: state.requestKitties.error
	}
};

const mapDispatchToProps = ( dispatch ) => {
	return {
		onSearchChange: ( event ) => dispatch( setSearchField( event.target.value ) ),
		onRequestKitties: () => dispatch( requestKitties() ) // requestKitties( dispatch )
	}
};

class App extends Component {
/*
	constructor() {
		super();
		this.state = {
			kitties: []
			// searchfield: ''
		}
	}
*/

	componentDidMount() {
		// console.log( this.props.store.getState() );
		// this.setState( { kitties: kitties } );
		// console.log( this.state );

		// fetch( 'https://jsonplaceholder.typicode.com/users' )
		// 	.then( response => response.json() )
		// 	.then( users => this.setState( { kitties: users } ) )

		this.props.onRequestKitties();
	}

/*
	onSearchChange = ( event ) => {
		this.setState( { searchfield: event.target.value } );
	};
*/

	render() {
		// const { kitties } = this.state;
		const { searchField, onSearchChange, kitties, isPending } = this.props;
		const filteredKitties = kitties.filter( kitty => {
			return kitty.name.toLowerCase().includes( searchField.toLowerCase() );
		});
		return isPending ?
			<h1 className={'tc'}>Loading...</h1> :
		(
			<div className={'tc'}>
				<h1 className={'f1'}>Kitty friends</h1>
				<SearchBox searchChange={ onSearchChange } />
				<Scroll>
					<ErrorBoundry>
						<CardList kitties={ filteredKitties } />
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}

}

export default connect( mapStateToProps, mapDispatchToProps )( App );
