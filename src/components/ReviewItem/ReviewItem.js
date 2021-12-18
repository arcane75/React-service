import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { name, price, quantity, key, img, description } = props.product;
    console.log('review',props);
    const { handleRemove } = props;
    return (
        <div className="product">
            <div className="row">
                <div className="col-md-7">
                    <img className="img-fluid my-5" src={img} alt="" />
                    <p className="description">{description}</p>
                </div>
                <div className="col-md-5 my-5 package-info ">
                    <h1 className=" text-warning"> Package Name</h1>
                    <h1 className="product-name my-2">{name}</h1>
                    <h3 className="my-3">Price: {price} $</h3>
                    <h4 className="my-3">Quantity: {quantity}</h4>
                    <button onClick={() => handleRemove(key)} className="btn btn-warning">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;