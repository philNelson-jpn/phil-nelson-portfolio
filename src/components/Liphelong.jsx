import Todo from './Todo'

export default function Liphelong() {
	return (
		<div className='intro-wrapper'>
			<div className='intro'>
				<span className='sub-text phorever'>ast</span>
				<div className='intro-text'>
					<p>
						As a{' '}
						<span className='style-underline'>
							lifelong learner
							<img src='src/assets/PurpleUnderLinePNPortfolio.png' alt='' />
						</span>
						, I can learn new skills <span className='phast'>phast</span>.
					</p>
					<p>
						I am constantly seeking to{' '}
						<span className='style-underline'>
							expand my expertise
							<img src='src/assets/RedUnderLinePNPortfolio.png' alt='' />
						</span>{' '}
						to become a better developer and{' '}
						<span className='style-underline'>
							challenge
							<img src='src/assets/PurpleUnderLinePNPortfolio.png' alt='' />
						</span>{' '}
						myself.
					</p>
				</div>
				<Todo />
			</div>
		</div>
	)
}
