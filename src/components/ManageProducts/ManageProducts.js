import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const ManageProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [control, setConrol] = useState(false);

    useEffect(() => {
        fetch("https://immense-lowlands-25599.herokuapp.com/explore")
            .then((res) => res.json())
            .then((data) => setAllProducts(data));
    }, [control]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`https://immense-lowlands-25599.herokuapp.com/deleteProduct/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        setConrol(!control);
                    } else {
                        setConrol(false);
                    }
                });
        }
    }
    return (
        <div className="container table-responsive">
            <div className="order-text">
                <h1>Total Products: {allProducts?.length}</h1>
            </div>
            <Table striped bordered hover className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {allProducts?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{pd.name}</td>
                            <td><img style={{height:'40px', width:'40px'}} src={pd.img} alt='' /></td>
                            <td>{pd.price}</td>
                            <td>
                                <button
                                    onClick={() => handleDelete(pd._id)}
                                    className="btn bg-danger p-2"
                                >
                                    Delete
                                </button></td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageProducts;