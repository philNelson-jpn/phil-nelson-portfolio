import React from 'react'
import { styled } from 'styled-components'

export default function StickerClicker() {
	return (
		<StickerClickerWrapper>
			<ClickAnywhere>
				<h1>Click Anywhere!</h1>
			</ClickAnywhere>
			<RandomImage />
		</StickerClickerWrapper>
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
		const centerX = clickX - 80 // Adjust for half of the image width (160 / 2 = 80)
		const centerY = clickY - 80 // Adjust for half of the image height (160 / 2 = 80)

		// Fetch a random image URL
		const randomImageUrl = getRandomImageUrl()

		// Create a new image object with adjusted position and rotation
		const newImage = {
			url: randomImageUrl,
			x: centerX,
			y: centerY,
			rotation: getRandomRotation(),
		}

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

const StickerClickerWrapper = styled.div`
	border: 2px solid hsl(0deg 0% 100% / 0.3);
	padding: 4px;
	width: 600px;
	height: 420px;
	/* aspect-ratio: 1 / 1; */
	margin-block-start: 6rem;
	margin-block-end: 4rem;
	grid-column: 1;
	grid-row: 2;
	position: sticky;
	top: 12.5rem;
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
