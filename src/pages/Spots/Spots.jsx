import { Link } from "react-router-dom";
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import React, {useEffect, useState} from "react";
import './Spots.css';
import { set } from "mongoose";
import UpdateSpot from '../UpdateSpot/UpdateSpot';

export default function Spots(props) {
    const [isActive, setActive] = useState({});
    const [spots, setSpots] = useState([]);
    const handleEdit = (id) => {
        let temp = {...isActive}
        temp[id] = !temp[id]
        setActive(temp)
    }
    const handleDelete = async (id) => {
        let body = {}
        let options = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        await fetch(`api/spots/${id}`, options)
            .then(res => res.json())
            await getSpots()
    }

    let getSpots = async () => {
        await fetch("/api/spots")
          .then(res => res.json())
          .then(data => setSpots(data))
      }

    useEffect(() => {
        
        (async() => {
            await getSpots()
        })()
    },[])
    
    
    return (
        <main>
        <nav className="navbar navbar-expand-lg navbar-light shadow p-3 mb-5 bg-white rounded fixed-top justify-content-between">
            <div className="navbar-brand theme-font">SkateSpotter</div>
            <Link to="/spots/new">
                Add A Skate Spot
            </Link>
            <UserLogOut setUserInState={props.setUserInState}/>
        </nav>
        <div className="spot spot-background-image">
          <div className="spot">
            <h3 className="spots-title theme-font">Skate Spots</h3>
            {spots.map((s) => (
            <div className="card card-spacing">
              <div className="card-body">
                <h5 className="card-title"> {s.name}</h5>
                <div className="card-text"> {s.description}</div>
                <div><span className="label">Location: </span>{s.address}</div>
                <button className="btn btn-primary btn-sm update-button" onClick={() => handleEdit(s._id)}>Update</button>
                <button className="btn btn-danger btn-sm delete-button" onClick={() => handleDelete(s._id)}>Delete</button>
                <div className={!isActive[s._id] ? "hidden" : null}>
                    <UpdateSpot spot={s} refresh={getSpots}/>
                </div>
                <br></br>
              </div>
            </div>
            ))}
        </div>
        </div>
        </main>
    )
}