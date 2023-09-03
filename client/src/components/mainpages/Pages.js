import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import OrderHistory from './history/OrderHistory'
import OrderDetails from './history/OrderDetails'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'
import News from './blogs/News'
import Home from './Home/Home'
import Aboutpage from './about/About'

import {GlobalState} from '../../GlobalState'
import BlogComponent from './newBlog/AllBlogs'
import BlogDetail from './newBlog/BlogDetail'

// import AboutPage from './about/About'



function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <>
        <Switch>
            <Route path="/" exact component={Home} />

            {/* <Route path="/News" exact component={News} /> */}
            <Route path="/BlogComponent" exact component={BlogComponent} />
            {/* <Route path="/BlogDetail" exact component={BlogDetail} /> */}
            <Route path="/blog/:id" component={BlogDetail} />

            

            <Route path="/Shop" exact component={Products} />
            <Route path="/detail/:id" exact component={DetailProduct} />

            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />

            <Route path="/category" exact component={isAdmin ? Categories : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />

            <Route path="/history" exact component={isLogged ? OrderHistory : NotFound} />
            <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound} />

            <Route path="/cart" exact component={Cart} />

            <Route path="/About" exact component={Aboutpage} />


            <Route path="*" exact component={NotFound} />
        </Switch>
        </>
    )
}

export default Pages
