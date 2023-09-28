import React from 'react'
import range from '../utils/range'
import { LayoutGroup, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, RotateCw } from 'react-feather'

const NUM_OF_BOXES = 5

function CoinSorter() {
	const id = React.useId()
	// const numOfCoins = 5
	const content = ['P', 'H', 'L', 'E', 'X', 'Y']

	const [selectedBox, setSelectedBox] = React.useState(0)

	return (
		<LayoutGroup>
			<div className='layout-wrapper'>
				<div className='browser-circle-group'>
					<div className='red-circle'></div>
					<div className='yellow-circle'></div>
					<div className='green-circle'></div>
				</div>
				<div className='browser-nav-group'>
					<ArrowLeft />
					<ArrowRight />
					<RotateCw />
					<div className='address-bar'>your-awesome-website.com</div>
				</div>
				{range(NUM_OF_BOXES).map((boxIndex) => (
					<button
						key={boxIndex}
						className={`box ${selectedBox === boxIndex ? 'selected' : ''}`}
						onClick={() => setSelectedBox(boxIndex)}
					>
						{selectedBox === boxIndex &&
							range(content.length).map((tileIndex) => {
								const layoutId = `${id}-${tileIndex}`

								return (
									<motion.div
										layoutId={layoutId}
										key={layoutId}
										className='tile'
										transition={{
											type: 'spring',
											stiffness: 400,
											damping: 40 + tileIndex * 5,
										}}
									>
										{content[tileIndex]}
									</motion.div>
								)
							})}
						<span className='phluid-box-text'>Click Me</span>
					</button>
				))}
			</div>
		</LayoutGroup>
	)
}

export default CoinSorter
