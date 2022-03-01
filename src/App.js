import Navbar from'./Navbar';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import CreateTask from './CreateTask';
import TaskDetails from './TaskDetails';
import SignUpPage from './SignUpPage';
import LogInPage from './LogInPage';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Sidebar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateTask/>} />
              <Route path="/task/:id" element={<TaskDetails />} />
              <Route path='/users/signup' element={<SignUpPage />} />
              <Route path='/users/login' element={<LogInPage />} />
            </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
