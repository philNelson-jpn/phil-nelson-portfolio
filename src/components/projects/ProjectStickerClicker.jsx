import React from 'react'
import { styled } from 'styled-components'

export default function ProjectStickerClicker() {
	return (
		<StickerClickerWrapper>
			<ClickAnywhere>
				<h1 className='desktop'>Click Anywhere!</h1>
				<h1 className='phone'>Tap Anywhere!</h1>
			</ClickAnywhere>
			<RandomImage />
		</StickerClickerWrapper>
	)
}

const RandomImage = () => {
	const [images, setImages] = React.useState([])
	const [imagesLoaded, setImagesLoaded] = React.useState(false)

	// List of image URLs to preload
	const imageUrls = React.useMemo(
		() => [
			'/assets/arrowPhilSticker.png',
			'/assets/glassesPhilSticker.png',
			'/assets/sunglassesPhilSticker.png',
			'/assets/bwPhilSticker.png',
			'/assets/yellowPhilSticker.png',
		],
		[]
	)

	React.useEffect(() => {
		const preloadedImages = []
		let loadedCount = 0

		const preloadImages = () => {
			imageUrls.forEach((imageUrl) => {
				const img = new Image()
				img.src = imageUrl
				img.onload = () => {
					loadedCount++
					if (loadedCount === imageUrls.length) {
						// All images are loaded
						setImagesLoaded(true)
					}
				}
				preloadedImages.push(img)
			})
		}

		preloadImages()

		// Cleanup function
		return () => {
			preloadedImages.forEach((img) => (img.onload = null))
		}
	}, [imageUrls])

	const handleGenerateImage = (event) => {
		if (imagesLoaded) {
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
	}

	const getRandomImageUrl = () => {
		// Replace this with your logic to get a random image URL
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
	/* aspect-ratio: 1 / 1; */
	margin: 8px;
	grid-column: 1/-1;
	grid-row: 1;
	position: sticky;
	border-radius: 8px;

	@media (max-width: 550px) {
		grid-column: 1/-1;
		grid-row: 3;
		margin: 0;
		padding: 0;
		margin-top: -20px;
		width: 100%;
	}
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
	background-color: hsla(237, 27%, 14%);

	& > h1 {
		color: hsla(224, 55%, 93%, 0.5);
	}

	& > .phone {
		display: none;
	}

	@media (max-width: 550px) {
		& > .phone {
			display: block;
		}
		& > h1 {
			display: none;
		}
	}
`
