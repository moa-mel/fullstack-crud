import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import CreateRoom from './Components/CreateRoom';
import Room from './Components/Room';
import UpdateRoom from './Components/UpdateRoom';


function App() {

  return (
    <div className="App">
    <Router>
    <Routes>
    <Route path="/" element={<Room/>} />
      <Route path="/create" element={<CreateRoom/>} />
      <Route path="/edit/:id" element={<UpdateRoom/>} />
      </Routes>
      </Router>
      </div>
  )
}

export default App
