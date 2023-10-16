import { styled } from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import Layout from './projects/Layout'
import ProjectMotionBrowser from './projects/ProjectMotionBrowser'
import ProjectGradientGenerator from './projects/ProjectGradientGenerator'
import ProjectTodo from './projects/ProjectTodo'
import ProjectStickerClicker from './projects/ProjectStickerClicker'

export default function Projects() {
	return (
		<ProjectsWrapper>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/phire-phox' element={<ProjectMotionBrowser />} />
					<Route
						path='/gradient-generator'
						element={<ProjectGradientGenerator />}
					/>
					<Route path='/todo-list' element={<ProjectTodo />} />
					<Route path='/sticker-clicker' element={<ProjectStickerClicker />} />
				</Route>
			</Routes>
		</ProjectsWrapper>
	)
}

const ProjectsWrapper = styled.div`
	border: 2px solid hsl(0deg 0% 100% / 0.3);
	border-radius: 16px;
	height: 100dvh;
	background-color: var(--bg-color);
	opacity: 0.95;
	z-index: 2;

	display: grid;
	grid-template-columns: 16px 1fr 16px;
	grid-template-rows: 1fr 100px 16px;
	place-content: center;
	grid-column: 2 / -2;
`
