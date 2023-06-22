import '../App.css';
import { useEffect, useState } from 'react';
import { getUsers } from '../Service/api';

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
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                </tr>
            </thead>
            {/* <tbody>
                {
                    users.map(user => {
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                        </tr>
                    })
                }
            </tbody> */}
            <tbody>
                {
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
    )
}

export default AllUsers;