import { useNavigate } from "react-router-dom";
import projectColors from "./ProjectColors";
import useFetch from "./useFetch";

const TaskList = ({tasks}) => {
    const projectsObj = projectColors.objOfProjectColors; //{Main: 'blue', Secondary: 'red'} ect.
    const naviage = useNavigate();

    const handleDelete = (e) => {
        fetch("http://localhost:8000/tasks/" + e.target.classList[1], {
            method: 'DELETE',
        }).then(() => {
            window.location.reload(false)
        })
    }

    const handleLoadTask = (e) => {
        if (e.target.classList[1]) {
            naviage(`/task/${e.target.classList[1]}`)
        } else {
            naviage(`/task/${e.target.parentNode.classList[1]}`)
        }
    }

    const HandleChangeStatus = (e) => {
        const completed = e.target.checked;
        const id = e.target.classList[1];
        let changedTask;
        tasks.forEach((task) => {
            if (task.id == id) {
                changedTask = task
            }
        })
        changedTask.completed = completed
        console.log(changedTask)
        fetch("http://localhost:8000/tasks/" + id, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(changedTask),
        })
    }

    return (
        <div className="card-container">
            <div className="card">
                <div className="project-tag">Project</div>
                <div className="title">Task Name</div>
                <div className="date">Due date</div>
                <div className="options">Done  Delete</div>
            </div>
            {tasks.map((task) => (
                 <div className='card' key={task.id}>
                    {Object.entries(projectsObj).map((entry, index) => {
                        const [project, projectColor] = entry;
                        if (project === task.project) {
                            const projectStyle = {backgroundColor: projectColor}
                            return  <div key={index} className={`project ${task.id}`} onClick={handleLoadTask}>
                                        <div className="project-tag" style={projectStyle}></div>
                                        {/* <div>{project}</div> */}
                                    </div>
                        }
                    })}
                    <div className={`title ${task.id}`} onClick={handleLoadTask}>{task.title}</div>
                    <div className={`date ${task.id}`} onClick={handleLoadTask}>{task.date}</div>
                    <div className="options">
                    <input type="checkbox" className={`completed ${task.id}`} defaultChecked={task.completed} onClick={HandleChangeStatus}></input>
                    <button className={`delete ${task.id}`} onClick={handleDelete}>x</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default TaskList;

