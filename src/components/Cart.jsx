import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Cart = ({ cartData, setCartData }) => {
  const handleRemove = (id) => {
    setCartData(cartData.filter((item) => item.id !== id));
    toast.error("Item removed from the cart")
  };

const handleCheckout = () => {
  setCartData([]);
  toast.error("All items are removed")
};

const totalPrice = cartData.reduce((total, item) => total + item.price, 0);


  if (cartData.length === 0) return <p className="text-center p-10 m-10 bg-gray-100 font-bold rounded-2xl text-gray-400 text-3xl">Cart is empty</p>;

  return (
    <div className="w-11/12 mx-auto my-5 space-y-4">
      {cartData.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center p-4 border rounded-xl bg-gray-100"
        >
          <div>
           <button className='btn w-30 h-30 rounded-full text-7xl'>{item.icon}</button>
            <h2 className="font-bold text-xl">{item.name}</h2>
            <p className="text-gray-500">${item.price}</p>
          </div>
          <button type='button'
            onClick={() => handleRemove(item.id)}
            className="btn bg-red-500 text-white rounded-xl px-4 py-2"
          >
            Remove
          </button>
        </div>
      ))}

<div className="text-right font-bold text-2xl my-4">
  Total: ${totalPrice}
</div>


<button type='button'
  onClick={handleCheckout}
  className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white w-full py-3 rounded-xl"
>
  Proceed to Checkout
</button>

    </div>
  );
};

export default Cart;