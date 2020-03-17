import React, {useState, useEffect} from 'react'
import {navigate} from '@reach/router'
import axios from 'axios'
import DeleteButton from './DeleteButton'


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
    return (detailState === false)? <h1>Loading...</h1> :
    <div>
        <h3>Title: {detailState.title}</h3>
        <p>Price: {detailState.price}</p>
        <p>Description: {detailState.description}</p>
        <DeleteButton />
    </div>
}
export default Detail;