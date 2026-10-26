const Tasks = ({ tasks }) => {
	return (
		<>
			{tasks.map(task => (
				<div key={task.id}>
					<p>{task.task}</p>
					<input type='checkbox' />
				</div>
			))}
		</>
	);
};
export default Tasks;
