import { useEffect } from "react";
import { Link } from "react-router-dom";
import projectColors from "./ProjectColors";
import TaskList from "./TaskLists";
import useFetch from "./useFetch";

const Home = () => {

    const {data: tasks, error, isPending} = useFetch("http://localhost:8000/tasks");
    
    
    if (tasks) {
        projectColors.setColors(tasks)
    };

    return (
        <div className="home">
            {isPending && <div className='pending'>Loading...</div>}
            {error && <div className="error">Theres has been an error fetching the data</div>}
            {tasks && <TaskList tasks={tasks} />}
            <Link to="/create">Add Task</Link>
        </div>
    );
}
 
export default Home;