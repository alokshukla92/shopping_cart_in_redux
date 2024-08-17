import React from 'react';
import { addItem } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductList = ({ products }) => {
    const dispatch = useDispatch();
    const handleAddToCart = (item) => {
      dispatch(addItem({ ...item, qty: 1 }));
      toast.success('Item Added to Cart!', {
        position: "top-center",
        autoClose: 1000
        });
    }

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="font-manrope font-bold text-3xl text-black mb-8 text-center">Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                    {products.map(item => (
                        <div
                            key={item.id}
                            className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto border border-gray-200 shadow-lg shadow-gray-800"
                        >
                            <img
                                className="rounded-t-3xl border-b border-gray-200"
                                src={item.image}
                                alt={item.title}
                            />
                            <div
                                className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-b-3xl shadow-lg shadow-gray-800 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-indigo-600 border border-gray-200"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h6 className="font-semibold text-base leading-7 text-black">{item.title}</h6>
                                    <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">{`$${item.price}`}</h6>
                                </div>
                                <p className="text-xs leading-5 text-gray-500">{item.category}</p>
                            </div>
                            <button
                                onClick={() => {handleAddToCart(item)}}
                                className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg shadow-gray-800 hover:bg-gray-100 border border-gray-300"
                            >
                                <svg
                                    className="w-6 h-6 text-gray-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l1.5-6H6L5.5 6H4m0 0h0a1 1 0 01-.9-1.4L4.6 3M7 13a2 2 0 004 0M11 13a2 2 0 004 0M7 21h10a2 2 0 002-2H5a2 2 0 002 2z"
                                    />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductList;
