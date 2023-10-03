import Mac from './Mac'
import { ArrowLeft } from 'react-feather'
import { styled, keyframes } from 'styled-components'
export default function Phlame() {
	return (
		<div className='intro-wrapper'>
			<div className='intro'>
				<span className='sub-text'>lame</span>
				<div className='intro-text'>
					<p className='greeting'>
						Hi there! I’m{' '}
						<PhilName>
							Phil
							<img src='src/assets/GreenLinePNProfile.png' alt='' />
						</PhilName>
						.{' '}
					</p>
					<p>
						I’m a passionate introvert who loves building with{' '}
						<span className='react-underline'>
							React
							<img src='src/assets/RedUnderLinePNPortfolio.png' alt='' />
						</span>{' '}
						and{' '}
						<span className='style-underline'>
							Styled Components
							<img src='src/assets/PurpleUnderLinePNPortfolio.png' alt='' />
						</span>{' '}
						to turn
						<br />
						<Lame>lame design</Lame> into{' '}
						<Float>
							<span className='float one'>p</span>
							<span className='float two'>h</span>
							<span className='float three'>l</span>
							<span className='float four'>a</span>
							<span className='float five'>m</span>
							<span className='float six'>e</span>{' '}
							<span className='float seven'>d</span>
							<span className='float eight'>e</span>
							<span className='float nine'>s</span>
							<span className='float ten'>i</span>
							<span className='float eleven'>g</span>
							<span className='float twelve'>n</span>
						</Float>
						!
					</p>
					<HoverMeWrapper>
						<HoverMe>
							<ArrowLeft className='arrow-left' />
							<span>Hover Me!</span>
						</HoverMe>
					</HoverMeWrapper>
				</div>
				<Mac />
			</div>
		</div>
	)
}

const PhilName = styled.div`
	display: inline-block;
	position: relative;
	font-weight: bold;
	font-style: italic;

	& > img {
		position: absolute;
		bottom: 4px;
	}
`

const Lame = styled.div`
	display: inline;
	color: hsl(341, 10%, 68%);
	font-family: 'Helvetica', Times, serif;
	font-size: 36px;
	font-style: revert;
	font-weight: revert;
	letter-spacing: -2px;
`

const floaty = keyframes`
	0% {
		top: 0px;
	}
	100% {
		top: -6px;
	}

`

const Float = styled.div`
	display: inline;
	color: hsl(41, 100%, 50%);
	letter-spacing: -1px;

	& .float {
		position: relative;
		animation: ${floaty} 1000ms ease-in-out alternate infinite;
		font-style: italic;
		font-weight: bold;
	}

	& .float.one {
		animation-delay: 200ms;
		color: hsl(41, 100%, 60%);
	}

	& .float.two {
		animation-delay: 500ms;
		color: hsl(31, 100%, 50%);
	}

	& .float.three {
		color: hsl(34, 100%, 50%);
		animation-delay: 200ms;
	}

	& .float.four {
		color: hsl(39, 100%, 50%);
		animation-delay: 400ms;
	}

	& .float.five {
		color: hsl(36, 100%, 50%);
		animation-delay: 300ms;
	}

	& .float.six {
		color: hsl(25, 100%, 50%);
		animation-delay: 700ms;
	}

	& .float.seven {
		color: hsl(21, 100%, 50%);
		animation-delay: 200ms;
	}

	& .float.eight {
		color: hsl(35, 100%, 50%);
		animation-delay: 500ms;
	}

	& .float.nine {
		color: hsl(31, 100%, 50%);
		animation-delay: 200ms;
	}

	& .float.ten {
		color: hsl(38, 100%, 50%);
		animation-delay: 400ms;
	}

	& .float.eleven {
		color: hsl(34, 100%, 50%);
		animation-delay: 100ms;
	}

	& .float.twelve {
		color: hsl(37, 100%, 50%);
		animation-delay: 600ms;
	}
`

const HoverMeWrapper = styled.div`
	display: flex;
	align-items: center;
	position: relative;
`

const bouncy = keyframes`
	0% {
		transform: translateX(-15px);
	}
	50% {
		transform: translateX(0px);
	}
	100% {
		transform: translateX(-15px);
	}
`

const HoverMe = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	left: 60px;
	top: -25px;

	& > span {
		font-size: calc(32 / 16 * 1rem);
	}

	& .arrow-left {
		animation: ${bouncy} 1300ms ease-in-out infinite both;
		/* z-index: 1; */
	}
`
