import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import { useHistory } from 'react-router-dom';
import './Shipping.css';

const Shipping = () => {

    const history = useHistory();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        data.status = 'pending';
        console.log(data);
        const savedCart = getStoredCart();
        data.order = savedCart;

        fetch('https://immense-lowlands-25599.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    clearTheCart();
                    reset();
                    history.push('/home');
                }
            })
    };
    return (
        <div>
            <section className="" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-sm-12 col-md-7 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Submit Your Information</p>

                                            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                                                <input defaultValue={user.displayName} {...register("name")} />

                                                <input defaultValue={user.email} {...register("email", { required: true })} />
                                                {errors.email && <span className="error">This field is required</span>}
                                                <input placeholder="Address" defaultValue="" {...register("address")} />
                                                <input placeholder="City" defaultValue="" {...register("city")} />
                                                <input placeholder="phone number" defaultValue="" {...register("phone")} />
                                                <input placeholder="Product Name" defaultValue="" {...register("product")} />

                                                <input type="submit" />
                                            </form>


                                        </div>
                                        <div className="col-sm-12 col-md-5 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" className="img-fluid" alt="" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Shipping;