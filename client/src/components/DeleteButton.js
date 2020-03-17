import React, {useContext} from 'react'
import TaskContext from '../contexts/TaskContext'

const DeleteButton = (props) =>{
    const {id} = props;
    const {deleteProduct} = useContext(TaskContext)
    return(
        <button className="btn btn-danger" onClick={() => deleteProduct(id) } >Delete</button>
    )
}
export default DeleteButton