import '../App.css';
import { useEffect, useState } from 'react';
import { getUsers } from '../Service/api';
import { Link } from 'react-router-dom';

const AllUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <button variant='contained' style={{color: 'blue', marginRight: '4px'}} component={Link} to={`/edit/${user._id}`}>Edit</button>
                                <button variant='contained' style={{color: 'red'}}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
    )
}

export default AllUsers;