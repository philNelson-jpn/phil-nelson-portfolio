import React from 'react'
import { styled } from 'styled-components'

const INITIAL_STATE = {
	colors: ['#00ffaa', '#00b7ff', '#0055ff', '#0000ff', '#8000ff'],
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
			window.alert('There is a maximum of 5 colors')
			return
		}

		dispatch({ type: 'add-color' })
	}

	function removeColor() {
		if (numOfVisibleColors <= 2) {
			window.alert('There is a minimum of 2 colors')
			return
		}

		dispatch({ type: 'remove-color' })
	}

	return (
		<div className='gradient-wrapper'>
			<Wrapper>
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
					<button onClick={removeColor}>Remove color</button>
					<button onClick={addColor}>Add color</button>
				</Actions>
			</Wrapper>
		</div>
	)
}

const Wrapper = styled.div`
	max-width: 550px;
	display: flex;
	flex-direction: column;
	gap: 16px;
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

	& button {
		font-size: 1rem;
		padding: 8px 16px;
		background-color: black;
		border: 2px solid grey;
		border-radius: 4px;
	}
`
