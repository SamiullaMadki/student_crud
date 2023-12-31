import './App.css';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import { NavLink } from 'react-router-dom';
import EditUser from './components/EditUser';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <NavLink to='/all' style={{ marginRight: '100px', marginLeft: '100px', fontSize:'35px'}}>All Users</NavLink>
    <NavLink to='/add' style={{ marginRight: '100px', marginLeft: '100px', fontSize:'35px'}}>Add User</NavLink>
    <h1> Student Table</h1>
      <Routes>
        <Route path='/all' element={<AllUsers />} />
        <Route path='/add' element={<AddUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
