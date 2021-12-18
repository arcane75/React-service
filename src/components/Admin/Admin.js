
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import AboutUs from '../AboutUs/AboutUs';
import AddPackage from '../AddPackage/AddPackage';
import ContactUs from '../ContactUs/ContactUs';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrder from '../MyOrder/MyOrder';
import Pay from '../Pay/Pay';
import ReviewRating from '../Review/ReviewRating';
import './Admin.css';
const Admin = () => {
  const [control, setControl] = useState("addProducts");
  const { admin, logOut } = useAuth();

  return (
    <div className="admin-container">

      <div className="row admin-container">
        <div className="col-md-3 admin-side">
          <div className="admin-area p-1">
            <h1>Dashboard</h1>
            <div className="all-menu mt-5">
              {
                admin ?
                  <div>
                    <li
                      onClick={() => setControl("addProducts")}
                      className="admin-menu p-2"
                    >
                      <h3>Add Products </h3>
                    </li>

                    <li
                      onClick={() => setControl("manageAllOrder")}
                      className="admin-menu p-2"
                    >
                      <h3>Manage all Order</h3>
                    </li>

                    <li
                      onClick={() => setControl("makeAdmin")}
                      className="admin-menu p-2"
                    >
                      <h3>Make Admin </h3>
                    </li>


                    <li
                      onClick={() => setControl("manageProducts")}
                      className="admin-menu p-2"
                    >
                      <h3>Manage Products</h3>
                    </li>
                  </div>
                  :
                  <div>
                    <li
                      onClick={() => setControl("payment")}
                      className="admin-menu p-2"
                    >
                      <h3>Payment</h3>
                    </li>

                    <li
                      onClick={() => setControl("myOrder")}
                      className="admin-menu p-2"
                    >
                      <h3>My Order</h3>
                    </li>

                    <li
                      onClick={() => setControl("review")}
                      className="admin-menu p-2"
                    >
                      <h3>Review</h3>
                    </li>
                  </div>

              }

              <li
                onClick={() => setControl("about")}
                className="admin-menu p-2"
              >
                <h3>About Us</h3>
              </li>

              <li
                onClick={() => setControl("contact")}
                className="admin-menu p-2"
              >
                <h3>Contact</h3>
              </li>

              <li
                onClick={logOut}
                className="admin-menu p-2"
              >
                <h3>Logout</h3>
              </li>

            </div>
          </div>
        </div>
        <div className="col-md-9 text-center">
          {
            admin ?
              <div>
                {control === "addProducts" && <AddPackage></AddPackage>}
                {control === "manageAllOrder" && <ManageAllOrder></ManageAllOrder>}
                {control === "makeAdmin" && <MakeAdmin></MakeAdmin>}
                {control === "manageProducts" && <ManageProducts></ManageProducts>}
              </div>
              :
              <div>
                {control === "payment" && <Pay></Pay>}
                {control === "myOrder" && <MyOrder></MyOrder>}
                {control === "review" && <ReviewRating></ReviewRating>}
              </div>
          }

          {control === "about" && <AboutUs></AboutUs>}
          {control === "contact" && <ContactUs></ContactUs>}

        </div>
      </div>
    </div>
  );
};

export default Admin;