import * as types from '../redux/actionTypes'
// STEP 1 - Create initial slice of state
const initialState = 0;

// Step 3 - One reducer function per slice of state
export function countReducer(count = initialState, action) {
	switch (action.type) {
		case types.INCREMENT:
			return count + 1;
		default:
			return count
	}
}