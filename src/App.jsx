import { useState } from 'react';
import { FILTERS } from './constants/filters';
import Input from './components/input/Input';
import { v4 } from 'uuid';

const App = () => {
	//ESTADO PARA GUARDAR LAS TAREAS
	const [tasks, setTasks] = useState([]);
	console.log(tasks);
	return (
		<>
			<h1>TODO LIST</h1>
			<form onSubmit={event => handleSubmit(event, tasks, setTasks)}>
				<input type='text' name='task' />
			</form>
			{tasks.map(task => (
				<div key={task.id}>
					<p>{task.task}</p>
					<input type='checkbox' />
				</div>
			))}
		</>
	);
};

const handleSubmit = (event, tasks, setTasks) => {
	event.preventDefault();
	createTask(event.target.task.value, tasks, setTasks);
	event.target.reset();
};
const createTask = (value, tasks, setTasks) => {
	const newTask = {
		id: v4(),
		task: value,
		completed: false
	};
	setTasks([...tasks, newTask]);
};
export default App;
