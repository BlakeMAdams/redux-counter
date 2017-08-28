// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;


//CONSTANTS
// define a constant for increment and decrement
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

//ACTION CREATORS
// build action creators for increment and decrement
export function increment(amount){
	return {
		type: INCREMENT,
		payload: amount
	}
}
export function decrement(amount){
	return {
		type: DECREMENT,
		payload: amount
	}
}
let intitialState = {
	counter: 0
}

//REDUCER
function reducer(state = initialState, action) {
	//create switch statement that handles increment and decrement
	switch (action.type) {

		case INCREMENT:
			let startingValue = state.counter;
			let nextValue = action.payload;
			let val = startingValue + nextValue;
			return Object.assign({}, state, { counter: val })

		case DECREMENT:
			return Object.assing({}, state, { counter: state.counter - action.payload })
		
	}
	return state;
}

export default reducer;