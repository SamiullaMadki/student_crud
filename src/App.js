import './App.css';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import { NavLink } from 'react-router-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <NavLink to='/'>All Users</NavLink>
    <NavLink to='/add'>Add User</NavLink>
      <Routes>
        <Route path='/' element={<AllUsers />} />
        <Route path='/add' element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
