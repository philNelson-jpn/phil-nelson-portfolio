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
import Projects from './components/Projects'
import { HashRouter as Router } from 'react-router-dom'

function App() {
	return (
		<Router>
			<MainWrapper>
				<FixedWrapper>
					<LogoComponent />
					<PhilPhoto />
				</FixedWrapper>
				<DownArrow />
				<LetterP />
				<Phlame />
				<Phluid />
				<Phlair />
				<Phast />
				<Phun />
				<Projects/>
			</MainWrapper>
		</Router>
	)
}

// const AppWrapper = styled.div`
// 	display: grid;
// 	grid-template-columns: 1fr 8fr 8fr 1fr;

// 	@media (max-width: 550px) {
// 		grid-template-columns: 16px 1fr 16px;
// 	}
// `

const MainWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 600px 600px 1fr;
	grid-column: 1/-1;

	@media (max-width: 550px) {
		grid-template-columns: 16px 1fr 16px;
		display: block;
		grid-column: 1 / -1;
	}
`

const FixedWrapper = styled.div`
	display: grid;
	position: sticky;
	height: 100vh;
	width: 100%;
	inset: 0;
	grid-column: 2/-2;
	grid-template-columns: 1fr 1fr;
	overflow: hidden;

	@media (max-width: 550px) {
		grid-template-columns: 16px 1fr 16px;
		grid-column: 1/-1;
		margin: 0;
		padding-inline: 1rem;
	}
`

export default App
