import React from "react"
import axios from "axios";

function Users(){
    
    //useState
    const [data, setData] = React.useState([]);


    async function getUsers(){
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        
        setData(response.data);
        console.log(response.data);
    }

    getUsers();

    return(
        <div>
            <ul>
                {
                    data?.map((item) => (
                        <>
                        <li>{item.name}</li>
                        <li>{item.email}</li>
                        <li>{item.username}</li>
                        </>
                    ))
                }
            </ul>

        </div>

    );
}

export default Users;