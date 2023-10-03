import React from 'react'
import { ChevronDown } from 'react-feather'
import { styled, keyframes } from 'styled-components'

export default function DownArrow() {
	const [scaleFactor, setScaleFactor] = React.useState(1)

	const handleScroll = () => {
		const scrollY = window.scrollY
		// You can adjust the factor as needed
		const newScaleFactor = 1 + scrollY / 1000
		setScaleFactor(newScaleFactor)
	}

	// Attach the scroll event listener to the window
	window.addEventListener('scroll', handleScroll)
	return (
		<DownArrowWrapper>
			<ChevronDown
				style={{ transform: `scale(${scaleFactor})` }}
				className='arrow-down one'
				strokeWidth={2}
				size={80}
			/>
			<ChevronDown
				style={{ transform: `scale(${scaleFactor})` }}
				className='arrow-down two'
				strokeWidth={2}
				size={80}
			/>
			<ChevronDown
				style={{ transform: `scale(${scaleFactor})` }}
				className='arrow-down three'
				strokeWidth={2}
				size={80}
			/>
		</DownArrowWrapper>
	)
}

const pulsate = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0;
    top: 0%;
    scale: 0.5;
  }
  50% {
    transform: translateY(-15px);
    opacity: 0.7;
    top: 50%;
    scale: 1.7;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
    top: 55%;
    scale: 0;
  }
`

const DownArrowWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: sticky;
	bottom: -20px;
	height: 180px;
	transform-origin: center bottom;

	& .arrow-down {
		position: absolute;
	}

	& .one {
		top: 20px;
		animation: ${pulsate} 1.8s infinite 0s;
	}

	& .two {
		top: 45px;
		animation: ${pulsate} 1.8s infinite 0.3s;
	}

	& .three {
		top: 50px;
		animation: ${pulsate} 1.8s infinite 0.6s;
	}
`
