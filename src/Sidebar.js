import projectColors from "./ProjectColors";
import useFetch from "./useFetch";

const SideBar = () => {

    const {data: tasks, errors, pending} = useFetch("http://localhost:8000/tasks");
    const projectsObj = projectColors.objOfProjectColors; //{Main: 'blue', Secondary: 'red'} ect.

    if (tasks) {
        projectColors.setColors(tasks)
    };

    return (
        <div className="sidebar">
            <div className="dates">
                <p className="all">All Tasks</p>
                <p className="today">Today</p>
                <p className="week">This Week</p>
                <p className="past-due">Past Due</p>
            </div>
            <div className="projects">
                <ul className="project-list">
                    {Object.entries(projectsObj).map((entry, index) => {
                        const [project, projectColor] = entry;
                        const projectStyle = {backgroundColor: projectColor}
                        return  <li className="project-name" key={index}>
                                    <div className="project-tag" style={projectStyle}></div>
                                    <div>-</div>
                                    <div>{project}</div>
                                </li>
                    })}
                </ul>
            </div>
        </div>
    );
}
 
export default SideBar;