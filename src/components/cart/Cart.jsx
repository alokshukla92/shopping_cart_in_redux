import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem'
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
        <CartItem />
        </div>
    )
}

export default Cart