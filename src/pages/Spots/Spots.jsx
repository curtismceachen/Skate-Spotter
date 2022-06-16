import { Link } from "react-router-dom";
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import React from "react";
import './Spots.css';

export default function Spots(props) {
    
    
    return (
        <main>
        <nav>
            <Link to="/spots/new">
                New Skate Spot
            </Link>
            <UserLogOut setUserInState={props.setUserInState}/>
        </nav>
        <div className="spot">
            {/* {props.spots.map((s) => (
            <div>
                <p>{s.name}</p>
                <p>{s.description}</p>
                <p>{s.address}</p> */}
            {/* </div> */}
            {/* ))} */}
            {/* )} */}
                {/* <p className="user">{props.spot._id}</p> */}
        </div>
        </main>
    )
}