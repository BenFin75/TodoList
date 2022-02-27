import TaskList from "./TaskLists";

const Home = ({tasks, error, isPending}) => {

    return (
        <div className="home">
            {isPending && <div className='pending'>Loading...</div>}
            {error && <div className="error">Theres has been an error fetching the data</div>}
            {tasks && <TaskList tasks={tasks} />}
            <h1>test</h1>
        </div>
    );
}
 
export default Home;