import React from 'react'
import { connect } from 'react-redux'
import { increment } from '../redux/actionCreators'

export function Counter({ count, increment }) {
	return (
		<div>
			<h4>The count is {count}</h4>
			<button onClick={increment}>Increment by 1</button>

		</div>
	)
}

function mapStateToProps(state) {
	return {
		count: state.count,
	}
}
export default connect(
	mapStateToProps,
	{ increment }
)(Counter);