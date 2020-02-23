import React from 'react'
import { Router } from '@reach/router';

import Create from './Create'
import ProdList from './ProdList'
import Detail from './Detail'
import Update from './Update'

const ProductManager = (props) => {
    return(
        <Router>
            <Create path="/" />
            <ProdList path="/products" />
            <Detail path="/products/:id" />
            <Update path="/products/:id/edit" />
        </Router>
    )
}
export default ProductManager;