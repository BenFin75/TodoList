import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const CreateTask = () => {

    const {data: tasks, errors, pending} = useFetch("http://localhost:8000/tasks");
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {project, title, description, date};

        setIsPending(true);

        fetch("http://localhost:8000/tasks/", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newTask),
        }).then(() => {
            console.log('new task added');
            setIsPending(false);
            navigate('/todolist/');
            window.location.reload(false)
        })
    }

    return (
        <div className="create-task">
            <h1>Add a Task</h1>
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
                { !isPending && <button>Add Task</button>}
                { isPending && <button disabled>Posting...</button>}
            </form>
        </div>
    );

}
 
export default CreateTask;
