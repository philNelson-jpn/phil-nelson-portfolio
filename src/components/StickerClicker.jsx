import React from 'react'

export default function StickerClicker() {
	return (
		<div className='sticker-clicker-wrapper'>
			<h1>Click Anywhere!</h1>
			<RandomImage />
		</div>
	)
}

const RandomImage = () => {
	const [images, setImages] = React.useState([])

	const handleGenerateImage = (event) => {
		const container = event.currentTarget
		const clickX = event.clientX - container.offsetLeft
		const clickY = event.clientY - container.offsetTop

		// Calculate the adjusted position for centering the image
		const centerX = clickX - 60 // Adjust for half of the image width (100 / 2 = 50)
		const centerY = clickY - 200 // Adjust for half of the image height (100 / 2 = 50)

		// Simulate fetching a random image URL (replace with your logic)
		const randomImageUrl = getRandomImageUrl()

		// Create a new image object with adjusted position
		const newImage = {
			url: randomImageUrl,
			x: centerX,
			y: centerY,
		}

		// Add the new image to the images array
		setImages([...images, newImage])
	}

	const getRandomImageUrl = () => {
		// Replace this with your logic to get a random image URL
		const imageUrls = [
			'src/assets/RedUnderLinePNPortfolio.png',
			'src/assets/GreenLinePNProfile.png',
			'src/assets/PurpleUnderLinePNPortfolio.png',
			// Add more image URLs as needed
		]
		const randomIndex = Math.floor(Math.random() * imageUrls.length)
		return imageUrls[randomIndex]
	}

	return (
		<div
			style={{
				width: '500px',
				height: '600px',
				overflow: 'hidden',
				position: 'relative',
			}}
			onClick={handleGenerateImage}
		>
			{images.map((image, index) => (
				<img
					key={index}
					src={image.url}
					alt={`Random Image ${index}`}
					width='100'
					style={{
						position: 'absolute',
						top: image.y,
						left: image.x,
					}}
				/>
			))}
		</div>
	)
}
