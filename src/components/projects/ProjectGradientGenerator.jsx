import React from 'react'
import { motion, LayoutGroup } from 'framer-motion'
import { styled } from 'styled-components'
import { CornerLeftDown, CornerRightDown, Plus, Minus } from 'react-feather'
import {Context} from '../Projects'

export default function ProjectGradientGenerator() {

    const {INITIAL_STATE, reducer} = React.useContext(Context)
	const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)
	const { colors, numOfVisibleColors } = state
	const inputRef = React.useRef(null)
	const id = React.useId()

	const visibleColors = colors.slice(0, numOfVisibleColors)

	const colorStops = visibleColors.join(', ')
	const backgroundImage = `linear-gradient(${colorStops})`

	function addColor() {
		if (numOfVisibleColors >= 6) {
			window.alert(
				'Sorry! There is a maximum of 6 colors on this gradient generator.'
			)
			return
		}

		dispatch({ type: 'add-color' })
	}

	function removeColor() {
		if (numOfVisibleColors <= 2) {
			window.alert('You need at least two colors to form a gradient.')
			return
		}

		dispatch({ type: 'remove-color' })
	}

	return (
		<LayoutGroup>
			<GradientWrapper>
				<Wrapper>
					<div className='change-me'>
						<CornerLeftDown />
						<p>Make your own Gradient!</p>
						<CornerRightDown />
					</div>

					<GradientPreview
						style={{
							backgroundImage,
						}}
					/>
					<Colors>
						{numOfVisibleColors >= 3 && (
							<RemoveColorButton
								onClick={removeColor}
								layout={'position'}
								transition={{
									type: 'spring',
									stiffness: 500,
									damping: 30,
								}}
							>
								<Minus />
							</RemoveColorButton>
						)}
						{visibleColors.map((color, index) => {
							const colorId = `color-${index}`
							const layoutId = `${id}-${index}`
							return (
								<CustomColorInput
									layoutId={layoutId}
									key={colorId}
									onClick={() => {
										// Trigger the click event on the hidden input
										if (inputRef.current) {
											inputRef.current.click()
										}
									}}
									style={{ backgroundColor: `${color}` }}
									transition={{
										type: 'spring',
										stiffness: 300,
										damping: 40,
										restDelta: 0.05,
									}}
								>
									<Input
										type='color'
										value={color}
										ref={inputRef}
										onChange={(event) => {
											dispatch({
												type: 'change-color',
												value: event.target.value,
												index,
											})
										}}
										style={{ opacity: 0 }}
									/>
								</CustomColorInput>
							)
						})}
						{numOfVisibleColors <= 5 && (
							<AddColorButton
								onClick={addColor}
								layout={'position'}
								transition={{
									type: 'spring',
									stiffness: 500,
									damping: 30,
								}}
							>
								<Plus />
							</AddColorButton>
						)}
					</Colors>
				</Wrapper>
			</GradientWrapper>
		</LayoutGroup>
	)
}

const GradientWrapper = styled.div`
	border: 2px solid hsl(0deg 0% 100% / 0.3);
	padding: 32px;
    margin-block: 8px;
    margin-inline: 8px;
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
		grid-column: 1/-1;
		grid-row: 3;
		margin: 0;
		padding: 0;
		top: 0;
		max-width: 100%;
	}
`

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding-block-start: 12px;

	& .change-me {
		display: flex;
		justify-content: center;
		gap: 200px;
		position: absolute;
		top: -20px;
		width: 100%;
		text-align: center;
		color: hsl(270, 0%, 100%, 0.5);

		@media (max-width: 550px) {
			position: relative;
			top: 0;
		}
	}

	& .change-me p {
		position: absolute;
		top: -4px;
		color: hsl(270, 0%, 100%, 0.6);
	}
`

const CustomColorInput = styled(motion.button)`
	display: inline-block;
	width: 75px;
	height: 75px;
	border: 2px solid;
	border-radius: 5000px;
	cursor: pointer;
	border-color: grey;
	transition: border-color 500ms ease-in-out;

	&:hover {
		border-color: white;
		transition: border-color 200ms ease-in-out;
	}

	@media (max-width: 550px) {
		height: 40px;
		width: 40px;
	}
`

const Input = styled.input`
	flex: 1;
`

const AddColorButton = styled(motion.button)`
	display: grid;
	place-content: center;
	color: hsl(120, 100%, 89.01960784313725%);
	padding: 0;
	margin: 0;
	border: none;
	background-color: hsla(0, 0%, 0%, 0.756);
	width: 75px;
	height: 75px;
	border: 2px solid grey;
	border-radius: 5000px;
	cursor: pointer;
	filter: brightness(100%);
	transition: filter 200ms ease-in-out;

	&:hover {
		filter: brightness(150%);
	}

	@media (max-width: 550px) {
		height: 40px;
		width: 40px;
	}
`

const RemoveColorButton = styled(motion.button)`
	display: grid;
	place-content: center;
	color: hsl(0, 100%, 89%);
	padding: 0;
	margin: 0;
	border: none;
	background-color: hsla(0, 0%, 0%, 0.756);
	width: 75px;
	height: 75px;
	border: 2px solid grey;
	border-radius: 5000px;
	cursor: pointer;
	filter: brightness(100%);
	transition: filter 200ms ease-in-out;

	&:hover {
		filter: brightness(150%);
	}

	@media (max-width: 550px) {
		height: 40px;
		width: 40px;
	}
`

const GradientPreview = styled.div`
	height: 380px;
	border-radius: 4px;

	@media (max-width: 550px) {
		aspect-ratio: revert;
		width: 100%;
	}
`

const Colors = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 16px;

	& input[type='color'] {
		flex: 1;
		height: 50px;

		@media (max-width: 550px) {
			height: 25px;
		}
	}
`
