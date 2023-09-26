import React from 'react'
import range from '../utils/range'
import { LayoutGroup, motion } from 'framer-motion'

const NUM_OF_BOXES = 5

function CoinSorter() {
	const id = React.useId()
	// const numOfCoins = 5
	const content = ['P', 'H', 'L', 'E', 'X', 'Y']

	const [selectedBox, setSelectedBox] = React.useState(0)

	return (
		<LayoutGroup>
			<div className='layout-wrapper'>
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
