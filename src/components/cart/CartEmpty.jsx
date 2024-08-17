import React from 'react';

export default function CartEmpty({ onClose }) {
  return (
    <div className="container">
        <div className="flex items-center justify-center h-64 bg-gray-100 p-6 rounded-md shadow-md">
      <div className="text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.6 2.3L7 6h10l1.4-1.7L19 3h2m-1 4H5l-.9 3.5L3 18h18l-1.1-7.5L17 7zM8 10h8m-8 4h8"
          />
        </svg>
        <h2 className="mt-4 text-lg font-medium text-gray-900">Your cart is empty</h2>
        <p className="mt-2 text-gray-600">Looks like you haven't added anything to your cart yet.</p>
        <button
            type="button"
            onClick={onClose}
            className="font-medium text-indigo-600 hover:text-indigo-500"
        >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
        </button>
      </div>
    </div>
    </div>
    
  );
}
