import { styled } from 'styled-components'

export default function Mac() {
	return (
		<IMacWrapper>
			<IMac>
				<Screen>
					<ItemOne>Styled Components</ItemOne>
					<ItemTwo>React 18</ItemTwo>
					<ItemThree>
						<div>💅🏼</div>
						<div>⚛️</div>
						<div>😁</div>
					</ItemThree>
				</Screen>
				<SVG
					xmlns='http://www.w3.org/2000/svg'
					version='1.1'
					width='10'
					viewBox='0 0 1000 1187.198'
				>
					<path d='M979.042 925.188c-17.954 41.477-39.206 79.657-63.828 114.759-33.563 47.853-61.044 80.976-82.222 99.37-32.83 30.192-68.006 45.654-105.672 46.533-27.041 0-59.652-7.694-97.611-23.303-38.085-15.536-73.084-23.23-105.086-23.23-33.563 0-69.56 7.694-108.061 23.23-38.561 15.609-69.625 23.743-93.376 24.55-36.12 1.538-72.123-14.364-108.06-47.78-22.938-20.006-51.627-54.302-85.997-102.888-36.875-51.883-67.191-112.047-90.942-180.639C12.751 781.703 0 709.96 0 640.504c0-79.562 17.192-148.183 51.627-205.687 27.063-46.19 63.066-82.625 108.127-109.373 45.06-26.748 93.749-40.378 146.182-41.25 28.69 0 66.312 8.874 113.066 26.315 46.622 17.5 76.557 26.374 89.682 26.374 9.812 0 43.068-10.376 99.443-31.064 53.313-19.185 98.307-27.129 135.168-24 99.883 8.062 174.923 47.436 224.828 118.372-89.33 54.126-133.52 129.936-132.64 227.188.806 75.751 28.287 138.788 82.295 188.84 24.476 23.23 51.81 41.183 82.222 53.934-6.595 19.127-13.557 37.447-20.958 55.035zM749.964 23.75c0 59.374-21.692 114.81-64.928 166.122-52.176 61-115.286 96.248-183.724 90.686a184.836 184.836 0 01-1.378-22.497c0-56.999 24.813-117.998 68.878-167.874 21.999-25.253 49.978-46.25 83.907-63 33.856-16.5 65.88-25.625 95.999-27.187.88 7.937 1.246 15.875 1.246 23.75z'></path>
				</SVG>
			</IMac>
		</IMacWrapper>
	)
}

const IMacWrapper = styled.div`
	perspective: 750px;
	cursor: pointer;
	padding-block-start: 10rem;
	padding-block-end: 10rem;
	grid-column: 1;
	grid-row: 2;
	position: sticky;
	top: 6rem;
	z-index: 10001;
	/* background-image: linear-gradient(
		180deg,
		hsl(240deg 15% 3% / 0) 0%,
		hsl(240deg 14% 3% / 0.2) 11%,
		hsl(240deg 12% 3% / 0.6) 22%,
		hsl(240deg 12% 3% / 0.7) 33%,
		hsl(240deg 10% 3% / 0.8) 44%,
		hsl(240deg 9% 3% / 0.8) 56%,
		hsl(240deg 12% 3% / 0.7) 67%,
		hsl(240deg 12% 3% / 0.6) 78%,
		hsl(240deg 14% 3% / 0.2) 89%,
		hsl(240deg 15% 3% / 0) 100%
	); */
`

const IMac = styled.div`
	position: relative;
	height: 350px;
	width: 520px;
	left: 2rem;
	outline: 2px solid hsl(0deg 0% 100% / 0.3);
	background-image: linear-gradient(
		90deg,
		hsl(240deg 2% 90% / 0.2) 0%,
		hsl(240deg 4% 89% / 0.2) 17%,
		hsl(240deg 5% 88% / 0.2) 25%,
		hsl(240deg 6% 86% / 0.2) 31%,
		hsl(240deg 6% 85% / 0.2) 37%,
		hsl(231deg 8% 83% / 0.2) 42%,
		hsl(233deg 9% 82% / 0.2) 47%,
		hsl(228deg 1% 80% / 0.2) 53%,
		hsl(224deg 1% 74% / 0.2) 58%,
		hsl(223deg 2% 68% / 0.2) 63%,
		hsl(224deg 2% 66% / 0.2) 69%,
		hsl(220deg 4% 65% / 0.2) 75%,
		hsl(219deg 5% 63% / 0.2) 83%,
		hsl(217deg 6% 62% / 0.2) 100%
	);
	border-radius: 4px;
	transform: rotateY(0deg);
	transition: transform 600ms ease-in-out, opacity 600ms ease-in-out;
	transform-style: preserve-3d;
	border-left: 5px solid hsl(217deg 6% 72% / 0.2);

	${IMacWrapper}:hover & {
		transform: rotateY(40deg);
	}

	${IMacWrapper} &::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity 600ms ease-in-out;
		background-image: linear-gradient(
			90deg,
			hsl(240deg 2% 90%) 0%,
			hsl(240deg 4% 89%) 17%,
			hsl(240deg 5% 88%) 25%,
			hsl(240deg 6% 86%) 31%,
			hsl(240deg 6% 85%) 37%,
			hsl(231deg 8% 83%) 42%,
			hsl(233deg 9% 82%) 47%,
			hsl(228deg 1% 80%) 53%,
			hsl(224deg 1% 74%) 58%,
			hsl(223deg 2% 68%) 63%,
			hsl(224deg 2% 66%) 69%,
			hsl(220deg 4% 65%) 75%,
			hsl(219deg 5% 63%) 83%,
			hsl(217deg 6% 62%) 100%
		);
	}

	${IMacWrapper}:hover &::before {
		opacity: 1;
	}
`

const Screen = styled.div`
	display: grid;
	grid-template-areas:
		'header header header'
		'main main sidebar'
		'main main sidebar';
	grid-template-rows: 25% 1fr;
	grid-template-columns: 1fr 2fr 1fr;
	perspective: 750px;
	gap: 5px;
	position: absolute;
	border: 4px solid transparent;
	inset: 10px 10px 60px 10px;
	background-color: hsl(0, 2%, 10%);
	transform: translate3D(0px, 0, 0px);
	border-radius: 3px 3px 0px 0px;
	transition: transform 600ms ease-in-out, border 600ms ease-in-out;
	transform-style: inherit;

	${IMacWrapper}:hover & {
		transform: translate3D(30px, -10px, 100px);
		border-color: white;
	}
`

const SVG = styled.svg`
	position: absolute;
	width: 25px;
	left: 50%;
	right: 50%;
	bottom: 20px;
`

const Item = styled.div`
	border: 2px solid;
	transform: translate3D(0px, 0, 0px);
	transform-style: inherit;
	background-color: hsl(0, 2%, 10%);
	border-radius: 2px;
	display: grid;
	place-content: center;
	font-size: calc(24 / 16 * 1rem);
`

const ItemOne = styled(Item)`
	grid-area: header;
	border-color: hsl(113, 85%, 74%);
	transition: transform 800ms ease-in-out, background-color 1000ms ease-in-out,
		color 1000ms ease-in-out;

	${IMacWrapper}:hover & {
		transform: translate3D(60px, -10px, 40px);
		background-color: hsl(113, 85%, 74%);
		color: hsl(240, 5%, 21%);
	}
`

const ItemTwo = styled(Item)`
	grid-area: main;
	border-color: hsl(343, 100%, 50%);
	transition: transform 1200ms ease-in-out, background-color 1500ms ease-in-out,
		color 2000ms ease-in-out;
	font-size: calc(64 / 16 * 1rem);

	${IMacWrapper}:hover & {
		transform: translate3D(0px, 30px, 60px);
		background-color: hsl(343, 100%, 50%);
		color: hsl(240, 5%, 21%);
	}
`

const ItemThree = styled(Item)`
	grid-area: sidebar;
	border-color: hsl(240, 100%, 69%);
	transition: transform 1500ms ease-in-out, background-color 2000ms ease-in-out,
		color 2500ms ease-in-out;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	font-size: calc(36 / 16 * 1rem);

	${IMacWrapper}:hover & {
		transform: translate3D(30px, -20px, 90px);
		background-color: hsl(240, 100%, 69%);
		color: hsl(240, 5%, 21%);
	}
`
