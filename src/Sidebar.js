import projectColors from "./ProjectColors";
import useFetch from "./useFetch";

const SideBar = ({getFilter}) => {

    const {data: tasks, errors, pending} = useFetch("https://my-json-server.typicode.com/benfin75/todolist-server/tasks");
    const projectsObj = projectColors.objOfProjectColors; //{Main: 'blue', Secondary: 'red'} ect.

    if (tasks) {
        projectColors.setColors(tasks)
    };

    const handleSelection = (e) => {
        let selection;
        if (e.target.className === 'project-tag' || e.target.className === ''){
            selection = e.target.parentNode.className;
        } else {
            selection = e.target.className;
        }
        getFilter(selection);
    }

    return (
        <div className="sidebar">
            <div className="dates">
                <p className="all" onClick={handleSelection}>All Tasks</p>
                <p className="today" onClick={handleSelection}>Today</p>
                <p className="week" onClick={handleSelection}>This Week</p>
                <p className="past-due" onClick={handleSelection}>Past Due</p>
            </div>
            <div className="projects">
                <ul className="project-list">
                    {Object.entries(projectsObj).map((entry, index) => {
                        const [project, projectColor] = entry;
                        const projectStyle = {backgroundColor: projectColor}
                        return  <li className={project} key={index} onClick={handleSelection}>
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