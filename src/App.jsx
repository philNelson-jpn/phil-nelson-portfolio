import './App.css'
import LetterP from './components/LetterP'
import LogoComponent from './components/LogoComponent'
import Passion from './components/Passion'
import Phlair from './components/Phlair'
import Phluid from './components/Phluid'
import Liphelong from './components/Liphelong'
import Phriendly from './components/Phriendly'
import PhilPhoto from './components/PhilPhoto'

function App() {
	return (
		<div className='main-wrapper'>
			<LogoComponent />
			<PhilPhoto />
			<LetterP />
			<Passion />
			<Phlair />
			<Phluid />
			<Liphelong />
			<Phriendly />
		</div>
	)
}

export default App
