import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateRoom = () => {
    const [roomnumber, setRoomnumber] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
 
    const navigate = useNavigate();
 
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/rooms', {roomnumber, type, price})
        .then(res => {
            console.log(res);
            navigate('/');
        })
        .catch(err => console.log(err));
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Add Room</h2>
                    <div className="mb-2">
                        <label htmlFor="roomNumber">Room Number</label>
                        <input
                            type="text"
                            id="roomNumber"
                            placeholder="A34"
                            className="form-control"
                            value={roomnumber}
                            onChange={(e) => setRoomnumber(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="type">Type</label>
                        <input
                            type="text"
                            id="type"
                            placeholder="Standard"
                            className="form-control"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            id="price"
                            placeholder="9000"
                            className="form-control"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CreateRoom;
