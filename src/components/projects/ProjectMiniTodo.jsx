import { Delete } from 'react-feather'
import { styled } from 'styled-components'

export default function ProjectTodo() {
	const todos = [
		{ value: 'Learn Japanese', id: 'Japanese is fun', isCompleted: true },
		{
			value: 'Learn HTML, CSS, and JavaScript',
			id: 'Webdev is fun',
			isCompleted: true,
		},
		{
			value: 'Get better at React & Styled-Components',
			id: 'Hey, this is pretty cool',
			isCompleted: false,
		},
		{ value: 'Work with you!', id: "Let's do this!", isCompleted: false },
	]
	const value = "Let's do this!"

	return (
		<TodoWrapper>
			<TodoList>
				{todos.map(({ id, value, isCompleted }) => (
					<li key={id}>
						<button
							className={`toggle ${isCompleted ? 'completed' : undefined}`}
							aria-label='toggle item'
						>
							{value}
						</button>
						<button className='delete-btn'>
							<Delete />
						</button>
					</li>
				))}
			</TodoList>
			<ListWrapper>
				<CreateNewTodoWrapper>
					<form>
						<label htmlFor='new-list-form-input'>New Todo:</label>

						<Row>
							<input id='new-list-form-input' type='text' value={value} />
							<AddToDo>
								<span className='shadow'></span>
								<span className='edge'></span>
								<span className='front'>Add Todo!</span>
							</AddToDo>
						</Row>
					</form>
				</CreateNewTodoWrapper>
			</ListWrapper>
		</TodoWrapper>
	)
}

const TodoWrapper = styled.div`
	height: 100%;
	padding: 0px;
	background-image: linear-gradient(
		180deg,
		hsl(240deg 15% 3% / 0.85) 0%,
		hsl(240deg 14% 3% / 0.87) 11%,
		hsl(240deg 12% 3% / 0.9) 22%,
		hsl(240deg 12% 3% / 0.95) 33%,
		hsl(240deg 10% 3%) 44%,
		hsl(240deg 9% 3%) 56%,
		hsl(240deg 12% 3% / 0.95) 67%,
		hsl(240deg 12% 3% / 0.9) 78%,
		hsl(240deg 14% 3% / 0.87) 89%,
		hsl(240deg 15% 3% / 0.85) 100%
	);
	border-radius: 4px;

	@media (max-width: 550px) {
		grid-column: 1/-1;
		grid-row: 3;
		margin-top: 0;
		padding: 0;
		top: 0;
		width: 100%;
	}
`

const ListWrapper = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;

	display: flex;
	justify-content: end;
`

const CreateNewTodoWrapper = styled.div`
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: start;
	padding-inline-end: 8px;

	& form {
		display: flex;
		align-items: end;
		justify-content: center;
		gap: 8px;
		font-size: calc(16 / 16 * 1rem);
	}
`

const Row = styled.div`
	display: flex;
	align-items: baseline;
	gap: 8px;

	& input {
		border: none;
		background-color: transparent;
		color: grey;
		border-bottom: 2px solid grey;
		width: 200px;
	}
`

const AddToDo = styled.button`
	position: relative;
	border: none;
	background: transparent;
	padding: 0;
	outline-offset: 4px;
	transition: filter 250ms;

	& .shadow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 12px;
		background: hsl(0deg 0% 0% / 0.25);
		will-change: transform;
		transform: translateY(2px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	}

	& .edge {
		position: absolute;
		top: 2px;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 8px;
		background: linear-gradient(
			to left,
			hsl(268, 76%, 18%) 0%,
			hsl(268, 76%, 38%) 8%,
			hsl(268, 76%, 38%) 92%,
			hsl(268, 76%, 8%) 100%
		);
	}

	& .front {
		display: block;
		position: relative;
		top: 2px;
		padding: 2px 8px;
		border-radius: 4px;
		font-size: calc(14 / 16 * 1rem);
		color: white;
		background: hsl(268, 76%, 58%);
		will-change: transform;
		transform: translateY(-4px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);

		@media (max-width: 550px) {
			width: 90px;
			padding: 8px 8px;
			font-size: 12px;
		}
	}
`

const TodoList = styled.ol`
	margin-inline: 8px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 4px;
	list-style-type: none;
	padding: 0;
	--breathing-room: 4px;

	& li {
		display: flex;
		border: 1px solid grey;
		gap: var(--breathing-room);
		margin-block-start: var(--breathing-room);
		border-radius: 4px;
		justify-content: space-between;
		font-size: calc(12 / 16 * 1rem);
	}

	& button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		color: #e8e9ee;
	}

	& button:first-of-type {
		position: relative;
		padding-inline-start: 8px;
		flex: 1;
		text-align: left;
	}

	& .delete-btn {
		background-color: transparent;
		padding-inline-end: 8px;
		overflow: hidden;
		color: hsl(280, 15%, 65%);
		width: 40px;
	}

	& .toggle.completed::after {
		content: '';
		position: absolute;
		left: 0;
		right: 20px;
		top: 0;
		bottom: 0;
		margin: auto;
		height: 4px;
		background: hsl(270deg 70% 60% / 0.6);
		border-radius: 100px;
		transform: translateY(1.5px) rotate(-0.4deg);
	}
`
