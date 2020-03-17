import React from 'react'

const TaskForm = (props) =>{
    const {changeForm, handleSubmit, formState} = props;
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    Title:
                    <input type="text" name="title" value={formState.title} onChange={(e) =>changeForm(e)} />
                </p>
                <p>
                    Price:
                    <input type="number" name="price" value={formState.price} onChange={(e) => changeForm(e)} />
                </p>
                <p>
                    Description:
                    <input type="text" name="description" value={formState.description} onChange={(e) => changeForm(e)} />
                </p>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default TaskForm;