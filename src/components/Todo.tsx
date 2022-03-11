import React, { useState } from "react"
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { useEffect } from "react";

export interface ITodo {
	task: string;
	deadline: Date
}

export const TODO = () => {
	const [task, setTask] = useState("")

	const [todos, setTodos] = useState<ITodo[]>([])

	const [completed, setCompleted] = useState<ITodo[]>([])

	const [backlog, setBacklog] = useState<ITodo[]>([])

	const [deadline, setDeadline] = useState<Date>(new Date())

	const dateValue: Date = new Date("03/10/2022 09:00 PM")
	const minDate: Date = new Date("03/10/2022 09:00 PM")
	const maxDate: Date = new Date("03/10/2023 09:00 PM")


	const handleChange = (event: any) => {
		console.log("Checking events", event.target.value)
		setTask(event.target.value)
	}

	const handleAdd = () => {
		console.log('checking task', task, dateValue)
		if (!task) return
		console.log(dateValue.getHours())
		setTodos([...todos, { task, deadline }])
		setTask("")
		setDeadline(new Date())

	}

	const handleDone = (index: number) => {
		if (index == -1) return
		setCompleted([...completed, todos[index]])

		const tempTodos = todos
		tempTodos.splice(index, 1)

		console.log('checking tempTodos', tempTodos)
		setTodos(tempTodos)
	}



}

const time = new Date();
time.setSeconds(time.getSeconds() + 5);

const handleDateChange = (event: any) => {
	console.log('checking date event', event)
	setDeadline(event.target.value)
}


return (
	<>

		<div className="todo-container">
			<div className="centered-container">
				<div className="text-container">
					<input
						type="text"
						value={task}
						onChange={handleChange}
						placeholder="Enter your task" required></input>
					<div>
						<DateTimePickerComponent placeholder="Choose a date and time"
							value={deadline}
							min={minDate}
							max={maxDate}
							format="dd-MMM-yy HH:mm"
							step={60}
							onChange={handleDateChange}
						/>
					</div>
					<button onClick={handleAdd}>ADD</button>
				</div>
				<div className="task-container">
					<h4>Task</h4>
					<ol className="task-list">
						{

							todos?.map((todo: ITodo, index: number) => {
								return (<li>{todo}
									<button onClick={() => handleDone(index)}>
										done
									</button>
									<button>

										<MyTimer todo={todo} />

									</button>
								</li>)
							})
						}
					</ol>
				</div>

				<div className="task-container">
					<h4>Completed</h4>
					<ol className="task-list">
						{
							completed.map((todo: ITodo) => {
								return (<li>{`${todo.task}  Deadline: ${todo.deadline.toISOString()}`}</li>)
							})
						}
					</ol>
				</div>

				<div className="task-container">
					<h4>Backlog Task</h4>
					<ol className="task-list">
						{
							backlog.map((todo: ITodo) => {
								return (<li>{`${todo.task}  Deadline: ${todo.deadline.toISOString()}`}
									<button onClick={handleAdd}>Redo</button>
								</li>)
							})
						}
					</ol>
				</div>
			</div>
		</div>
	</>
)
}
