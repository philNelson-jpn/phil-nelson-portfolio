import React from 'react'
import { styled } from 'styled-components'
import { CornerLeftDown, CornerRightDown } from 'react-feather'

const INITIAL_STATE = {
	colors: ['#35fdcb', '#5bc5fb', '#526fff', '#7733ff', '#af2ff4'],
	numOfVisibleColors: 2,
}

function reducer(state, action) {
	switch (action.type) {
		case 'add-color': {
			return {
				...state,
				numOfVisibleColors: state.numOfVisibleColors + 1,
			}
		}

		case 'remove-color': {
			return {
				...state,
				numOfVisibleColors: state.numOfVisibleColors - 1,
			}
		}

		case 'change-color': {
			const nextColors = [...state.colors]
			nextColors[action.index] = action.value

			return {
				...state,
				colors: nextColors,
			}
		}
	}
}

export default function GradientGenerator() {
	const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)
	const { colors, numOfVisibleColors } = state

	const visibleColors = colors.slice(0, numOfVisibleColors)

	const colorStops = visibleColors.join(', ')
	const backgroundImage = `linear-gradient(${colorStops})`

	function addColor() {
		if (numOfVisibleColors >= 5) {
			window.alert(
				'Sorry! There is a maximum of 5 colors on this gradient generator.'
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
		<div className='gradient-wrapper'>
			<Wrapper>
				<div className='change-me'>
					<CornerLeftDown />
					<p>Change me!</p>
					<CornerRightDown />
				</div>
				<Colors>
					{visibleColors.map((color, index) => {
						const colorId = `color-${index}`
						return (
							<Input
								key={colorId}
								id={colorId}
								type='color'
								value={color}
								onChange={(event) => {
									dispatch({
										type: 'change-color',
										value: event.target.value,
										index,
									})
								}}
							/>
						)
					})}
				</Colors>

				<GradientPreview
					style={{
						backgroundImage,
					}}
				/>

				<Actions>
					<RemoveColor onClick={removeColor}>
						<span className='shadow'></span>
						<span className='edge'></span>
						<span className='front'>Remove Color</span>
					</RemoveColor>
					<AddColor onClick={addColor}>
						<span className='shadow'></span>
						<span className='edge'></span>
						<span className='front'>Add Color</span>
					</AddColor>
				</Actions>
			</Wrapper>
		</div>
	)
}

const Wrapper = styled.div`
	position: relative;
	max-width: 550px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding-block-start: 12px;

	& .change-me {
		display: flex;
		justify-content: space-around;
		position: absolute;
		top: -20px;
		width: 100%;
		text-align: center;
		color: hsl(270, 0%, 100%, 0.8);
	}

	& .change-me p {
		position: absolute;
		top: -4px;
		color: hsl(270, 0%, 100%, 0.6);
	}
`

const Input = styled.input`
	flex: 1;
`

const GradientPreview = styled.div`
	aspect-ratio: 2 / 1;
	height: 220px;
	border-radius: 4px;
`

const Colors = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 16px;

	& input[type='color'] {
		flex: 1;
		height: 50px;
	}
`

const Actions = styled.div`
	display: flex;
	justify-content: center;
	gap: 16px;
`

const AddColor = styled.button`
	position: relative;
	border: none;
	background: transparent;
	padding: 0;
	cursor: pointer;
	outline-offset: 4px;
	transition: filter 250ms;

	& .shadow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 12px;
		background: hsl(0deg 0% 0% / 0.25);
		will-change: transform;
		transform: translateY(2px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	}

	& .edge {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 8px;
		background: linear-gradient(
			to left,
			hsl(147, 68%, 18%) 0%,
			hsl(147, 68%, 28%) 8%,
			hsl(147, 68%, 28%) 92%,
			hsl(147, 68%, 8%) 100%
		);
	}

	& .front {
		display: block;
		position: relative;
		padding: 6px 12px;
		border-radius: 8px;
		font-size: 1rem;
		color: white;
		background: hsl(147, 68%, 38%);
		will-change: transform;
		transform: translateY(-4px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	}

	&:hover {
		filter: brightness(110%);
	}
	&:hover .front {
		transform: translateY(-6px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}
	&:active .front {
		transform: translateY(-2px);
		transition: transform 34ms;
	}
	&:hover .shadow {
		transform: translateY(4px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}
	&:active .shadow {
		transform: translateY(1px);
		transition: transform 34ms;
	}
	&:focus:not(:focus-visible) {
		outline: none;
	}
`

const RemoveColor = styled.button`
	position: relative;
	border: none;
	background: transparent;
	padding: 0;
	cursor: pointer;
	outline-offset: 4px;
	transition: filter 250ms;

	& .shadow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 12px;
		background: hsl(0deg 0% 0% / 0.25);
		will-change: transform;
		transform: translateY(2px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	}

	& .edge {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 8px;
		background: linear-gradient(
			to left,
			hsl(0, 82%, 25%) 0%,
			hsl(0, 82%, 38%) 8%,
			hsl(0, 82%, 38%) 92%,
			hsl(0, 82%, 12%) 100%
		);
	}

	& .front {
		display: block;
		position: relative;
		padding: 6px 12px;
		border-radius: 8px;
		font-size: 1rem;
		color: white;
		background: hsl(0, 82%, 55%);
		will-change: transform;
		transform: translateY(-4px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	}

	&:hover {
		filter: brightness(110%);
	}
	&:hover .front {
		transform: translateY(-6px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}
	&:active .front {
		transform: translateY(-2px);
		transition: transform 34ms;
	}
	&:hover .shadow {
		transform: translateY(4px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}
	&:active .shadow {
		transform: translateY(1px);
		transition: transform 34ms;
	}
	&:focus:not(:focus-visible) {
		outline: none;
	}
`
