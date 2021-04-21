import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../components/ProductList'
import AddProductForm from '../components/AddProductForm'

const Routing = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/products/add' component={AddProductForm} />
        </Switch>
    );
}

export default Routing;