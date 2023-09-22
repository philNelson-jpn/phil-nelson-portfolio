import './App.css'
import LetterP from './components/LetterP'
import LogoComponent from './components/LogoComponent'
import Passion from './components/Passion'
import Phlair from './components/Phlair'
import Phluid from './components/Phluid'
import Liphelong from './components/Liphelong'
import Phriendly from './components/Phriendly'
import PhilPhoto from './components/PhilPhoto'
import { styled } from 'styled-components'

function App() {
	return (
		<>
			<FixedWrapper>
				<LogoComponent />
				<PhilPhoto />
			</FixedWrapper>
			<MainWrapper>
				<LetterP />
				<Passion />
				<Phlair />
				<Phluid />
				<Liphelong />
				<Phriendly />
			</MainWrapper>
		</>
	)
}

const FixedWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 600px 600px 1fr;
	position: sticky;
	height: 100vh;
	overflow: hidden;
	top: 0;
`

const MainWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 600px 600px 1fr;
`

export default App
