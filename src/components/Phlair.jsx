import GradientGenerator from './GradientGenerator'

export default function Phlair() {
	return (
		<div className='intro-wrapper'>
			<div className='intro'>
				<span className='sub-text'>hlair</span>
				<div className='intro-text'>
					<p>
						My <span className='phlair'>phlair</span> for interactive <span className='style-underline'>
							design
							<img src='src/assets/GreenLinePNProfile.png' alt='' />
						</span>,
						collaborative nature, insatiable{' '}
						<span className='style-underline'>
							love for learning
							<img src='src/assets/PurpleUnderLinePNPortfolio.png' alt='' />
						</span>
						, and caring disposition make me an ideal{' '}
						<span className='phit'>phit</span> for your team.
					</p>
				</div>
				<GradientGenerator />
			</div>
		</div>
	)
}
