import React from 'react'
import range from '../utils/range'
import { LayoutGroup, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, RotateCw } from 'react-feather'
import { styled } from 'styled-components'

const NUM_OF_BOXES = 5

export default function MotionBrowser() {
	const id = React.useId()
	// const numOfCoins = 5
	const content = ['P', 'H', 'L', 'E', 'X', 'Y']

	const [selectedBox, setSelectedBox] = React.useState(0)

	return (
		<LayoutGroup>
			<LayoutWrapper>
				<BrowserCircleGroup>
					<div className='red-circle'></div>
					<div className='yellow-circle'></div>
					<div className='green-circle'></div>
				</BrowserCircleGroup>
				<BrowserNavGroup>
					<ArrowLeft />
					<ArrowRight />
					<RotateCw />
					<AddressBar>your-awesome-website.com</AddressBar>
				</BrowserNavGroup>
				{range(NUM_OF_BOXES).map((boxIndex) => (
					<Box
						key={boxIndex}
						className={`box ${selectedBox === boxIndex ? 'selected' : ''}`}
						onClick={() => setSelectedBox(boxIndex)}
					>
						{selectedBox === boxIndex &&
							range(content.length).map((tileIndex) => {
								const layoutId = `${id}-${tileIndex}`

								return (
									<Tile
										layoutId={layoutId}
										key={layoutId}
										transition={{
											type: 'spring',
											stiffness: 400,
											damping: 40 + tileIndex * 5,
										}}
									>
										{content[tileIndex]}
									</Tile>
								)
							})}
						<PhluidBoxText>Click Me</PhluidBoxText>
					</Box>
				))}
			</LayoutWrapper>
		</LayoutGroup>
	)
}

const LayoutWrapper = styled.div`
	display: grid;
	grid-gap: 4px;
	border: 2px solid hsl(0deg 0% 100% / 0.3);
	padding: 4px;
	/* margin: 0 auto; */
	width: 100%;
	min-width: 320px;
	max-width: 600px;
	/* aspect-ratio: 1 / 1; */
	grid-template-columns: 2fr 3fr 4fr;
	grid-template-rows: 20px 20px 2fr 4fr 5fr;
	margin-block-start: 6rem;
	margin-block-end: 4rem;
	grid-column: 1;
	grid-row: 2;
	position: sticky;
	top: 13rem;
	z-index: 10001;
	background-image: linear-gradient(
		180deg,
		hsl(240deg 15% 3% / 0.5) 0%,
		hsl(240deg 14% 3% / 0.6) 11%,
		hsl(240deg 12% 3% / 0.7) 22%,
		hsl(240deg 12% 3% / 0.8) 33%,
		hsl(240deg 10% 3% / 0.9) 44%,
		hsl(240deg 9% 3% / 0.9) 56%,
		hsl(240deg 12% 3% / 0.8) 67%,
		hsl(240deg 12% 3% / 0.7) 78%,
		hsl(240deg 14% 3% / 0.6) 89%,
		hsl(240deg 15% 3% / 0.5) 100%
	);
	border-radius: 8px;
`

const BrowserCircleGroup = styled.div`
	display: flex;
	grid-column: 1/ -1;
	grid-row: 1;
	padding-inline-start: 8px;
	gap: 6px;
	align-items: center;

	& > div {
		width: 8px;
		height: 8px;
		border-radius: 10000px;

		&.red-circle {
			background-color: rgb(233, 75, 75);
		}

		&.yellow-circle {
			background-color: rgb(233, 209, 75);
		}

		&.green-circle {
			background-color: rgb(122, 233, 75);
		}
	}
`

const BrowserNavGroup = styled.div`
	color: rgba(255, 255, 255, 0.685);
	display: flex;
	grid-column: 1/ -1;
	grid-row: 2;
	padding-inline-start: 8px;
	gap: 8px;
	align-items: center;

	& > * {
		width: 12px;
	}
`

const AddressBar = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid hsl(0deg 0% 100% / 0.2);
	height: 16px;
	width: 80%;
	border-radius: 6px;
	font-size: 8px;
	padding-inline-start: 8px;
`

const PhluidBoxText = styled.span`
	position: absolute;
	z-index: 0;
	color: hsla(210, 86%, 92%, 0.7);
	opacity: 1;
	transition: opacity 200ms ease-in-out;
`

const Box = styled.button`
	position: relative;
	border: 1px solid hsl(0deg 0% 100% / 0.2);
	background: hsl(240deg 15% 3%);
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	justify-content: center;
	align-items: center;
	align-content: center;
	padding: 8px;
	cursor: pointer;
	transition: background 800ms;
	border-radius: 4px;

	&:hover {
		background: hsla(237, 97%, 74%, 0.372);
		transition: background 100ms;
	}
	&.selected {
		background: hsla(237, 97%, 74%, 0.372);
		transition: background 200ms;
	}
	&:nth-of-type(1) {
		grid-column: 1 / -1;
		grid-row: 3;
	}
	&:nth-of-type(2) {
		grid-column: 1;
		grid-row: 4 / -1;
	}
	&:nth-of-type(3) {
		grid-column: 2;
		grid-row: 4;
	}
	&:nth-of-type(4) {
		grid-column: 2/-1;
		grid-row: 5;
	}

	&.selected ${PhluidBoxText} {
		color: hsla(237, 97%, 74%, 0.7);
		opacity: 0;
	}
`

const Tile = styled(motion.div)`
	display: grid;
	place-content: center;
	font-weight: bold;
	width: 42px;
	height: 42px;
	background: hsl(236, 91%, 68%);
	border-radius: 4px;
	z-index: 1;
`
