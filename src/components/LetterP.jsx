import { styled } from 'styled-components'

export default function LetterP() {
	return <PStyles className='letter-p'>Ph</PStyles>
}

const PStyles = styled.h1`
	font-family: 'Rubik', sans-serif;
	-webkit-text-stroke: 2px hsl(0deg 0% 100% / 0.8);
	color: hsl(0deg 0% 0% / 0.8);
	font-size: 10rem;
	position: sticky;
	left: 0;
	top: 0;
	z-index: 1000;
	grid-column: 2;

	@media (max-width: 550px){
		font-size: 7rem;
		grid-column: 1;
		padding-left: 16px;
	}
`
