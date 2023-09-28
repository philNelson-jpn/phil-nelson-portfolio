import MotionLayout from './MotionLayout'

export default function Phluid() {
	return (
		<div className='intro-wrapper'>
			<div className='intro'>
				<span className='sub-text'>hluid</span>
				<div className='intro-text'>
					<p>
						I love creating <span className='phluid'>phluid</span> and dynamic
						layouts with <span className='style-underline'>
							CSS
							<img src='src/assets/PurpleUnderLinePNPortfolio.png' alt='' />
						</span>.
					</p>
					<p>
						I <span className='phashion'>phashion</span> visually stunning
						interfaces with <span className='react-underline'>
							React
							<img src='src/assets/RedUnderLinePNPortfolio.png' alt='' />
						</span>{' '} and <span className='style-underline'>
							Framer Motion
							<img src='src/assets/PurpleUnderLinePNPortfolio.png' alt='' />
						</span> to deliver engaging user experiences.
					</p>
				</div>
				<MotionLayout />
			</div>
		</div>
	)
}
