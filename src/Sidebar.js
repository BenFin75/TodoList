import ProjectColors from "./ProjectColors";

const SideBar = ({tasks}) => {

    ProjectColors.setColors(tasks);
    const projectsObj = ProjectColors.listsOfProjectColors; //{Main: 'blue', Secondary: 'red'} ect.

    return (
        <div className="sidebar">
            <div className="dates">
                <p className="all">All Tasks</p>
                <p className="today">Today</p>
                <p className="week">This Week</p>
            </div>
            <div className="projects">
                <ul className="project-list">
                    {Object.entries(projectsObj).map((entry, index) => {
                        const [project, projectColor] = entry;
                        const projectStyle = {backgroundColor: projectColor}
                        console.log(projectStyle) // {backgroundColor: 'blue'} etc.
                        return <li className="project-name" key={index} style={projectStyle}>{project}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}
 
export default SideBar;