import React, {useEffect, useState} from 'react';
import {commerce} from './lib/commerce'
import {Cart, Navbar, Products} from "./components";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () =>
        setProducts((await commerce.products.list()).data);

    const fetchCart = async () =>
        setCart(await commerce.cart.retrieve());

    const handleAddToCart = async (productId, quantity) =>
        setCart((await commerce.cart.add(productId, quantity)).cart);

    const handleUpdateCartQuantity = async (productId, quantity) =>
        setCart((await commerce.cart.update(productId, {quantity})).cart);

    const handleRemoveFromCart = async (productId) =>
        setCart(await commerce.cart.remove(productId));

    const handleEmptyCart = async () =>
        setCart(await commerce.cart.empty());

    useEffect(() => {
        // todo: better error handling
        fetchProducts().catch((error) => console.log(error));
        fetchCart().catch((error) => console.log(error));
    }, [])

    return (
        <>
            <Router>
                <Navbar totalItems={cart.total_items}/>
                <Routes>
                    <Route exact path="/" element={
                        <Products
                            products={products}
                            onAddToCart={handleAddToCart}
                        />
                    }/>
                    <Route exact path="/cart" element={
                        <Cart
                            cart={cart}
                            handleUpdateCartQuantity={handleUpdateCartQuantity}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                        />
                    }/>
                </Routes>
            </Router>
        </>
    )
}

export default App;
