import React from 'react'
import TaskForm from './TaskForm'



const CreateComponent = props =>{
    const {changeForm, handleSubmit, formState} = props;
    return(
        <div>
            <h1>Create a Task</h1>
            <TaskForm changeForm={changeForm} handleSubmit={handleSubmit} formState={formState} />
        </div>
    )
}
export default CreateComponent;