import React from 'react';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import { removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [cart, setCart] = useCart();
    console.log('orderReview page', cart);
    const history = useHistory();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handleProceedToShipping = () => {
        history.push('/shipping');
    }
   
    return (
        <div className="container">
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