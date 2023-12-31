import React from 'react'
import range from '../../utils/range'
import { LayoutGroup, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, RotateCw } from 'react-feather'
import { styled } from 'styled-components'

const NUM_OF_BOXES = 5

export default function ProjectMotionBrowser() {
	const id = React.useId()
	const content = [
		'P',
		'H',
		'L',
		'E',
		'X',
		'I',
		'B',
		'L',
		'E',
		'',
		'S',
		'I',
		'T',
		'E',
	]

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
					<AddressBar>your-phlexible-website.com</AddressBar>
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
						<PhluidBoxTextWide>Click Me</PhluidBoxTextWide>
						<PhluidBoxTextPhone>Tap Me</PhluidBoxTextPhone>
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
	margin-block: 8px;
	margin-inline: 8px;
	grid-template-columns: 2fr 3fr 4fr;
	grid-template-rows: 32px 32px 2fr 4fr 5fr;
	grid-column: 1/-1;
	grid-row: 1;
	background-image: linear-gradient(
		180deg,
		hsl(240deg 15% 3% / 0.85) 0%,
		hsl(240deg 14% 3% / 0.87) 11%,
		hsl(240deg 12% 3% / 0.9) 22%,
		hsl(240deg 12% 3% / 0.95) 33%,
		hsl(240deg 10% 3%) 44%,
		hsl(240deg 9% 3%) 56%,
		hsl(240deg 12% 3% / 0.95) 67%,
		hsl(240deg 12% 3% / 0.9) 78%,
		hsl(240deg 14% 3% / 0.87) 89%,
		hsl(240deg 15% 3% / 0.85) 100%
	);
	border-radius: 8px;

	@media (max-width: 550px) {
		margin: 0;
	}
`

const BrowserCircleGroup = styled.div`
	display: flex;
	grid-column: 1/ -1;
	grid-row: 1;
	padding-inline-start: 8px;
	gap: 6px;
	align-items: center;

	& > div {
		width: 12px;
		height: 12px;
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
	margin-block: 8px;

	& > * {
		width: 16px;
	}
`

const AddressBar = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid hsl(0deg 0% 100% / 0.2);
	height: 30px;
	width: 90%;
	border-radius: 6px;
	font-size: 1rem;
	padding-inline-start: 8px;
	padding-block: 4px;
	margin-bottom: 2px;
`

const PhluidBoxTextWide = styled.span`
	position: absolute;
	z-index: 0;
	color: hsla(210, 86%, 92%, 0.7);
	opacity: 1;
	transition: opacity 200ms ease-in-out;

	@media (max-width: 550px) {
		display: none;
	}
`

const PhluidBoxTextPhone = styled.span`
	display: none;
	position: absolute;
	z-index: 0;
	color: hsla(210, 86%, 92%, 0.7);
	opacity: 1;
	transition: opacity 200ms ease-in-out;

	@media (max-width: 550px) {
		display: block;
	}
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

	@media (max-width: 550px) {
		padding: 0;
	}

	&:hover {
		background: hsla(237, 97%, 74%, 0.372);
		transition: background 100ms;
	}
	&.selected {
		background: hsla(237, 37%, 34%, 0.972);
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

	&.selected ${PhluidBoxTextWide}, &.selected ${PhluidBoxTextPhone} {
		color: hsla(237, 97%, 74%, 0.7);
		opacity: 0;
	}
`

const Tile = styled(motion.div)`
	color: hsl(0, 0%, 98.4313725490196%);
	display: grid;
	place-content: center;
	font-weight: bold;
	width: 42px;
	height: 42px;
	background: hsl(236, 91%, 68%);
	border-radius: 4px;
	z-index: 1;

	@media (max-width: 550px) {
		width: 32px;
		height: 24px;
	}
`
