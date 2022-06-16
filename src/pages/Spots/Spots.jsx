import { Link } from "react-router-dom";
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import React, {useState} from "react";
import './Spots.css';
import { set } from "mongoose";
import UpdateSpot from '../UpdateSpot/UpdateSpot';

export default function Spots(props) {
    const [isActive, setActive] = useState(false);
    
    const handleEdit = (id) => {
        // alert(`you just clicked on ${id}`)
        setActive(!isActive);
    }
    
    return (
        <main>
        <nav className="nav">
            <Link to="/spots/new">
                New Skate Spot
            </Link>
            <UserLogOut setUserInState={props.setUserInState}/>
        </nav>
        <div className="spot">
            {props.spots.map((s) => (
            <div>
                <div>{s.name}</div>
                <div>{s.description}</div>
                <div>{s.address}</div>
                <button onClick={() => handleEdit(s._id)}>Edit</button>
                
                <div className={isActive ? "hidden" : null}>
                    <UpdateSpot spot={s} />
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