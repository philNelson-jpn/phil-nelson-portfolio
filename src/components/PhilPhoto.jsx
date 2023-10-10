import { styled } from 'styled-components'

export default function PhilPhoto() {
	return (
		<Container>
			<ImageContainer>
				<Image
					src='/assets/BestHeadShotPhilPNG.png'
					alt='Phil Nelson bust'
				/>
			</ImageContainer>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	height: 650px;
	display: grid;
	place-content: center;
	overflow: hidden;

	@media (max-width: 550px){
		width: 55%;
		place-content: start;
		position: absolute;
		z-index: -1;
		top: -35px;
		right: -10px;
		grid-column: 1;
	}
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
