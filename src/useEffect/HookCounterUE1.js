import React, { useState, useEffect } from 'react'
// "useEffect" is capable of handling what componentDidMount,componentDidUpdate,componentWillUnmount were capable of doing in class based components
const HookCounterUE1 = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');
	// arrow function gets executed after every render
	// i.e. we request REACT to execute the function we pass as an argumet to "useEffect" every time the component renders ,"useEffect" runs after every render of component.
	// for conditionally executing effect,we pass in second parameter as an "array[], inthis array we need to specify 'props/state' we need to watch for change,then only effect will be executed"
	useEffect(() => {
		console.log("UPdating document title");
		document.title = `you clicked ${count} times`
	},[count]); // conditionally rendering
	return (
		<div>
			<input type="text" value={name} onChange={e => setName(e.target.value)} />
			<button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
		</div>
	)
}

export default HookCounterUE1;
