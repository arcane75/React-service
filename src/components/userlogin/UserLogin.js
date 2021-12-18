import { Alert, CircularProgress } from "@mui/material";
import { useState, React } from "react";
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const UserLogin = () => {
    const [loginData, setLoginData] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState('');

    const { user,
        authError,
        signInUsingGoogle,
        isLoading,
        registerNewUser,
        processLogin } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history)
    }
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        registerNewUser(loginData.email, loginData.password, loginData.name, history);
        processLogin(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <section className="" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Please {isLogin ? 'Login' : 'Register'} </p>

                                        <form onSubmit={handleLoginSubmit} className="mx-1 mx-md-4">

                                            {
                                                isLogin ?
                                                    <div>
                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <input type="email" id="form3Example3c" className="form-control" name='email' onChange={handleOnChange} placeholder="Your Email" required />

                                                            </div>
                                                        </div>

                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <input type="password" name="password" id="form3Example4c" className="form-control" onChange={handleOnChange} placeholder="Password" />

                                                            </div>
                                                        </div>
                                                        {isLoading && <CircularProgress />}
                                                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                                                        {authError && <Alert severity="error">{authError}</Alert>}
                                                    </div>

                                                    :
                                                    //...................Register Part ...................
                                                    //....................................................//
                                                    <div>
                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <input type="text" onBlur={handleOnBlur} className="form-control" name="name" id="inputName" placeholder="Your Name" />
                                                            </div>
                                                        </div>

                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <input type="email" id="form3Example3c" className="form-control" name="email" onBlur={handleOnBlur} placeholder="Your Email" required />

                                                            </div>
                                                        </div>

                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <input type="password" name="password" id="form3Example4c" className="form-control" onBlur={handleOnBlur} placeholder="Password" />

                                                            </div>
                                                        </div>
                                                        {isLoading && <CircularProgress />}
                                                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                                                        {authError && <Alert severity="error">{authError}</Alert>}
                                                    </div>
                                            }

                                            <div className="row mb-3">
                                                <div className="col-sm-10 offset-sm-2">
                                                    <div className="form-check">
                                                        <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                                        <label className="form-check-label" htmlFor="gridCheck1">
                                                            Already Registered?
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="row mb-3 text-danger">{error}</div>


                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg"> {isLogin ? 'Login' : 'Register'}</button>
                                            </div>

                                            <div className="divider d-flex align-items-center my-4">
                                                <p className="text-center fw-bold mx-3 mb-0">----------------- Or -------------------</p>
                                            </div>

                                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                                <p className="lead fw-normal mb-0 me-3">Sign {isLogin ? 'in' : 'up'} with</p>
                                                <button type="button" className="btn btn-primary " onClick={handleGoogleSignIn} >
                                                    <i className="fab fa-google"></i> Google
                                                </button>

                                            </div>

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
    );
};

export default UserLogin;

