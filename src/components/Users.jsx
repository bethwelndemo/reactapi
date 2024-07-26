import React, {useEffect, useState} from 'react'
import axios from 'axios'
import "../index.css"
import LoadingPage from './Loading'

const Users = () => {
    const [loading, setLoading] = useState(false)
    const [users, setUSers] = useState([])

    useEffect( () => {
        // set loading to be true
        setLoading(true)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            setUSers(response.data)
            setLoading(false)
        })
        .catch((error)=>{
            setLoading(false)
            console.log(error)
        })

    },[])

    // lets console and see if we get all users
    // console.log(users)
    if(loading){
       return <LoadingPage/>
    }
    //filter users
    //function to filter users
    const removeUser = (id) => {
        const newUSers = users.filter((user) => user.id !== id)
        // alert("user with id is removed" + id)
        setUSers(newUSers)
    }
  return (
    <div className="container">
        {users?.map((user, key) => (
            <div className="card">
                <h2>{user.name}</h2>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                {/* button to delete user */}
                <button onClick={() => removeUser(user.id)}>Remove</button>
            </div>
        ))}
    </div>
  )
}

export default Users
