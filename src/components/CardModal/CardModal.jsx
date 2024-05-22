import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartModal = ({ isOpen, onClose }) => {

  const { state, removeFromCart, updateQuantity } = useContext(CartContext);
  const { items } = state;

  if (!isOpen) return null;
  const handleClose = () => {
    onClose(); // Close the modal
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  };

  const calculateSubtotal = () => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };
  return (
    <>
      <div className="fixed inset-0 z-10 flex items-center justify-end bg-black bg-opacity-50">
        <div className="bg-white h-[880px] absolute top-5 right-3 p-6 rounded-lg"> {/* Increased width and height */}
          <div className="flex justify-between items-center border-b pb-3">
            <h3 className="text-lg font-semibold">Cart</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <i className="ri-close-line"></i>
            </button>
          </div>
          <div className="py-6">
            <p>This order qualifies for FREE shipping in the USA.</p>
            {/* Cart items */}
            {items.length > 0 ? (
            items.map((item) => (
              <div key={item.id} className="border-t border-b py-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src={item.image || "https://via.placeholder.com/80"}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-red-600">{formatCurrency(item.price)}</p>
                      
                    </div>
                  </div>
                  <div className="text-right">
                    <input
                      type="number"
                      value={item.quantity}
                      className="w-12 border text-center"
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    />
                    <button
                      className="text-red-600 mt-2 block"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
          </div>
          <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
            <div className="text-lg font-semibold">
              <p>Total</p>
              <p className="text-2xl">{formatCurrency(calculateSubtotal())}</p>
      
            </div>
            <div className="mt-4 md:mt-0 flex items-center">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2" onClick={handleClose}>
                <Link className='no-underline text-blue-950' to='/cart'>View cart</Link>
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                <Link className='no-underline text-blue-950' to='/checkouts'>Checkout</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Place your header component here */}
    </>
  );
};

export default CartModal;