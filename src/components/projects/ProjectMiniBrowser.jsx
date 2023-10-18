import React from 'react'
import range from '../../utils/range'
import { ArrowLeft, ArrowRight, RotateCw } from 'react-feather'
import { styled } from 'styled-components'

export default function MotionBrowser() {
	const id = React.useId()
	// const numOfCoins = 5
	const content = ['P', 'H', 'L', 'E', 'X', 'Y']

	const [selectedBox, setSelectedBox] = React.useState(0)

	return (
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
				{range(5).map((boxIndex) => (
					<Box
						key={boxIndex}
						className="box"
						onClick={() => setSelectedBox(boxIndex)}
					>
						{selectedBox === boxIndex &&
							range(content.length).map((tileIndex) => {
								const layoutId = `${id}-${tileIndex}`

								return (
									<Tile
										key={layoutId}
									>
										{content[tileIndex]}
									</Tile>
								)
							})}
					</Box>
				))}
			</LayoutWrapper>
	)
}

const LayoutWrapper = styled.div`
	display: grid;
	grid-gap: 6px;
	padding: 4px;
	/* margin: 0 auto; */
	min-width: 100%;
	height: 100%;
	/* width: 586px; */
	/* height: 420px; */
	/* aspect-ratio: 1 / 1; */
	grid-template-columns: 2fr 3fr 4fr;
	grid-template-rows: 20px 20px 2fr 4fr 5fr;
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

const Box = styled.button`
	position: relative;
	border: 1px solid hsl(240deg 60% 90% / 0.5);
	background: hsl(240deg 15% 12%);
	display: flex;
	flex-wrap: wrap;
	gap: 28px;
	justify-content: center;
	align-items: center;
	align-content: center;
	padding: 8px;
	transition: background 800ms;
	border-radius: 4px;

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
`

const Tile = styled.div`
	color: hsl(0, 0%, 98.4313725490196%);
	display: grid;
	place-content: center;
	font-weight: bold;
	width: 34px;
	height: 34px;
	background: hsl(236, 91%, 68%);
	border-radius: 4px;
	z-index: 1;
	font-size: calc(16/16 * 1rem);
`
