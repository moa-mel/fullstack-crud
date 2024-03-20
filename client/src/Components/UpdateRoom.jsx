
import React,{ useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateRoom = () => {
  const {id} = useParams();
  
  const [roomnumber, setRoomnumber] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
   
  useEffect(()=> {
      const fetchData = async() => {
          try {
              const response = await axios.get("http://localhost:8080/api/rooms/"+id);
              console.log(response);
              setRoomnumber(response.data.roomnumber);
              setType(response.data.type);
              setPrice(response.data.price);
          } catch(err) {
              console.log(err);
          }
      };
      fetchData();
  }, [id]);
   
  const navigate = useNavigate();

  const handleUpdate = (e) => {
      e.preventDefault();
      axios.put('http://localhost:8080/api/rooms/'+id, {roomnumber, type, price})
      .then(res => {
          console.log(res);
          navigate('/');
      })
      .catch(err => console.log(err));
  };


return (
  <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
      <form onSubmit={handleUpdate}>
        <h2>Update Room</h2>
        <div className="mb-2">
          <label htmlFor="">Room Number</label>
          <input
            type="text"
            placeholder="A34"
            className="form-control"
            value={roomnumber}
            onChange={(e) => setRoomnumber(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="">Type</label>
          <input
            type="text"
            placeholder="Standard"
            className="form-control"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="">Price</label>
          <input
            type="number"
            placeholder="9000"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button className="btn btn-success">Update</button>
      </form>
    </div>
  </div>
);
}

export default UpdateRoom;
