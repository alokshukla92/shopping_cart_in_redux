import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/cartSlice';
import Loader from '../components/utils/Loader';
import ProductList from '../components/product/ProductList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer
                className="fixed bottom-4 right-4" // Customize container position
                toastClassName="bg-gray-800 text-white border border-gray-700 rounded-lg p-4"
                bodyClassName="text-lg"
                progressClassName="bg-indigo-600"
            />
            <ProductList products={products} />
        </div>
    );
}

export default HomePage