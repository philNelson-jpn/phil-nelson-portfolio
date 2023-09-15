import './App.css'
import LogoComponent from './LogoComponent'

function App() {
	return (
		<>
			<LogoComponent />

			<div id='intro'>
				<h2>P</h2>
				<div className='sticky'>
					<span className='sub-text'>assion</span>
					<div className='intro-text'>
						<p>
							Hi there! I’m Phil. I’m a passionate introvert who loves building
							things with React and Styled Components!
						</p>
						<p>
							My phlair for interactive design, collaborative nature, insatiable
							love for learning, and caring disposition make me an ideal phit
							for your team.
						</p>

						<p>
							I love creating phluid and dynamic layouts with CSS to phashion
							visually stunning interfaces, and utilize React to deliver
							engaging user experiences.
						</p>

						<p>
							As a lifelong learner, I am constantly seeking to expand my
							developer skillset.
						</p>

						<p>
							I'm thrilled to contribute my skills and phoster a phriendly,
							phruitful, and philanthropic environment within your projects.
						</p>
						<div className='sticky'>
							<span className='sub-text'>assion</span>
							<div className='intro-text'>
								<p>
									Hi there! I’m Phil. I’m a passionate introvert who loves
									building things with React and Styled Components!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
