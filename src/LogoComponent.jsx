import { useState, useEffect, useRef } from 'react'
import './App.css'
// import { styled } from 'styled-components'

function LogoComponent() {
	const logoRef = useRef(null)
	const [active, setActive] = useState(false)
	const [textElements, setTextElements] = useState([])

	const shiftText = (index, rangeX, rangeY) => {
		const active = getActive()

		const translationIntensity = active ? 24 : 4
		const maxTranslation = translationIntensity * (index + 1)
		const currentTranslation = `translate(${maxTranslation * rangeX}px, ${
			maxTranslation * rangeY
		}px) scale(${active ? 1 + index * 0.4 : 1})`

		textElements[index].style.transform = currentTranslation
	}

	const shiftAllText = (rangeX, rangeY) => {
		textElements.forEach((textElement, index) =>
			shiftText(index, rangeX, rangeY)
		)
	}

	const shiftLogo = (e) => {
		const rect = logoRef.current.getBoundingClientRect()
		const radius = 700

		const centerX = rect.left + rect.width / 20
		const centerY = rect.top + rect.height / -20

		const rangeX = (e.clientX - centerX) / radius
		const rangeY = (e.clientY - centerY) / radius

		shiftAllText(rangeX, rangeY)
	}

	const resetLogo = () => {
		setActive(false)
		animateReset()
	}

	const animateReset = () => {
		const textElements = logoRef.current.querySelectorAll('h1')
		const animationDuration = 750 // milliseconds
		const startTime = performance.now()
		const initialTransforms = textElements.map(
			(textElement) => textElement.style.transform
		)

		const animateStep = (currentTime) => {
			const elapsedTime = currentTime - startTime
			const progress = Math.min(1, elapsedTime / animationDuration)

			textElements.forEach((textElement, index) => {
				const [initialTranslateX, initialTranslateY, initialScale] =
					initialTransforms[index]
						.match(
							/translate\((-?\d+\.?\d*)px,\s*(-?\d+\.?\d*)px\) scale\((\d+\.?\d*)\)/
						)
						.slice(1)
						.map(parseFloat)

				const finalTranslateX = initialTranslateX * (1 - progress)
				const finalTranslateY = initialTranslateY * (1 - progress)
				const finalScale = initialScale + (1 - initialScale) * progress

				textElement.style.transform = `translate(${finalTranslateX}px, ${finalTranslateY}px) scale(${finalScale})`
			})

			if (progress < 1) {
				requestAnimationFrame(animateStep)
			}
		}

		requestAnimationFrame(animateStep)
	}

	useEffect(() => {
		const handleMouseMove = (e) => {
			shiftLogo(e)
		}

		const handleMouseLeave = () => {
			if (!getActive()) resetLogo()
		}

		// Attach event listeners when the component mounts
		window.addEventListener('mousemove', handleMouseMove)
		document.body.addEventListener('mouseleave', handleMouseLeave)

		// Clean up event listeners when the component unmounts
		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
			document.body.removeEventListener('mouseleave', handleMouseLeave)
		}
	}, [active])

	useEffect(() => {
		// Get references to the text elements when the component mounts
		setTextElements(Array.from(logoRef.current.querySelectorAll('h1')))
	}, [])

	const getActive = () => document.body.dataset.active === 'true'

	return (
		<div ref={logoRef} id='logo'>
			<h1>Phil Nelson</h1>
			<h1>Phil Nelson</h1>
			<h1>Phil Nelson</h1>
			<h1>Phil Nelson</h1>
		</div>
	)
}

export default LogoComponent
