import Mac from '../components/Mac'
import { ArrowLeft } from 'react-feather'
export default function Passion() {
	return (
		<div className='intro-wrapper'>
			<div className='intro'>
				<span className='sub-text'>lame</span>
				<div className='intro-text'>
					<p className='greeting'>
						Hi there! I’m{' '}
						<span className='phil-name'>
							Phil
							<img src='src/assets/GreenLinePNProfile.png' alt='' />
						</span>
						.{' '}
					</p>
					<p>
						I’m a passionate introvert who loves building with{' '}
						<span className='react-underline'>
							React
							<img src='src/assets/RedUnderLinePNPortfolio.png' alt='' />
						</span>{' '}
						and{' '}
						<span className='style-underline'>
							Styled Components
							<img src='src/assets/PurpleUnderLinePNPortfolio.png' alt='' />
						</span>{' '}
						to turn <span className='lame'>lame design</span> into{' '}
						<span className='passion'>phlame design</span>!
					</p>
					<div className='hover-me-wrapper'>
						<div className='hover-me'>
							<ArrowLeft className='arrow-left' />
							<span>Hover Me!</span>
						</div>
					</div>
				</div>
				<Mac />
			</div>
		</div>
	)
}
