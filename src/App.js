import React, {useEffect, useState} from 'react';
import {commerce} from './lib/commerce'
import {Navbar, Products, Cart} from "./components";

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
        <div>
            <Navbar totalItems={cart.total_items}/>
            {/*<Products products={products} onAddToCart={handleAddToCart}/>*/}
            <Cart cart={cart}/>
        </div>
    )
}

export default App;
