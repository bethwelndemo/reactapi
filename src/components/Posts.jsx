import React, {useEffect, useState} from 'react'
import axios from 'axios'
import "../index.css"
import LoadingPage from './Loading'


const Posts = () => {
    const [loading, setLoading] = useState(false)
    const[posts, setPosts] = useState([])

    useEffect(()=>{
        setLoading(true)
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) =>{
            setPosts(response.data)
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
    // console.log(posts)
    //function to remove todos
    const removePosts = (id) => {
        const newPosts = posts.filter((post) => post.id !== id)
        setPosts(newPosts)
    }
  return (
    <div className="container">
        {posts?.map((post, key)=>(
            <div className="card">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <button onClick={() => removePosts(post.id)}>Remove</button>
            </div>
        ))}
    </div>
  )
}

export default Posts
