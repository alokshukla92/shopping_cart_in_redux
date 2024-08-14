import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, fetchProducts } from '../redux/slices/cartSlice';
import { increment } from '../redux/slices/cartCounterSlice';

const HomePage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.items);
    const status = useSelector((state) => state.cart.status);
    const error = useSelector((state) => state.cart.error);
    
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        dispatch(increment())
    };

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

    return (
        <div>
        {products.map((product) => (
            <div key={product.id}>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
        ))}
        </div>
    );
}

export default HomePage