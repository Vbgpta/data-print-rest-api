import { useEffect, useState } from 'react';
import axios from "axios";

let baseURL = 'https://dummyjson.com/users';
 
const ReactTable = () => {
    const [users, setUsers] = useState([])
 
    async function getUsers() {
        await axios.get(baseURL).then((response) => {
            const arr = Object.values(response.data);
            let data = arr[0]
            setUsers(data);
            console.log(data);
        })
    }
    useEffect(() => {
        getUsers();
    }, [])
 
    if (users.length < 1) {
        return (
            <>
                <p>Loading...</p>
            </>
        )
    }
    const keyList = [{ id: 'Name' }, { id: 'Email' }, { id: 'Created At' }, { id: 'Phone' }, { id: 'Status' }, { id: 'Action' }];
    return (
        <>
            <div >
                <div ></div>
                <table >
                    <thead>
                        <tr>
                            {
                                keyList.map((val, i) => {
                                    return (
                                        <td key={i}>{val.id}</td>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((e) => (
 
                            <tr key={e.id}>
                                <td>
                                    <img src={e.image} style={{ width: "30px", height: "20px" }}  alt="logo" />
                                    {/* <Image
                                    src={e.image}
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={userImage}
                                />  */}
                                    {e.firstName}</td>
                                <td>{e.email}</td>
                                <td>{e.ip}</td>
                                <td>{e.phone}</td>
                                <td>{e.username}</td>
 
                            </tr>
 
                        ))}
                    </tbody>
                </table>
 
            </div>
        </>
    )
}
 
export default ReactTable