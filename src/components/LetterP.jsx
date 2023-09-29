import { styled } from 'styled-components'

export default function LetterP() {
	return <PStyles className='letter-p'>P</PStyles>
}

const PStyles = styled.h1`
	font-family: 'Rubik', sans-serif;
	-webkit-text-stroke: 4px white;
	color: #0000006f;
	font-size: 10rem;
	position: sticky;
	left: 0;
	top: 0;
	z-index: 1000;
	grid-column: 2;
`
