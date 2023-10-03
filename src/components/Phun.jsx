import StickerClicker from './StickerClicker'
export default function Phun() {
	return (
		<div className='intro-wrapper'>
			<div className='intro'>
				<span className='sub-text'>un</span>
				<div className='intro-text'>
					<p>
						I&apos;m thrilled to{' '}
						<span className='style-underline'>
							contribute
							<img src='src/assets/PurpleUnderLinePNPortfolio.png' alt='' />
						</span>{' '}
						my{' '}
						<span className='style-underline'>
							skills
							<img src='src/assets/RedUnderLinePNPortfolio.png' alt='' />
						</span>{' '}
						within your projects to help create a{' '}
						<span className='phlair'>phun</span> and{' '}
						<span className='phast'>phriendly</span> environment.
					</p>
				</div>

				<StickerClicker />
			</div>
		</div>
	)
}
