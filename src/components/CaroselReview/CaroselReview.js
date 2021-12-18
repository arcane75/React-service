import React, { useEffect, useState } from "react";
import './CaroselReviews.css';
import Rating from 'react-rating';
import Carousel from 'react-material-ui-carousel'
import { CardMedia } from '@mui/material'
import reviewImg from '../../images/review.jpg';
import demo from '../../images/demo.png';
const CaroselReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://immense-lowlands-25599.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <Carousel>
            {
                reviews.map((review) =>
                    <div className='container'>
                        <div className="my-5 review-text">
                            <h2>Clients With
                                Reason To Smile <i className="far fa-smile smile"></i></h2>
                        </div>

                        <div className='review-container row p-2'>
                            <div className='single-review col-md-6 col-sm-12' >
                                <CardMedia
                                    component="img"
                                    style={{ width: '150px', height: '150px', margin: 'auto' }}
                                    image={review.img || demo}
                                    alt="User Avatar"
                                />
                                <h3>{review.name}</h3>
                                <Rating
                                    initialRating={review.star}
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol="fas fa-star icon-color text-warning"
                                    readonly>
                                </Rating>

                                <p>{review.description}</p>
                            </div>
                            <div className='col-md-6 col-sm-12'>
                                <img className='img-fluid' src={reviewImg} alt="" />
                            </div>
                        </div>
                    </div>
                )
            }
        </Carousel>
    );

};

export default CaroselReview;
