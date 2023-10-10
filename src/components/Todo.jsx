import React from 'react'
import { Delete } from 'react-feather'
import { styled } from 'styled-components'

export default function Todo() {
	const [todos, setTodos] = React.useState([
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
	])
	const [value, setValue] = React.useState("Let's do this!")

	function handleCreateTodo(value) {
		if (todos.length >= 6) {
			window.alert('Sorry, there is a limit of 6 todos in this demo.')
			return
		}
		setTodos([
			...todos,
			{
				value,
				id: crypto.randomUUID(),
			},
		])
	}

	function handleToggleTodo(id) {
		setTodos(
			todos.map((todo) => {
				if (todo.id !== id) {
					return todo
				}

				return {
					...todo,
					isCompleted: !todo.isCompleted,
				}
			})
		)
	}

	function handleDeleteTodo(id) {
		setTodos(todos.filter((todo) => todo.id !== id))
	}

	return (
		<TodoWrapper>
			<ListWrapper>
				<CreateNewTodoWrapper>
					<form
						onSubmit={(event) => {
							event.preventDefault()

							handleCreateTodo(value)

							setValue('')
						}}
					>
						<label htmlFor='new-list-form-input'>New Todo:</label>

						<Row>
							<input
								onClick={() => setValue('')}
								onFocus={() => setValue('')}
								id='new-list-form-input'
								type='text'
								value={value}
								onChange={(event) => {
									setValue(event.target.value)
								}}
							/>
							<AddToDo>
								<span className='shadow'></span>
								<span className='edge'></span>
								<span className='front'>Add Todo!</span>
							</AddToDo>
						</Row>
					</form>
				</CreateNewTodoWrapper>
			</ListWrapper>
			<TodoList>
				{todos.map(({ id, value, isCompleted }) => (
					<li key={id}>
						<button
							className={`toggle ${isCompleted ? 'completed' : undefined}`}
							onClick={() => {
								handleToggleTodo(id)
							}}
							aria-label='toggle item'
						>
							{value}
						</button>
						<button
							className='delete-btn'
							onClick={() => {
								handleDeleteTodo(id)
							}}
						>
							<Delete />
						</button>
					</li>
				))}
			</TodoList>
		</TodoWrapper>
	)
}

const TodoWrapper = styled.div`
	border: 2px solid hsl(0deg 0% 100% / 0.3);
	padding: 4px;
	min-width: 100%;
	width: 600px;
	height: 420px;
	/* aspect-ratio: 1 / 1; */
	margin-block-start: 6rem;
	margin-block-end: 4rem;
	grid-column: 1;
	grid-row: 2;
	position: sticky;
	top: 12.5rem;
	z-index: 10001;
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
	border-radius: 8px;

	@media (max-width: 550px){
		grid-column: 1/-1;
		grid-row: 3;
		margin-top: 0;
		padding: 0;
		top: 0;
		width: 100%;
	}
`

const ListWrapper = styled.div``

const CreateNewTodoWrapper = styled.div`
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Row = styled.div`
	display: flex;
	gap: 16px;

	& input {
		border: none;
		background-color: transparent;
		color: grey;
		border-bottom: 3px solid grey;
		width: 300px;
	}
`

const AddToDo = styled.button`
	position: relative;
	border: none;
	background: transparent;
	padding: 0;
	cursor: pointer;
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
		top: 0;
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
		padding: 6px 12px;
		border-radius: 8px;
		font-size: 1rem;
		color: white;
		background: hsl(268, 76%, 58%);
		will-change: transform;
		transform: translateY(-4px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	}

	&:hover {
		filter: brightness(110%);
	}
	&:hover .front {
		transform: translateY(-6px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}
	&:active .front {
		transform: translateY(-2px);
		transition: transform 34ms;
	}
	&:hover .shadow {
		transform: translateY(4px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}
	&:active .shadow {
		transform: translateY(1px);
		transition: transform 34ms;
	}
	&:focus:not(:focus-visible) {
		outline: none;
	}
`

const TodoList = styled.ol`
	margin-inline: 24px;
	display: flex;
	flex-direction: column;
	list-style-type: none;
	padding: 0;
	--breathing-room: 6px;

	& li {
		display: flex;
		border: 1px solid grey;
		gap: var(--breathing-room);
		margin-block-start: var(--breathing-room);
		border-radius: 4px;
		justify-content: space-between;
	}

	& button {
		background-color: transparent;
		border: none;
		cursor: pointer;
	}

	& li:hover {
		background-color: #ffffff13;
	}

	& button:first-of-type {
		position: relative;
		padding: 8px;
		flex: 1;
		text-align: left;
	}

	& .delete-btn {
		background-color: transparent;
		padding: 8px;
		overflow: hidden;
		color: hsl(280, 15%, 65%);
		width: 40px;
	}

	& .delete-btn:hover {
		background-color: hsla(280, 10%, 35%, 0.5);
		color: hsl(0, 100%, 100%);
	}

	& .toggle.completed::after {
		content: '';
		position: absolute;
		left: 0;
		right: 20px;
		top: 0;
		bottom: 0;
		margin: auto;
		height: 5px;
		background: hsl(270deg 70% 60% / 0.6);
		border-radius: 100px;
		transform: translateY(1.5px) rotate(-0.4deg);
	}
`
