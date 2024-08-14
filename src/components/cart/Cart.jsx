import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
    const cart_items = useSelector((state) => state.cart.addedItems);    
    return (
        <div>
        {cart_items.map((product) => (
            <div key={product.id}>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            </div>
        ))}
        </div>
    )
}

export default Cart