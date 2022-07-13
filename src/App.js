// import logo from './logo.svg';
import './App.css';

const Header = () => {
    return <h2>Hello World!</h2>
}

const Field = () => {
	return <input placeholder='Type here' type="text" />
}

function Btn() {
	const text = 'Log in';
	const res = () => {
		return 'Log in';
	}
	const p = <p>Log in</p>
	return <button>{p}</button>
}

function App() {
  	return (
    	<div className="App">
			<Header/>
			<Field/>
			<Btn/>
    	</div>
  	);
}

export default App;
 