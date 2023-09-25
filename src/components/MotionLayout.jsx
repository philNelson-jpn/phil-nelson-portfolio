import React from 'react'
import range from '../utils/range'
import { LayoutGroup, motion } from 'framer-motion'

const NUM_OF_BOXES = 5

function CoinSorter() {
	const id = React.useId()
	const numOfCoins = 5

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
							range(numOfCoins).map((coinIndex) => {
								const layoutId = `${id}-${coinIndex}`

								return (
									<motion.div
										layoutId={layoutId}
										key={layoutId}
										className='coin'
										transition={{
											type: 'spring',
											stiffness: 400,
											damping: 40 + coinIndex * 5,
										}}
									/>
								)
							})}
					</button>
				))}
			</div>
		</LayoutGroup>
	)
}

export default CoinSorter
