import React, {useEffect, useState} from 'react'
import axios from 'axios'
import LoadingPage from './Loading'
import "../index.css"

const Comments = () => {
    const[loading, setLoading]= useState(false)
    const[comments, setComments] = useState([])

    useEffect(()=>{
        setLoading(true)
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setComments(response.data)
            setLoading(false)
        })
        .catch((error)=>{
            setLoading(false)
            console.log(error)
        })
    },[])
    if(loading){
        return <LoadingPage/>
     }
     //function to remove comments
    const removeComments = (id) => {
        const newComments = comments.filter((comment) => comment.id !== id)
        setComments(newComments)
    }
  return (
    <div className="container">
    {comments?.map((comment, key)=>(
        <div className="card">
            <h2>{comment.name}</h2>
            <p>{comment.email}</p>
            <p>{comment.body}</p>

            <button onClick={() => removeComments(comment.id)}>Remove</button>
        </div>
    ))}
</div>
   
  )
}

export default Comments
