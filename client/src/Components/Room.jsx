import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const Room = () => {
    const {id} = useParams()
     
      const [data, setData] = useState([])
      const navigate = useNavigate()
      
      useEffect(()=> {
        axios.get('http://localhost:8080/api/rooms')
        .then(res => {
            console.log(res);
          setData(res.data);
        })
        .catch(err => console.log(err));
      }, [])
   
    const handleDelete = (id) => {
        axios.delete('http://localhost:8080/api/rooms/'+id)
        .then(res => {
            console.log(res)
            navigate('/')
        }).catch(err => console.log(err))
    }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success btn-sm">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Room Number</th>
              <th>Type</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
                data.map((room, index) => {
                    return <tr key={index}>
                        <td>{room.roomnumber}</td>
                        <td>{room.type}</td>
                        <td>{room.price}</td>
                        <td>
                            <Link to={`/edit/${room._id}`} className="btn btn-sm btn-success me-2">Update</Link>
                            <button onClick={() => handleDelete(room._id)} className="btn btn-sm btn-danger">Delete</button>
                        </td>
                    </tr>
                })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Room