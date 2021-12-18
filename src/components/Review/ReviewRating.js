import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './ReviewRating.css';

const ReviewRating = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = (data) => {
        fetch("https://immense-lowlands-25599.herokuapp.com/review", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Review added successfully');
                reset();
            });
        // console.log(data);
    };

    return (
        <div>
            <section className="" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 order-2 order-lg-1">

                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Give your Review</p>

                            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                                <input defaultValue={user.displayName} {...register("name")} />
                                <input placeholder="Image Link" defaultValue="" {...register("img")} />
                                <input placeholder="Rating (0-5)" defaultValue="" {...register("star")} />
                                <input placeholder="Description" defaultValue="" {...register("description")} />

                                <input type="submit" />
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReviewRating;