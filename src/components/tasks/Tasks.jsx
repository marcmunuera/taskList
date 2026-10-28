const Tasks = ({ tasks, actionDelete }) => {
	return (
		<>
			{tasks.map(task => (
				<div key={task.id}>
					<p>{task.task}</p>
					<input type='checkbox' />
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
const actionDelete = () => {
	console.log('estas eliminando');
};
export default Tasks;
