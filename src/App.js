import {Component, StrictMode} from 'react';
import './App.css';

const Header = () => {
    return <h2>Hello World!</h2>
}

// const Fields = () => {
// 	const holder = 'Enter here';
// 	const styledField = {
// 		width: '300px'
// 	}
// 	return <input placeholder={holder}
// 				  type="text" 
// 				  style={styledField } />
// }

function Btn() {
	const text = 'Log in';
	const logged = true;
	return <button>{logged ? 'Enter' : text}</button>
}

class Fields extends Component {
	render() {
		const holder = 'Enter here';
		const styledField = {
			width: '300px'
		}
		return <input 
					placeholder={holder}
					type="text" 
					style={styledField } />
	}
}		

function App() {
  	return (
    	<div className="App">
			<StrictMode>
				<Header/>
			</StrictMode>
			<Fields/>
			<Btn/>
    	</div>
  	);
}

export {Header};
export default App;
 