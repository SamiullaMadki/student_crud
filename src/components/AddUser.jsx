import { useState } from "react";
import { addUser } from "../Service/api";
import { useNavigate } from "react-router-dom";

const defaultValue = {
    name:'',
    email:'',
    mobile:'',
}

const AddUser = () => {

    const [user,setUser] = useState(defaultValue);

    const navigate = useNavigate();

    const onValueChange = (e) => {
        console.log(e.target.name, e.target.value)
        setUser({ ...user,[e.target.name]:e.target.value})
        console.log(user);
    }

    const addUserDetails = async ()=>{
        await addUser(user);
        navigate('/');
    }
    
    return(
        <div>
            <h1>Add User</h1>
            <form>
                <label htmlFor="name">Name</label>
                <input onChange={(e) => onValueChange(e)} name="name" />

                <br/>
                
                <label htmlFor="email">Email</label>
                <input onChange={(e) => onValueChange(e)} name="email" />
                
                <br/>

                <label htmlFor="mobile">Mobile</label>
                <input onChange={(e) => onValueChange(e)} name="mobile" />
                
                <br/>

                <button onClick={()=>addUserDetails()} >Submit</button>
            </form>
        </div>
    )
}

export default AddUser;