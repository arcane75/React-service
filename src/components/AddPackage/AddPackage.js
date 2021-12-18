import React from 'react';
import { useForm } from "react-hook-form";
import UserLogin from '../userlogin/UserLogin';

const AddPackage = () => {
    const { user } = UserLogin();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        data.email = user?.email;
        fetch("https://immense-lowlands-25599.herokuapp.com/addProduct", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('added successfully');
                reset();
            });
        // console.log(data);
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
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Please  Add Product</p>

                                            <form onSubmit={handleSubmit(onSubmit)} className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            {...register("key")}
                                                            placeholder="10 Digit Random Key"
                                                            className="p-2 m-2 w-100"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            {...register("name")}
                                                            placeholder="Product Name"
                                                            className="p-2 m-2 w-100"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-dollar-sign fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            {...register("price")}
                                                            placeholder="Product Price"
                                                            className="p-2 m-2 w-100"
                                                        />

                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-info-circle fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            {...register("description")}
                                                            placeholder="Description"
                                                            className="p-2 m-2 w-100"
                                                        />

                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-image fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            {...register("img", { required: true })}
                                                            placeholder="Image Link"
                                                            className="p-2 m-2 w-100"
                                                        />

                                                    </div>
                                                </div>

                                                {errors.exampleRequired && <span>This field is required</span>}

                                                <input type="submit" value="Include +" className="btn btn-warning  w-50" />


                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

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

export default AddPackage;