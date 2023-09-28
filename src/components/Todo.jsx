import React from 'react'
import { X } from 'react-feather'
import { styled } from 'styled-components'

export default function Todo() {
	const [todos, setTodos] = React.useState([
		{ value: 'Learn Japanese', id: 'Japanese is fun', isCompleted: true },
		{ value: 'Learn HTML and CSS', id: 'Webdev is fun', isCompleted: true },
		{
			value: 'Learn JavaScript',
			id: 'This stuff is hard, man!',
			isCompleted: true,
		},
		{ value: 'Learn React', id: 'Hey, this is pretty cool', isCompleted: true },
		{
			value: 'Learn More React!',
			id: "I'm starting to get the hang of this!",
			isCompleted: false,
		},
		{ value: 'Work with you!', id: "Let's do this!", isCompleted: false },
	])
	const [value, setValue] = React.useState('')

	function handleCreateTodo(value) {
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
		<div className='todo-wrapper'>
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
								id='new-list-form-input'
								type='text'
								value={value}
								onChange={(event) => {
									setValue(event.target.value)
								}}
							/>
							<button>Add</button>
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
							<X />
						</button>
					</li>
				))}
			</TodoList>
		</div>
	)
}

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

	& button {
		background-color: transparent;
		border: solid 3px grey;
		border-radius: 6px;
		padding: 4px 8px;
	}
`

const TodoList = styled.ol``
