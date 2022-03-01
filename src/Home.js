import { isAfter, isBefore, isSameDay, startOfToday } from "date-fns";
import { addDays, nextSunday, previousSunday } from "date-fns/esm";
import { Link } from "react-router-dom";
import projectColors from "./ProjectColors";
import TaskList from "./TaskLists";
import useFetch from "./useFetch";

const Home = ({filter}) => {

    const {data: tasks, error, isPending} = useFetch("https://my-json-server.typicode.com/benfin75/todolist-server/tasks");
    let filteredTasks;

    if (tasks) {
        if (filter[1] === 'all'){
            filteredTasks = tasks;
        } else if (filter !== '') {
            if (filter[0] === 'date') {
                filteredTasks = tasks.filter((task) => {
                    let parsedDate = addDays(new Date(task.date), 1);
                    const today = startOfToday()
                    console.log(filter[1])
                    switch(filter[1]) {
                        case 'today':
                            return isSameDay(parsedDate, today);
                        case 'week':
                            const startOfWeek = previousSunday(today);
                            const endOfWeek = nextSunday(today);
                            return (isBefore(parsedDate, endOfWeek) && isAfter(parsedDate, startOfWeek));
                        case 'past-due':
                            return isBefore(parsedDate, today);
                    }
                })
            } else {
                filteredTasks = tasks.filter((task) => task[filter[0]] === filter[1]);
            }
        } else {
            filteredTasks = tasks;
        }
    }
    
    if (tasks) {
        projectColors.setColors(tasks)
    };

    return (
        <div className="home">
            {isPending && <div className='pending'>Loading...</div>}
            {error && <div className="error">Theres has been an error fetching the data</div>}
            {tasks && <TaskList tasks={filteredTasks} />}
            <Link to="/todolist/create">Add Task</Link>
        </div>
    );
}
 
export default Home;