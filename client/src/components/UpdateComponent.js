import React, { useContext ,useEffect,useState} from 'react'
import axios from 'axios'
import {navigate} from '@reach/router'

import TaskForm from './TaskForm'
import TaskContext from '../contexts/TaskContext'


const UpdateComponent = ({id}) =>{
    const [loadState, setLoadState] = useState(false)
    const {formState, changeForm, setFormState} = useContext(TaskContext)
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
            .then(res => {
                setFormState(res.data)
                setLoadState(true)
            })
            .catch(err => {
                console.log("ERR: ", err)
            })
    },[])

    const updateSubmit = event =>{
        event.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}/edit`, formState)
            .then(res => {
                setFormState({
                    title:"",
                    price:0,
                    description:""
                })
                navigate('/')
            })
            .catch(err => {
                console.log("ERR: ", err)
            })
    }

    return (
        <div>
            <h1>Edit a Product</h1>
            {loadState && <TaskForm changeForm={changeForm} formState={formState} handleSubmit={updateSubmit} />}
        </div>
    )
}
export default UpdateComponent;