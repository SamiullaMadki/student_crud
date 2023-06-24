import { useState,useEffect } from "react";
import { editUser,getUser } from "../Service/api";
import { useNavigate,useParams } from "react-router-dom";

const defaultValue = {
    name:'',
    email:'',
    mobile:'',
}

const EditUser = () => {

    const [user,setUser] = useState(defaultValue);

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        loadUserDetails();
    },[])

    const loadUserDetails = async () => {
        const response = await getUser(id);
        setUser(response.data);
    }

    const onValueChange = (e) => {
        console.log(e.target.name, e.target.value)
        setUser({ ...user,[e.target.name]:e.target.value})
        console.log(user);
    }

    const editUserDetails = async ()=>{
        await editUser(user,id);
        navigate('/all');
    }
    
    return(
        <div>
            <h1>Edit User</h1>
            <form>
                <label htmlFor="name">Name</label>
                <input onChange={(e) => onValueChange(e)} name="name" value={user.name}/>

                <br/>
                
                <label htmlFor="email">Email</label>
                <input onChange={(e) => onValueChange(e)} name="email" value={user.email} />
                
                <br/>

                <label htmlFor="mobile">Mobile</label>
                <input onChange={(e) => onValueChange(e)} name="mobile" value={user.mobile} />
                
                <br/>

                <button onClick={()=>editUserDetails()} >Edit</button>
            </form>
        </div>
    )
}

export default EditUser;