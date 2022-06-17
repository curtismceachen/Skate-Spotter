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
        <nav className="nav">
            <Link to="/spots/new">
                New Skate Spot
            </Link>
            <UserLogOut setUserInState={props.setUserInState}/>
        </nav>
        <div className="spot">
            {spots.map((s) => (
            <div>
                <div><span className="label">Name:</span> {s.name}</div>
                <div><span className="label">Description:</span> {s.description}</div>
                <div><span className="label">Location:</span> {s.address}</div>
                <button className="button" onClick={() => handleEdit(s._id)}>Edit</button>
                <button className="button" onClick={() => handleDelete(s._id)}>Delete</button>
                <br></br>
                <div className={!isActive[s._id] ? "hidden" : null}>
                    <UpdateSpot spot={s} refresh={getSpots}/>
                </div>
                <br></br>
            </div>
            ))}
            {/* )} */}
                {/* <p className="user">{props.spot._id}</p> */}
        </div>
        </main>
    )
}