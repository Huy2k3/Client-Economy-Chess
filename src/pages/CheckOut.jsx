import React, { useContext } from 'react';
import "../styles/checkout.css";
import { CartContext } from '../context/CartContext';

const CheckOut = () => {
  const { state } = useContext(CartContext);
  const { items } = state;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };

  const calculateTotal = () => {
    return items.reduce((acc, item) => {
      const price = item.discount ? item.price - (item.price * item.discount / 100) : item.price;
      return acc + price * item.quantity;
    }, 0);
  };

  return (
    <div className="checkout-container mt-24">
      <div className="checkout-form">
        {/* Express Checkout Options */}
        <div className="express-checkout">
          <button className="checkout-button shop-pay">Shop Pay</button>
          <button className="checkout-button paypal">PayPal</button>
          <button className="checkout-button google-pay">Google Pay</button>
        </div>

        {/* OR Separator */}
        <div role="separator" className="separator">
          <div className="line"></div>
          <p className="separator-text"><span className="or-text">OR</span></p>
          <div className='line'></div>
        </div>

        {/* Checkout Form */}
        <form onSubmit={() => alert("Order placed!")}>
          <div className="contact-section">
            <h2>Contact</h2>
            <input
              className='border-1 border-solid rounded-md'
              type="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="payment-section">
            <h2>Payment</h2>
            <p>Your order is free. No payment is required.</p>
          </div>

          <div className="billing-address">
            <h2>Billing address</h2>
            <div className="address-fields">
              <input className='border-1 border-solid rounded-md' type="text" placeholder="First name" name="firstName" required />
              <input className='border-1 border-solid rounded-md' type="text" placeholder="Last name" name="lastName" required />
              <input className='border-1 border-solid rounded-md' type="text" placeholder="Address" name="address" required />
              <input className='border-1 border-solid rounded-md' type="text" placeholder="City" name="city" required />
              <input className='border-1 border-solid rounded-md' type="text" placeholder="ZIP code" name="zip" required />
              <input className='border-1 border-solid rounded-md' type="text" placeholder="Phone (optional)" name="phone" />
            </div>
          </div>

          <button type="submit" className="complete-order-button">Complete order</button>
        </form>
      </div>

      {/* Order Summary */}
      <div className="order-summary">
        <h2>Order Summary</h2>
        {items.length > 0 ? (
          items.map((item, index) => (
            <div className="item" key={index}>
              <span>{item.name}</span>
              <span>{formatCurrency(item.price)} x {item.quantity}</span>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
        <input className='w-52' type="text" placeholder="Discount code or gift card" />
        <button className="apply-button">Apply</button>
        <div className="total">
          <span>Total</span>
          <span>USD {formatCurrency(calculateTotal())}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
