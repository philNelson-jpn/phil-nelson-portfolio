import {
	MotionValue,
	motion,
	useMotionValue,
	useSpring,
	useTransform,
} from 'framer-motion'
import React, { useRef } from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'
import * as Tooltip from '@radix-ui/react-tooltip'

export default function Dock() {
	let mouseX = useMotionValue(Infinity)

	return (
		<Tooltip.Provider delayDuration={0}>
			<DockWrapper
				onMouseMove={(e) => mouseX.set(e.pageX)}
				onMouseLeave={() => mouseX.set(Infinity)}
			>
				<Tooltip.Root>
					<Tooltip.Trigger className='trigger'>
						<AppIcon mouseX={mouseX}>
							<BrowserAppIconWrapper />
						</AppIcon>
					</Tooltip.Trigger>
					<Tooltip.Portal>
						<Tooltip.Content className='content'>
							<Tooltip.Arrow />
							Phire Phox
						</Tooltip.Content>
					</Tooltip.Portal>
				</Tooltip.Root>

				<Tooltip.Root>
					<Tooltip.Trigger className='trigger'>
						<AppIcon mouseX={mouseX}>
							<GradientAppIconWrapper />
						</AppIcon>
					</Tooltip.Trigger>
					<Tooltip.Portal>
						<Tooltip.Content className='content'>
							<Tooltip.Arrow />
							Gradient Generator
						</Tooltip.Content>
					</Tooltip.Portal>
				</Tooltip.Root>

				<Tooltip.Root>
					<Tooltip.Trigger className='trigger'>
						<AppIcon mouseX={mouseX}>
							<TodoAppIconWrapper />
						</AppIcon>
					</Tooltip.Trigger>
					<Tooltip.Portal>
						<Tooltip.Content className='content'>
							<Tooltip.Arrow />
							Create Todos
						</Tooltip.Content>
					</Tooltip.Portal>
				</Tooltip.Root>

				<Tooltip.Root>
					<Tooltip.Trigger className='trigger'>
						<AppIcon mouseX={mouseX}>
							<StickerAppIconWrapper />
						</AppIcon>
					</Tooltip.Trigger>
					<Tooltip.Portal>
						<Tooltip.Content className='content'>
							<Tooltip.Arrow />
							Sticker Clicker
						</Tooltip.Content>
					</Tooltip.Portal>
				</Tooltip.Root>
			</DockWrapper>
		</Tooltip.Provider>
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

	& .trigger {
		position: relative;
		display: inline-block;
		border: none;
		background: transparent;
		padding: 0px 2px;
	}
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
		<NavLink
			to='/phire-phox'
			className={({ isActive }) => (isActive ? 'activated' : undefined)}
		>
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
	border-radius: 17%;
	width: 100%;
	height: 100%;
	overflow: hidden;
	cursor: pointer;

	& img {
		position: absolute;
		top: -8%;
		left: -6%;
		min-width: 110%;
		min-height: 110%;
	}
`

function GradientAppIconWrapper() {
	// const colors = [
	// 	'#35c4fd',
	// 	'#da2ff4',
	// 	'#fb5b5b',
	// 	'#ff7552',
	// 	'#ffdd33',
	// 	'#01ff51',
	// ]
	// const colorStops = colors.join(', ')
	// const backgroundImage = `linear-gradient(${colorStops})`
	return (
		<NavLink
			to='/gradient-generator'
			className={({ isActive }) => (isActive ? 'activated' : undefined)}
		>
			<GradientPreview />
		</NavLink>
	)
}

const GradientPreview = styled.div`
	border: none;
	width: 100%;
	height: 100%;
	border-radius: 10px;
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
`

function TodoAppIconWrapper() {
	return (
		<NavLink
			to='/todo-list'
			className={({ isActive }) => (isActive ? 'activated' : undefined)}
		>
			<TodoAppIcon>
				<img src='/assets/TodoIconPurple.png' />
			</TodoAppIcon>
		</NavLink>
	)
}

const TodoAppIcon = styled.button`
	position: relative;
	background-color: white;
	border: none;
	border-radius: 17%;
	width: 100%;
	height: 100%;
	overflow: hidden;
	cursor: pointer;

	& img {
		position: absolute;
		top: -10%;
		left: -10%;
		min-width: 120%;
		min-height: 120%;
	}
`

function StickerAppIconWrapper() {
	return (
		<NavLink
			to='/sticker-clicker'
			className={({ isActive }) => (isActive ? 'activated' : undefined)}
		>
			<StickerAppIcon>
				<img src='/assets/PhilPurpleProfilePic.png' />
			</StickerAppIcon>
		</NavLink>
	)
}

const StickerAppIcon = styled.button`
	position: relative;
	background-color: white;
	border: none;
	border-radius: 17%;
	width: 100%;
	height: 100%;
	overflow: hidden;
	cursor: pointer;

	& img {
		position: absolute;
		top: -10%;
		left: -10%;
		min-width: 120%;
		min-height: 120%;
	}
`
