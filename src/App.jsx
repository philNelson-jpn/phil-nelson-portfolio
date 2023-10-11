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
		<AppWrapper>
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
		</AppWrapper>
	)
}

const AppWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 600px 600px 1fr;

	@media (max-width: 550px) {
		grid-template-columns: 16px 1fr 16px;
	}
`

const FixedWrapper = styled.div`
	display: grid;
	position: sticky;
	height: 100vh;
	overflow: hidden;
	top: 0;
	left: 0;
	right: 0;
	grid-column: 2/-2;
	grid-template-columns: 1fr 600px 600px 1fr;

	@media (max-width: 550px) {
		grid-template-columns: 16px 1fr 16px;
		grid-column: 2/-2;
	}
`

const MainWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 600px 600px 1fr;
	grid-column: 1/-1;

	@media (max-width: 550px) {
		/* grid-template-columns: 16px 1fr 16px;
 */
		display: block;
		grid-column: 1 / -1;
	}
`

export default App
