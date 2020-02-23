import React, {useState, useEffect} from 'react'
import { Link } from '@reach/router';
import axios from 'axios'

const ProdList = () =>{
    const [listState, setListState] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setListState(res.data)
            })
            .catch(err => console.log('ERR: ', err))
    }, [])

    const deleteProduct = (id) =>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => {
                console.log("ERR: ", err)
            })
    }

    const removeFromDom = id => {
        setListState(listState.filter(prod => prod._id !== id));
    }

    return (listState.length === 0) ? <h1>Loading</h1> :
    listState.map((item, i)=> (
        <div key={i}>
            <p>Title: {item.title}</p>
            <p>Price: {item.price}</p>
            <p>Desc: {item.description}</p>
            <Link to={"/products/"+item._id}>
                Details
            </Link>
            <Link to={"/products/"+item._id+"/edit"}>
                Edit
            </Link>
            <button onClick={(e) => deleteProduct(item._id) } >Delete</button>
        </div>
    ))
}
export default ProdList;