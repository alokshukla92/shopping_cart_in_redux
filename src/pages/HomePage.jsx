import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/cartSlice';
import Loader from '../components/utils/Loader';
import ProductList from '../components/product/ProductList';

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

    if (status === 'loading') return <Loader />;
    if (status === 'failed') return <p>Error: {error}</p>;

    return (
        <div className='container'>
            <ProductList products={products} />
        </div>
    );
}

export default HomePage