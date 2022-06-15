import { Link } from "react-router-dom";
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import React from "react";

export default function Spots(props) {
    
    
    return (
    //   { props.spot.length ?
        <main>
        <nav>
            <Link to="/spots/new">
                New Skate Spot
            </Link>
            <UserLogOut setUserInState={props.setUserInState}/>
        </nav>
        <div className="spot">
                {/* <p className="name">{props.spot.name}</p>
                <p className="description">{props.spot.description}</p>
                <p className="address">{props.spot.address}</p>
                <p className="user">{props.spot._id}</p> */}
        {/* :
            <span>No Spots Submitted Yet</span>
        } */}
        </div>
        </main>
    )
}