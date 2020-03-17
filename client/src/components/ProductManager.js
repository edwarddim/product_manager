import React, {useState} from 'react'
import { Router } from '@reach/router';
import axios from 'axios'
import HomeComponent from './HomeComponent'
import DetailComponent from './DetailComponent'
import UpdateComponent from './UpdateComponent'

import TaskContext from '../contexts/TaskContext'

const ProductManager = () => {
    const [formState, setFormState] = useState({
        title:"",
        price:0,
        description:""
    })
    const [listState, setListState] = useState([])
    const [submitState, setSubmitState] = useState(false)
    const changeForm = (event) =>{
        setFormState({
            ...formState,
            [event.target.name]:event.target.value
        })
    }
    const handleSubmit = event =>{
        event.preventDefault();
        axios.post("http://localhost:8000/api/products", formState)
            .then(res => console.log("RES: ", res))
            .catch(err => console.log("ERR: ", err))
        setFormState({
            title:"",
            price:0,
            description:""
        })
        setSubmitState(!submitState)
    }
    const deleteProduct = (id) =>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => removeFromDom(id))
            .catch(err => console.log("ERR: ", err))
    }
    const removeFromDom = id => {
        setListState(listState.filter(prod => prod._id !== id));
    }
    return(
        <TaskContext.Provider value={{
            formState,
            setFormState,
            submitState,
            setSubmitState,
            handleSubmit,
            changeForm,
            deleteProduct,
            listState,
            setListState
        }} >
            <Router>
                <HomeComponent path="/"/>
                <DetailComponent path="/products/:id" />
                <UpdateComponent path="/products/:id/edit" />
            </Router>
        </TaskContext.Provider>
    )
}
export default ProductManager;