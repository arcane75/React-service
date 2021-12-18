import React from 'react';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import { removeFromDb } from '../../utilities/fakedb';
import { useNavigate } from "react-router-dom";
import ReviewItem from '../ReviewItem/ReviewItem';
import Header from '../Header/Header';

const OrderReview = () => {
    const [cart, setCart] = useCart();
    console.log('orderReview page', cart);
    let navigate = useNavigate();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handleProceedToShipping = () => {
        navigate('/shipping');
    }
   
    return (
        <div className="container">
            <Header></Header>
           <div className="row">
           <div className="col-md-8">
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="col-md-4 my-5">
                <Cart cart={cart}>
                    <button onClick={handleProceedToShipping} className="btn btn-warning">Proceed to Shipping</button>
                </Cart>
            </div>
           </div>
            
        </div>
    );
};

export default OrderReview;