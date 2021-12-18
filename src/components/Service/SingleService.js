import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleService.css';

const SingleService = (props) => {
    const { name, img, description, price } = props.service || {};
    console.log('single service',props);
    return (
        <>
            <div className="home-service">
                <div >
                    <img src={img} alt=" " />
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <h2>Price: ${price} </h2>
                    <div>
                        
                            <Button className="btn-sm" onClick={() => props.handleAddToCart(props.service)}>Purchase</Button>
                        
                    </div>
                </div>
            </div>

        </>
    );
};

export default SingleService;