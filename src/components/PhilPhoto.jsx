import { useState } from 'react'
import { styled } from 'styled-components'

export default function PhilPhoto() {
	const [loaded, setLoaded] = useState(false)

	const handleImageLoad = () => {
		setLoaded(true)
	}

	return (
		<Container>
			<ImageContainer>
				<Image
					src='/assets/BestHeadShotPhilPNG-min.png'
					alt='Phil Nelson bust'
					onLoad={handleImageLoad}
					loaded={loaded}
				/>
			</ImageContainer>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	height: 850px;
	display: grid;
	place-content: center;

	grid-column: 2;
	position: absolute;

	@media (max-width: 550px) {
		width: 62%;
		place-content: start;
		position: absolute;
		z-index: -1;
		top: -28px;
		right: -40px;
		grid-column: 1/-1;
	}
`

const ImageContainer = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	border-radius: 50%;
	overflow: hidden;

	&::before {
		z-index: 1;
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			hsla(0, 0%, 100%, 0) 0%,
			hsla(0, 0%, 100%, 0) 50%,
			var(--bg-color) 95%
		);
		pointer-events: none;
	}
`

const Image = styled.img`
	z-index: -1;
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50%;
	opacity: ${(props) => (props.loaded ? '1' : '0')};
	transition: opacity 0.9s;
	overflow: hidden;
`
