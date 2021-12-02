import React, {useEffect, useState} from 'react';
import {commerce} from './lib/commerce'
import {Cart, Navbar, Products} from "./components";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => setProducts((await commerce.products.list()).data)

    const fetchCart = async () => setCart(await commerce.cart.retrieve())

    const handleAddToCart = async (productId, quantity) =>
        setCart((await commerce.cart.add(productId, quantity)).cart)

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, [])

    console.log(cart);

    return (
        <>
            <Router>
                <Navbar totalItems={cart.total_items}/>
                <Routes>
                    <Route exact path="/" element={<Products products={products} onAddToCart={handleAddToCart}/>}/>
                    <Route exact path="/cart" element={<Cart cart={cart}/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App;
