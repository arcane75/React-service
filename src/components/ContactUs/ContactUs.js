import React from 'react';
import "./ContactUs.css";

const ContactUs = () => {
    return (
        <div>

            <div className="container contact">
                <div className="row">
                    <div className="col-md-3 contact-img">
                        <div className="contact-info">
                            <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="" />
                            <h3>Contact Us</h3>
                            <br />
                            <h4>We would love to hear from you !</h4>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="contact-form">
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control mb-2" id="fname" placeholder="Enter First Name" name="fname" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control mb-2" id="lname" placeholder="Enter Last Name" name="lname" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="email" className="form-control mb-2" id="email" placeholder="Enter email" name="email" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <textarea className="form-control" placeholder="Comment:" rows="5" id="comment"></textarea>
                                </div>
                            </div>
                            <br />
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="submit" className="btn btn-default">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;