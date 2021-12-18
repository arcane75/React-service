import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import AllProduct from '../AllProduct/AllProduct';
import { addToDb } from '../../utilities/fakedb';
import useCart from '../../hooks/useCart';
import Brand from '../Brand/Brand';
const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [cart, setCart] = useCart();

    useEffect(() => {
        fetch("https://immense-lowlands-25599.herokuapp.com/explore")
            .then(res => res.json())
            .then(data => setAllProducts(data));
    }, [])

    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists && cart.length > 1) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);
    }

    return (
        <div>
            <Brand></Brand>
            <div className="home-service-container">
                {allProducts.length === 0 ? <Spinner animation="border" variant="primary" /> :
                    allProducts.map(allProduct =>
                        <AllProduct
                            key={allProduct._id}
                            allProduct={allProduct}
                            handleAddToCart={handleAddToCart}
                        >
                        </AllProduct>
                    )
                }
            </div>
        </div>
    );
};

export default AllProducts;