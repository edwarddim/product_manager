import React from 'react';
import { Link } from '@reach/router';

import DeleteButton from './DeleteButton'

const ListItem = (props) =>{
    const {item} = props;
    return(
        <tr>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
            <td>
                <Link to={"/products/"+item._id}>
                    Details
                </Link>
                |
                <Link to={"/products/"+item._id+"/edit"}>
                    Edit
                </Link>
                |
                <DeleteButton id={item._id} />
            </td>
        </tr>
    )
}
export default ListItem;