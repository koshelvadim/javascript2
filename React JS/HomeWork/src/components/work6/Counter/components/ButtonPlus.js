import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../reducers/counterSlice';

const ButtonPlus = (props) => {
	return (
		<button onClick={props.increment}> Plus 1</button>
	);
}

const mapDispatchToProps = {
	increment
}
export default connect(null, mapDispatchToProps)(ButtonPlus);