import { useDispatch } from 'react-redux';
import { removeItem } from '../../redux/slices/cartSlice'; 

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CartItem({ product }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(product));
    toast.info('Item Removed!', {
      position: "top-center",
      autoClose: 1000
      });
  };

  return (
    <li key={product.id} className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          alt={product.title}
          src={product.image}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{product.title}</h3>
            <p className="ml-4">${product.price.toFixed(2)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {product.qty}</p>
          <button
            type="button"
            onClick={handleRemove}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}
