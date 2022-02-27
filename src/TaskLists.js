const TaskList = ({tasks}) => {

    return (
        <div className="card-container">
            {tasks.map((task) => (
                <div className="card" key={task.id}>
                    <div className={task.project}></div>
                    <div className="title">{task.title}</div>
                    <div className="date">{task.date}</div>
                    <input type="checkbox" className="completed" defaultChecked={task.completed}></input>
                </div>
            ))}
        </div>
    );
}
 
export default TaskList;