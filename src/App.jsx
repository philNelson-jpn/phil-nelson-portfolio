import './App.css'
import LetterP from './components/LetterP'
import LogoComponent from './components/LogoComponent'
import Phlame from './components/Phlame'
import Phlair from './components/Phlair'
import Phluid from './components/Phluid'
import Phast from './components/Phast'
import Phun from './components/Phun'
import PhilPhoto from './components/PhilPhoto'
import DownArrow from './components/DownArrow'
import { styled } from 'styled-components'

function App() {
	return (
		<>
			<FixedWrapper>
				<LogoComponent />
				<PhilPhoto />
			</FixedWrapper>
			<DownArrow />
			<MainWrapper>
				<LetterP />
				<Phlame />
				<Phluid />
				<Phlair />
				<Phast />
				<Phun />
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
