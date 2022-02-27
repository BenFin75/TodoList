import Navbar from'./Navbar';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import useFetch from './useFetch';
import Footer from './Footer';

function App() {
  const {data: tasks, error, isPending} = useFetch("http://localhost:8000/tasks");
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {tasks && <Sidebar tasks={tasks}/>}
            <Routes>
              <Route path="/" element={<Home tasks={tasks} error={error} isPending={isPending}/>} />
            </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
