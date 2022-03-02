/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';
import React, { useNavigate } from 'react-router-dom';
import projectColors from './ProjectColors';

function TaskList({ tasks }) {
  TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
      project: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
  };
  const projectsObj = projectColors.objOfProjectColors; // {Main: 'blue', Secondary: 'red'} ect.
  const naviage = useNavigate();

  const handleDelete = (e) => {
    fetch(`https://my-json-server.typicode.com/benfin75/todolist-server/tasks${e.target.classList[1]}`, {
      method: 'DELETE',
    }).then(() => {
      window.location.reload(false);
    });
  };

  const handleLoadTask = (e) => {
    if (e.target.classList[1]) {
      naviage(`/todolist/task/${e.target.classList[1]}`);
    } else {
      naviage(`/todolist/task/${e.target.parentNode.classList[1]}`);
    }
  };

  const HandleChangeStatus = (e) => {
    const completed = e.target.checked;
    const id = Number(e.target.classList[1]);
    let changedTask;
    tasks.forEach((task) => {
      if (task.id === id) {
        changedTask = task;
      }
    });
    changedTask.completed = completed;
    fetch(`https://my-json-server.typicode.com/benfin75/todolist-server/tasks${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(changedTask),
    });
  };

  return (
    <div className="card-container">
      <div className="card">
        <div className="project-tag">Project</div>
        <div className="title">Task Name</div>
        <div className="date">Due date</div>
        <div className="options">Done  Delete</div>
      </div>
      {tasks.map((task) => (
        <div className="card" key={task.id}>
          {Object.entries(projectsObj).map((entry, index) => {
            const [project, projectColor] = entry;
            if (project === task.project) {
              const projectStyle = { backgroundColor: projectColor };
              return (
                <div key={index} className={`project ${task.id}`} onClick={handleLoadTask}>
                  <div className="project-tag" style={projectStyle} />
                </div>
              );
            }
          })}
          <div className={`title ${task.id}`} onClick={handleLoadTask}>{task.title}</div>
          <div className={`date ${task.id}`} onClick={handleLoadTask}>{task.date}</div>
          <div className="options">
            <input type="checkbox" className={`completed ${task.id}`} defaultChecked={task.completed} onClick={HandleChangeStatus} />
            <button type="submit" className={`delete ${task.id}`} onClick={handleDelete}>x</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
