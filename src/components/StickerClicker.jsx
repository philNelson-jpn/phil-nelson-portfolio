import React from 'react'
import { styled } from 'styled-components'

export default function StickerClicker() {
	return (
		<div className='sticker-clicker-wrapper'>
			<ClickAnywhere>
				<h1>Click Anywhere!</h1>
			</ClickAnywhere>
			<RandomImage />
		</div>
	)
}

const RandomImage = () => {
	const [images, setImages] = React.useState([])

	const handleGenerateImage = (event) => {
		const container = event.currentTarget
		const containerRect = container.getBoundingClientRect() // Get container's position
		const clickX = event.clientX - containerRect.left // Adjust for container's position
		const clickY = event.clientY - containerRect.top // Adjust for container's position

		// Calculate the adjusted position for centering the image
		const centerX = clickX - 80 // Adjust for half of the image width (100 / 2 = 50)
		const centerY = clickY - 80 // Adjust for half of the image height (100 / 2 = 50)

		// Simulate fetching a random image URL (replace with your logic)
		const randomImageUrl = getRandomImageUrl()

		// Create a new image object with adjusted position and rotation
		const newImage = {
			url: randomImageUrl,
			x: centerX,
			y: centerY,
			rotation: getRandomRotation(), // Random rotation between -5 and 5 degrees
		}

		// Add the new image to the images array
		setImages([...images, newImage])
	}

	const getRandomImageUrl = () => {
		// Replace this with your logic to get a random image URL
		const imageUrls = [
			'src/assets/arrowPhilSticker.png',
			'src/assets/glassesPhilSticker.png',
			'src/assets/sunglassesPhilSticker.png',
			'src/assets/bwPhilSticker.png',
			'src/assets/yellowPhilSticker.png',
			// Add more image URLs as needed
		]
		const randomIndex = Math.floor(Math.random() * imageUrls.length)
		return imageUrls[randomIndex]
	}

	const getRandomRotation = () => {
		// Generate a random rotation between -5 and 5 degrees
		return Math.random() * 30 - 15
	}

	return (
		<StickerContainer onClick={handleGenerateImage}>
			{images.map((image, index) => (
				<img
					key={index}
					src={image.url}
					alt={`Random Image ${index}`}
					width='160'
					style={{
						pointerEvents: 'none',
						position: 'absolute',
						top: image.y,
						left: image.x,
						transform: `rotate(${image.rotation}deg)`,
					}}
				/>
			))}
		</StickerContainer>
	)
}

const StickerContainer = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
	top: 0;
	border-radius: 6px;
`

const ClickAnywhere = styled.div`
	display: grid;
	place-content: center;
	border-radius: 6px;
	position: absolute;
	inset: 0;
	background-color: hsla(237, 97%, 74%, 0.8);

	& > h1 {
		color: hsla(224, 55%, 93%, 0.8);
	}
`
