import React from 'react';
import { useParams } from 'react-router-dom';

// Mock product data
const productData = {
  1: {
    id: 1,
    name: 'Throwback Hip Bag',
    description: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    price: '$90.00',
    image: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    category: 'Accessories',
  },
  2: {
    id: 2,
    name: 'Medium Stuff Satchel',
    description: 'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    price: '$32.00',
    image: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    category: 'Bags',
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData[id];

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="lg:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="lg:w-1/2 p-6">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-2 text-lg text-gray-700">{product.description}</p>
            <p className="mt-4 text-xl font-semibold text-indigo-600">{product.price}</p>
            <p className="mt-2 text-sm text-gray-500">Category: {product.category}</p>
            <div className="mt-6">
              <button className="px-6 py-3 bg-indigo-600 text-white font-medium text-lg rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
