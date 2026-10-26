const Filters = ({ filterActive, setFilterActive }) => {
	return (
		<>
			<div>
				<p onClick={() => changeFilter(0, setFilterActive)}>ALL</p>
				<p onClick={() => changeFilter(1, setFilterActive)}>ACTIVE</p>
				<p onClick={() => changeFilter(2, setFilterActive)}>COMPLETED</p>
			</div>
		</>
	);
};

const changeFilter = (newFilter, setFilterActive) => {
	console.log(newFilter);
	setFilterActive(newFilter);
};

export default Filters;
