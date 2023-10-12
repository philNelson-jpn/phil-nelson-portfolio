import {
	MotionValue,
	motion,
	useMotionValue,
	useSpring,
	useTransform,
} from 'framer-motion'
import React, { useRef } from 'react'
import { styled } from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { Context } from '../Projects'

export default function Dock() {
	let mouseX = useMotionValue(Infinity)

	return (
		<DockWrapper
			onMouseMove={(e) => mouseX.set(e.pageX)}
			onMouseLeave={() => mouseX.set(Infinity)}
		>
			<AppIcon mouseX={mouseX}>
				<BrowserAppIconWrapper />
			</AppIcon>
			<AppIcon mouseX={mouseX}>
				<GradientAppIconWrapper />
			</AppIcon>
			<AppIcon mouseX={mouseX}>Todo</AppIcon>
			<AppIcon mouseX={mouseX}>Sticker</AppIcon>
		</DockWrapper>
	)
}

const DockWrapper = styled(motion.div)`
	z-index: 2;
	grid-row: 2;
	grid-column: 2;
	margin: auto;
	display: flex;
	align-items: end;
	height: 86px;
	gap: 16px;
	padding-inline: 16px;
	padding-block: 3px;
	padding-block-end: 16px;
	border: 1px solid hsla(0, 0%, 60%, 0.5);
	border-radius: 10px;
	background-color: hsla(0, 0%, 60%, 0.35);
`

function AppIcon({ mouseX, children }: { mouseX: MotionValue; children: any }) {
	let ref = useRef<HTMLDivElement>(null)

	let distance = useTransform(mouseX, (val) => {
		let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

		return val - bounds.x - bounds.width / 2
	})

	let widthSync = useTransform(distance, [-150, 0, 150], [60, 110, 60])
	let width = useSpring(widthSync, { mass: 0.1, stiffness: 250, damping: 12 })

	return (
		<AppIconWrapper ref={ref} style={{ width }}>
			{children}
		</AppIconWrapper>
	)
}

const AppIconWrapper = styled(motion.div)`
	position: relative;
	aspect-ratio: 1/1;
	background-color: hsla(0, 0%, 0%, 0.278);
	border-radius: 17.5%;
`

function BrowserAppIconWrapper() {

	return (
			<NavLink to='/phire-phox' className={({isActive}) => isActive ? "activated" : undefined}>
				<BrowserAppIcon>
					<img src='/assets/PhirePhoxBest.png' />
				</BrowserAppIcon>
			</NavLink>
	)
}


const BrowserAppIcon = styled.button`
	position: relative;
	background-color: hsl(240deg 50% 23%);
	border: 1px solid hsl(240deg 50% 20%);
	border-radius: 10px;
	width: 100%;
	height: 100%;
	overflow: hidden;

	& img {
		position: absolute;
		border-radius: 10px;
		inset: 0;
		width: 100%;
		height: 115%;
		top: -5px;
		object-fit: cover;
	}
`

function GradientAppIconWrapper() {
	const { INITIAL_STATE } = React.useContext(Context)
	const { colors, numOfVisibleColors } = INITIAL_STATE
	const visibleColors = colors.slice(0, numOfVisibleColors)

	const colorStops = visibleColors.join(', ')
	const backgroundImage = `linear-gradient(${colorStops})`

	return (
		<NavLink to='/gradient-generator' className={({isActive}) => isActive ? "activated" : undefined}>
			<GradientPreview
				style={{
					backgroundImage,
				}}
			/>
		</NavLink>
	)
}

const GradientPreview = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 10px;
`
