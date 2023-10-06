import { styled } from 'styled-components'

export default function PhilPhoto() {
	return (
		<div className='container'>
			<div className='image-container'>
				<img
					className='image'
					src='/assets/BestHeadShotPhilPNG.png'
					alt='Phil Nelson bust'
				/>
			</div>
		</div>
	)
}

const Container = styled.div`
	width: 450px;
	height: 600px;
	overflow: hidden;
`

const ImageContainer = styled.div`
	width: 100%;
	height: 100%;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			hsla(0, 0%, 100%, 0) 0%,
			hsla(0, 0%, 100%, 0) 50%,
			var(--bg-color) 95%
		); /* Feather effect */
		pointer-events: none;
	}
`

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover; /* Ensure the image covers the container */
	border-radius: 50%;
`
