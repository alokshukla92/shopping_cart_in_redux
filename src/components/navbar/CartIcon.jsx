import React from 'react';
import { useSelector } from 'react-redux';

const CartIcon = ({ onClick }) => {
  const cart_count = useSelector((state) => state.cart.cart_qty);

  return (
    <button 
      className="relative inline-flex items-center justify-center" 
      onClick={onClick}
      aria-label="Cart"
    >
      {/* Cart Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>

      {/* Count Badge */}
      <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-red-500 rounded-full">
        {cart_count}
      </span>
    </button>
  );
};

export default CartIcon;
