import { useState } from 'react';
import { FILTERS } from './constants/filters';
import Input from './components/input/Input';
import { v4 } from 'uuid';
import Filters from './components/filters/Filters';
import Tasks from './components/tasks/Tasks';

const App = () => {
	const [tasks, setTasks] = useState([]);
	const [filterActive, setFilterActive] = useState(FILTERS.ALL);

	const filteredTasks = filterTasks(filterActive, tasks);

	return (
		<>
			<form onSubmit={event => handleSubmit(event, tasks, setTasks)}>
				<input type='text' name='task' />
			</form>
			<Tasks
				tasks={filteredTasks}
				actionDelete={taskId => deleteTask(tasks, setTasks, taskId)}
				actionComplete={taskId => completeTask(tasks, setTasks, taskId)}
			/>

			<Filters filterActive={filterActive} setFilterActive={setFilterActive} />
		</>
	);
};
//acciones pra marcar como completadas o eliminar tareas
const deleteTask = (tasks, setTasks, taskId) => {
	const tasksUpdated = tasks.filter(task => task.id !== taskId);
	setTasks(tasksUpdated);
};
const completeTask = (tasks, setTasks, taskId) => {
	const tasksUpdated = tasks.map(task => {
		if (task.id === taskId) {
			task.completed = !task.completed;
		}

		return task;
	});

	setTasks(tasksUpdated);
};

//filtrar
const filterActiveTasks = tasks => {
	return tasks.filter(task => !task.completed);
};
const filterCompletedTasks = task => {
	return task.filter(task => task.completed);
};

const filterTasks = (filterActive, tasks) => {
	switch (filterActive) {
		case FILTERS.ACTIVE:
			return filterActiveTasks(tasks);
		case FILTERS.COMPLETED:
			return filterCompletedTasks(tasks);
		case FILTERS.ALL:
			return [...tasks];
	}
};

// introducir tarea
const handleSubmit = (event, tasks, setTasks) => {
	event.preventDefault();
	createTask(event.target.task.value, tasks, setTasks);
	event.target.reset();
};

//crear tarea
const createTask = (value, tasks, setTasks) => {
	const newTask = {
		id: v4(),
		task: value,
		completed: false
	};
	setTasks([...tasks, newTask]);
};

export default App;
