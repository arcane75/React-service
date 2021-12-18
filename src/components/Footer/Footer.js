import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import logo from '../../images/logo2.png';
const Footer = () => {
  return (

    <div className=" mt-5">

      <footer className="text-white text-center text-lg-start bg-dark">

        <div className="container p-4">
          {/* <!--Grid row--> */}
          <div className="row mt-4">
            {/* <!--Grid column--> */}
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">About company</h5>

              <p>
                We are offering the world's best X-Ray Machines and RVG sensors. By using those updated products your work efficiency goes to the next level.
              </p>

              <p>
                Rextr X Runyes Portable X-Ray Vatech RVG Sensor Eighteeth Nanopix
              </p>

              <div className="mt-4">
                {/* <!-- Facebook --> */}
                <Link type="button" style={{ hoverBackground: 'rgba(18, 102, 241, 0.5)' }} className="btn btn-floating btn-light btn-lg "><i className="fab fa-facebook-f"></i></Link>
                {/* <!-- Dribbble --> */}
                <Link type="button" className="btn btn-floating btn-light btn-lg"><i className="fab fa-dribbble"></i></Link>
                {/* <!-- Twitter --> */}
                <Link type="button" className="btn btn-floating btn-light btn-lg"><i className="fab fa-twitter"></i></Link>
                {/* <!-- Google + --> */}
                <Link type="button" className="btn btn-floating btn-light btn-lg"><i className="fab fa-google-plus-g"></i></Link>
                {/* <!-- Linkedin --> */}
              </div>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <img className='img-fluid mb-3' style={{ height: '60px' }} src={logo} alt='' />

              <ul className="fa-ul" style={{ marginLeft: '1.65em' }}>
                <li className="mb-3">
                  <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Warsaw, 00-967, Poland</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">contact@example.com</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 48 234 567 88</span>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Opening hours</h5>

              <table className="table text-center text-white">
                <tbody className="fw-normal">
                  <tr>
                    <td>Mon - Thu:</td>
                    <td>8am - 9pm</td>
                  </tr>
                  <tr>
                    <td>Fri - Sat:</td>
                    <td>8am - 1am</td>
                  </tr>
                  <tr>
                    <td>Sunday:</td>
                    <td>9am - 10pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <!--Grid column--> */}
          </div>
          {/* <!--Grid row--> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-3" style={{ backgroundColor: ' rgba(0, 0, 0, 0.2)' }}>
          © 2021 Copyright: Arcane CSS
        </div>
        {/* <!-- Copyright --> */}
      </footer>

    </div>

  );
};

export default Footer;