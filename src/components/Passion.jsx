import Mac from '../components/Mac'
export default function Passion() {
	return (
		<div className="intro-wrapper">
		<div className='intro'>
			<span className='sub-text'>assion</span>
			<div className='intro-text'>
				<p>Hi there! I’m Phil. </p>
				<p>
					I’m a passionate introvert who loves building things with React and
					Styled Components!
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
