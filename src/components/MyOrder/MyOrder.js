import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import './MyOrder.css';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const [order, setOrder] = useState([]);
    const [control, setConrol] = useState(false);;

    useEffect(() => {
        fetch(`https://immense-lowlands-25599.herokuapp.com/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, [user?.email]);


    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`https://immense-lowlands-25599.herokuapp.com/deleteOrder/${id}`, {
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
                <h1 className=''>My Order : {order.length}</h1>
            </div>
            <br />
            <Table striped bordered hover className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Title</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Stutus</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {order?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{pd.product}</td>
                            <td>{pd.email}</td>
                            <td>{pd.address}</td>
                            <td> {pd.status}</td>
                            <td>
                                <button
                                    onClick={() => handleDelete(pd._id)}
                                    className="btn bg-warning p-2"
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

export default MyOrder;