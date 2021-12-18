import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    console.log('Cart component',cart);
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const tax = (total) * 0.10;
    const grandTotal = total + tax;
    return (
        <div className='cart-info'>
            <h1 className='text-danger'>Order Details</h1>
            <p>-------------------------------</p>
            <h3 className='text-info'>Ordered Products: {totalQuantity}</h3>
            <br />
            <p>Total: {total.toFixed(2)} $</p>
            <p>Tax: {tax.toFixed(2)} $</p>
            <p>Grand Total: {grandTotal.toFixed(2)} $</p>
            <div className='button'>
                {props.children}
            </div>
        </div>
    );
};

export default Cart;