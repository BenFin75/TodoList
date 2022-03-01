import Navbar from'./Navbar';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import CreateTask from './CreateTask';
import TaskDetails from './TaskDetails';
import SignUpPage from './SignUpPage';
import LogInPage from './LogInPage';
import { useState } from 'react';

function App() {
  const [filter, setFilter] = useState('');

  const getFilter = (selection) => {
    let newFilter;
    switch (selection) {
        case 'all':
        case 'today':
        case 'week':
        case 'past-due':
          setFilter(['date', selection]);
            break;
        default:
          setFilter(['project', selection]);
    }
  }
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Sidebar getFilter={getFilter} />
            <Routes>
              <Route path="/todolist/" element={<Home filter={filter} />} />
              <Route path="/todolist/create" element={<CreateTask />} />
              <Route path="/todolist/task/:id" element={<TaskDetails />} />
              <Route path='/todolist/users/signup' element={<SignUpPage />} />
              <Route path='/todolist/users/login' element={<LogInPage />} />
            </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
