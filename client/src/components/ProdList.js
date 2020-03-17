import React, {useEffect, useContext} from 'react'
import axios from 'axios'
import TaskContext from '../contexts/TaskContext'

import ListItem from './ListItem'

const ProdList = (props) =>{
    const {listState, setListState, submitState} = useContext(TaskContext)

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setListState(res.data)
            })
            .catch(err => console.log('ERR: ', err))
    }, [submitState])

    return (listState.length === 0) ? null :
    listState.map((item, i)=> (
        <ListItem key={i} item={item}  />
    ))
}
export default ProdList;