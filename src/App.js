import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AuthProvider from './context/AuthProvider';
import UserLogin from './components/userlogin/UserLogin';
import ContactUs from './components/ContactUs/ContactUs';
import Error from './components/Error/Error';
import AboutUs from './components/AboutUs/AboutUs';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import OrderReview from './components/OrderReview/OrderReview';
import Shipping from './components/Shipping/Shipping';
import Admin from './components/Admin/Admin';
import AllProducts from './components/AllProducts/AllProducts';


function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/home" element={<Home />} />

            <Route path="/explore" element={<AllProducts />} />

            <Route path="/userlogin" element={<UserLogin />} />

            <Route path="/contact" element={<ContactUs />} />

            <Route path="/about" element={<AboutUs />} />

            <Route path="/orderReview/" element={
              <PrivateRoute><OrderReview /></PrivateRoute>} />

            <Route path="/shipping" element={
              <PrivateRoute><Shipping /></PrivateRoute>} />

            <Route path="/dashboard" element={
              <PrivateRoute><Admin /></PrivateRoute>} />
    

            <Route path="*" element={<Error />} />


          </Routes>

        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
