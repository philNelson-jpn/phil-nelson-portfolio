import Mac from '../components/Mac'
export default function Passion() {
	return (
		<div className='intro-wrapper'>
			<div className='intro'>
				<span className='sub-text'>assion</span>
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
						I’m a <span className='passion'>passionate</span> introvert who
						loves building things with React and Styled Components!
					</p>
					<div className='hover-me'>
						<span>Hover Me!</span>
						<img src='src/assets/HoverMePNG.png' alt='left-pointing arrow' />
					</div>
				</div>
				<Mac />
			</div>
		</div>
	)
}
