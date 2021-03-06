import React, { Component } from "react";

import "./App.css";
import { connect } from 'react-redux';
import { increment, decrement } from './ducks/counter';

export class App extends Component {
	render() {

		var { counter, increment, decrement } = this.props;
		return (
			<div className="app">
				<section className="counter">
					<h1 className="counter__current-value">{ counter }</h1>
					<div className="counter__button-wrapper">
						<button
							className="counter__button increment-one"
							onClick={ () => increment(1) }
						>
							+1
						</button>
						<button
							className="counter__button increment-five"
							onClick={ () => increment(5) }
						>
							+5
						</button>
						<button
							className="counter__button decrement-one"
							onClick={ () => decrement(1) }
						>
							-1
						</button>
						<button
							className="counter__button decrement-five"
							onClick={ () => decrement(5) }
						>
							-5
						</button>
						<br />
						<button
							className="counter__button undo"
							disabled={ true }
							onClick={ () => null }
						>
							Undo
						</button>
						<button
							className="counter__button redo"
							disabled={ true }
							onClick={ () => null }
						>
							Redo
						</button>
					</div>
				</section>
				<section className="state">
					<pre>
						{ JSON.stringify( this.props, null, 2 ) }
					</pre>
				</section>
			</div>
		);
	}
}
function mapStateToProps(state){
	// can pick off properties of state, but here we will return everything
	return state; // returned object will merge with props
}
let actionOutputs = {
	increment,
	decrement
}
let connected = connect(mapStateToProps , actionOutputs)

export default connected(App);
