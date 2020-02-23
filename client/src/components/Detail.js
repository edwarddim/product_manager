import React, {useState, useEffect} from 'react'
import {navigate} from '@reach/router'
import axios from 'axios'


const Detail = ({id}) =>{
    const [detailState, setDetailState] = useState(false)
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
            .then(res => {
                setDetailState(res.data)
            })
            .catch(err => {
                console.log("ERR: ", err)
            })
    },[])

    const deleteProduct = (id) =>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                navigate('/products')
            })
            .catch(err => {
                console.log("ERR: ", err)
            })
    }

    return (detailState === false)? <h1>Loading...</h1> :
    <div>
        <h3>Title: {detailState.title}</h3>
        <p>Price: {detailState.price}</p>
        <p>Description: {detailState.description}</p>
        <button onClick={(e) => deleteProduct(detailState._id) } >Delete</button>
    </div>
}
export default Detail;