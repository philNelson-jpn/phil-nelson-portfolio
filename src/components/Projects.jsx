import React from 'react'
import { styled } from 'styled-components'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Layout from './projects/Layout'
import ProjectMotionBrowser from './projects/ProjectMotionBrowser'
import ProjectGradientGenerator from './projects/ProjectGradientGenerator'
import ProjectTodo from './projects/ProjectTodo'
import ProjectStickerClicker from './projects/ProjectStickerClicker'

export const Context = React.createContext()

export default function Projects() {
    const INITIAL_STATE = {
        colors: ['#35c4fd', '#da2ff4', '#fb5b5b', '#ff7552', '#ffdd33', '#01ff51'],
        numOfVisibleColors: 3,
    }

    function reducer(state, action) {
        switch (action.type) {
            case 'add-color': {
                return {
                    ...state,
                    numOfVisibleColors: state.numOfVisibleColors + 1,
                }
            }
    
            case 'remove-color': {
                return {
                    ...state,
                    numOfVisibleColors: state.numOfVisibleColors - 1,
                }
            }
    
            case 'change-color': {
                const nextColors = [...state.colors]
                nextColors[action.index] = action.value
    
                return {
                    ...state,
                    colors: nextColors,
                }
            }
        }
    }

	return (
		<Context.Provider value={{INITIAL_STATE, reducer}}>
			<Router>
				<ProjectsWrapper>
					<Routes>
						<Route path='/' element={<Layout />}>
							<Route path='/phire-phox' element={<ProjectMotionBrowser />} />
							<Route
								path='/gradient-generator'
								element={<ProjectGradientGenerator />}
							/>
                            <Route
								path='/todo-list'
								element={<ProjectTodo />}
							/>
                            <Route
								path='/sticker-clicker'
								element={<ProjectStickerClicker />}
							/>
						</Route>
					</Routes>
				</ProjectsWrapper>
			</Router>
		</Context.Provider>
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
