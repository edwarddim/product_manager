import React, {useContext} from 'react';
import TaskContext from '../contexts/TaskContext'
import CreateComponent from './CreateComponent'
import ProdList from './ProdList'

const Home = () => {
    const {changeForm, handleSubmit, formState} = useContext(TaskContext)
    return(
        <div>
            <CreateComponent changeForm={changeForm} handleSubmit={handleSubmit} formState={formState} />
            <table className="table">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Desscription</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <ProdList />
                </tbody>
            </table>
        </div>
    )
}
export default Home;