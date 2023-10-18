import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import '../../App.css'
import ProjectMiniBrowser from './ProjectMiniBrowser'
import ProjectMiniTodo from './ProjectMiniTodo'

export default function Mac() {
	return (
		<IMacWrapper>
			<IMac>
				<Screen>
					<ItemOne>
						<PlaygroundLogo>Playground</PlaygroundLogo>
						<PlaygroundNav>
							<ol>
								<Link to='/'>
									<li>Home</li>
								</Link>
								<Link to='gradient-generator'>
									<li>Gradients</li>
								</Link>
								<Link to='phire-phox'>
									<li>Browser</li>
								</Link>
								<Link to='sticker-clicker'>
									<li>Stickers</li>
								</Link>
								<Link to='todo-list'>
									<li>Todos</li>
								</Link>
							</ol>
						</PlaygroundNav>
						<PlaygroundProfilePic>
							<img
								src='/assets/sunglassesPhilSticker.png'
								alt='phil nelson with sunglasses'
							/>
						</PlaygroundProfilePic>
					</ItemOne>

					<ItemTwo>
						<Link to='gradient-generator' />
					</ItemTwo>
					<ItemThree>
						<Link to='phire-phox'>
							<ProjectMiniBrowser />
						</Link>
					</ItemThree>
					<ItemFour>
						<Link to='sticker-clicker'>
							<img src='/assets/PhilStickerScreenMac.png' alt='Phil stickers' />
						</Link>
					</ItemFour>
					<ItemFive>
						<Link to='todo-list'>
							<ProjectMiniTodo />
						</Link>
					</ItemFive>
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
	grid-column: 1/-1;
	grid-row: 1;
	perspective: 1250px;
	margin: 8px;
`

const IMac = styled.div`
	position: relative;
	width: 100%;
	min-height: 100%;
	outline: 2px solid hsl(0deg 0% 100% / 0.3);
	background-image: linear-gradient(
		90deg,
		hsl(240deg 2% 14% / 1) 0%,
		hsl(240deg 4% 12% / 1) 17%,
		hsl(240deg 5% 10% / 1) 25%,
		hsl(240deg 6% 11% / 1) 31%,
		hsl(240deg 6% 9% / 1) 37%,
		hsl(231deg 8% 8% / 1) 42%,
		hsl(233deg 9% 8% / 1) 47%,
		hsl(228deg 1% 8% / 1) 53%,
		hsl(224deg 1% 7% / 1) 58%,
		hsl(223deg 2% 6% / 1) 63%,
		hsl(224deg 2% 6% / 1) 69%,
		hsl(220deg 4% 6% / 1) 75%,
		hsl(219deg 5% 6% / 1) 83%,
		hsl(217deg 6% 8% / 1) 100%
	);
	border-radius: 4px;
	transform: scale(1);
	transition: transform 600ms ease-in-out, opacity 600ms ease-in-out,
		border-left 600ms ease-in-out;
	transform-style: preserve-3d;
	border-left: 4px solid hsl(217deg 6% 72% / 0.8);

	${IMacWrapper}:hover & {
		transform: scale(0.95);
		border-left: 4px solid hsl(217deg 6% 72% / 0.2);
	}

	${IMacWrapper} &::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0.8;
		border-radius: 1px 4px 4px 1px;
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
		opacity: 0;
	}
`

const Screen = styled.div`
	display: grid;
	grid-template-areas:
		'playground playground playground'
		'gradient browser sticker'
		'todo todo todo';
	grid-template-rows: 10% 70% 18%;
	grid-template-columns: 1fr 3fr 1fr;
	perspective: 1750px;
	gap: 5px;
	position: absolute;
	border: 4px solid transparent;
	inset: 10px 10px 80px 10px;
	background-color: hsl(0, 2%, 10%);
	transform: translate3D(0px, 0, 0px);
	border-radius: 3px 3px 0px 0px;
	transition: transform 600ms ease-in-out, border 600ms ease-in-out;
	transform-style: inherit;

	${IMacWrapper}:hover & {
		/* transform: translate3D(12px, 30px, 2px); */
		border-color: hsla(0, 0%, 100%, 0.676);
	}
`

const SVG = styled.svg`
	position: absolute;
	width: 25px;
	left: 50%;
	right: 50%;
	bottom: 30px;
	fill: black;
	transition: fill 300ms ease-in-out;

	${IMacWrapper}:hover & {
		fill: #ffffff6d;
		transition: fill 300ms ease-in-out;
	}
`

const Item = styled.div`
	border: 2px solid hsl(0deg 0% 70% / 1);
	transform: translate3D(0px, 0, 0px);
	transform-style: inherit;
	background-color: hsl(0, 2%, 10%);
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: calc(24 / 16 * 1rem);

	& a {
		height: 100%;
		width: 100%;
		text-decoration: none;
		cursor: pointer;
	}
`

const PlaygroundLogo = styled.div`
	flex: 1;
	padding-inline: 12px;
	margin-inline-end: auto;
	font-family: 'Orbitron', 'Rubik', monospace;
	font-weight: bold;
`
const PlaygroundNav = styled.nav`
	font-family: 'Orbitron', 'Rubik', monospace;

	& ol {
		display: flex;
		gap: 8px;
		list-style-type: none;
	}

	& a {
		text-decoration: none;
		color: white;
		padding: 6px 16px;
		font-size: calc(16 / 16 * 1rem);
		border-radius: 4px;

		transition: background-color 400ms ease-in-out, color 400ms ease-in-out;
	}

	& a:hover {
		color: black;
		background-color: #efefef;
		transition: background-color 100ms ease-in-out, color 100ms ease-in-out;
	}
`

const PlaygroundProfilePic = styled.div`
	display: flex;
	flex: 1;
	min-height: 100%;
	margin-inline-start: auto;
	align-items: center;
	justify-content: end;
	padding-inline-end: 12px;

	& img {
		display: block;
		height: 42px;
		object-fit: cover;
	}
`

const ItemOne = styled(Item)`
	grid-area: playground;
	display: flex;
	justify-content: space-between;
	transition: transform 1200ms ease-in-out;

	& img {
		filter: grayscale(1);
		transition: filter 700ms ease-in-out;
	}

	${IMacWrapper}:hover & {
		transform: translate3D(0px, -15px, 40px);
	}

	${IMacWrapper}:hover & img {
		filter: grayscale(0);
		transition: filter 1000ms ease-in-out;
	}
`

const ItemTwo = styled(Item)`
	grid-area: gradient;
	border: 2px solid hsl(0deg 0% 70% / 1);
	transition: transform 1200ms ease-in-out, filter 1200ms ease-in-out;
	background-image: linear-gradient(
		340deg,
		hsl(240deg 100% 20%) 0%,
		hsl(260deg 100% 23%) 9%,
		hsl(279deg 100% 27%) 17%,
		hsl(298deg 100% 30%) 25%,
		hsl(318deg 100% 33%) 32%,
		hsl(337deg 100% 37%) 41%,
		hsl(357deg 100% 40%) 50%,
		hsl(16deg 100% 43%) 60%,
		hsl(36deg 100% 47%) 74%,
		hsl(55deg 100% 50%) 100%
	);
	filter: grayscale(1);

	${IMacWrapper}:hover & {
		transform: translate3D(-20px, -10px, 40px) rotate(-4deg);
		filter: grayscale(0);
		transition: transform 1500ms ease-in-out, filter 1000ms ease-in-out;
	}
`

const ItemThree = styled(Item)`
	grid-area: browser;
	border: 2px solid hsl(0deg 0% 70% / 1);
	transition: transform 1500ms ease-in-out, filter 700ms ease-in-out;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	font-size: calc(36 / 16 * 1rem);
	filter: grayscale(0.9);

	${IMacWrapper}:hover & {
		transform: translate3D(0px, 20px, 160px);
		filter: grayscale(0);
		transition: transform 1500ms ease-in-out, filter 1000ms ease-in-out;
	}
`

const ItemFour = styled(Item)`
	grid-area: sticker;
	transition: transform 1500ms ease-in-out;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	font-size: calc(36 / 16 * 1rem);

	& img {
		display: block;
		object-fit: cover;
		width: 100%;
		height: 100%;
		filter: grayscale(1);
		transition: filter 700ms ease-in-out;
	}

	${IMacWrapper}:hover & {
		transform: translate3D(0px, 10px, 80px) rotate(4deg);
	}

	${IMacWrapper}:hover & img {
		filter: grayscale(0);
		transition: filter 700ms ease-in-out;
	}
`

const ItemFive = styled(Item)`
	grid-area: todo;
	transition: transform 1500ms ease-in-out, filter 700ms ease-in-out;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	font-size: calc(36 / 16 * 1rem);
	filter: grayscale(1);

	${IMacWrapper}:hover & {
		transform: translate3D(0px, 30px, 40px);
		filter: grayscale(0);
		transition: transform 1500ms ease-in-out, filter 1700ms ease-in-out;
	}
`
