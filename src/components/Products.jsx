import React, {useEffect, useState} from 'react'
import axios from 'axios'
import LoadingPage from './Loading'
import "../index.css"

const Products = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProduct] = useState([])

    useEffect(()=>{
        setLoading(true)
        axios.get("https://fakestoreapi.com/products")
        .then((response) =>{
            setProduct(response.data)
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

      //function to remove products
    const removeProducts = (id) => {
        const newProducts = products.filter((product) => product.id !== id)
        setProduct(newProducts)
    }
  return (
    <div className="container">
        {products?.map ((product, key)=>(
            <div className="card">
                <h2>{product.title}</h2>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <img src={product?.image} alt="" height={300} width={300}/>
                <button onClick={() => removeProducts(product.id)}>Remove</button>
            </div>
        ))}
    </div>
  )
}

export default Products
