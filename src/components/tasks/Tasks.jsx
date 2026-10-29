const Tasks = ({ tasks, actionDelete, actionComplete }) => {
	return (
		<>
			{tasks.map(task => (
				<div key={task.id}>
					<p>{task.task}</p>
					<input
						type='checkbox'
						checked={task.completed}
						onChange={() => actionComplete(task.id)}
					/>
					<span
						onClick={() => {
							actionDelete(task.id);
						}}
					>
						X
					</span>
				</div>
			))}
		</>
	);
};
export default Tasks;
