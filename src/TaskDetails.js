import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TaskDetails = () => {

    const {id} = useParams();
    const {data: task, error, pending} = useFetch("https://my-json-server.typicode.com/benfin75/todolist-server/tasks" + id)
    const {data: tasks, errors, pendings} = useFetch("https://my-json-server.typicode.com/benfin75/todolist-server/tasks")
    console.log(task)
    const[title, setTitle] = useState('');
    const[project, setProject] = useState('');
    const[description, setDescription] = useState('');
    const[date, setDate] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    
    const projectList = []

    if (tasks) {
        Object.values(tasks).forEach((task) => {
            if (!projectList.find(project => project === task.project)){
                projectList.push(task.project);
            }
        })
    }

    if(task && title === '') {
        setTitle(task.title)
        setProject(task.project)
        setDescription(task.description)
        setDate(task.date)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {project, title, description, date};

        setIsPending(true);

        fetch("https://my-json-server.typicode.com/benfin75/todolist-server/tasks" + id, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newTask),
        }).then(() => {
            setIsPending(false);
            navigate('/todolist/');
            window.location.reload(false)
        })
    }

    const hnadleReturn = () => {
        navigate('/todolist/');
    }

    return (
        <div className="create-task">
            <h1>view & Edit Task</h1>
            <form onSubmit={handleSubmit}>
                <label>Task name:
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                </label>
                <label>Task details:
                <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                </label>
                <label>Project name:
                <input 
                    list="projects-datalist"
                    required
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                />
                <datalist id="projects-datalist">
                    {projectList.map((project, index) => {
                        return <option key={index} value={project} />
                    })}
                </datalist>
                </label>
                <label>Due date:
                <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                </label>
                <div className="buttons">
                    { !isPending && <button>Update Task</button>}
                    { !isPending && <button onClick={hnadleReturn}>Return</button>}
                </div>
                { isPending && <button disabled>Updating...</button>}
            </form>
        </div>
    );
}
 
export default TaskDetails;