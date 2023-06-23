import './App.css';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import { NavLink } from 'react-router-dom';
import EditUser from './components/EditUser';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <NavLink to='/' style={{ marginRight: '100px'}}>All Users</NavLink>
    <NavLink to='/add'>Add User</NavLink>
      <Routes>
        <Route path='/' element={<AllUsers />} />
        <Route path='/add' element={<AddUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
