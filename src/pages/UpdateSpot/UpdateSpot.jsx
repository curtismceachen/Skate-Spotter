import { Component } from 'react'
import { Link } from 'react-router-dom'
import UserLogOut from '../../components/UserLogOut/UserLogOut'
import React from 'react'
// import './NewSpot.css';

export default class UpdateSpot extends Component {
    // state = {
    //     name: this.props.spot.name,
    //     description: this.props.description,
    //     address: this.props.address,
    // }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = async () => {
        let body = {
            name: this.props.spot.name,
            description: this.props.spot.description,
            address: this.props.spot.address
        }
        let options = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        await fetch("/api", options)
            .then(res => res.json())
    }

    render() {
        return (
            <main>
            {/* <nav className="nav">
            <Link to="/spots">
                View Skate Spots
            </Link>
            <UserLogOut setUserInState={this.props.setUserInState}/>
            </nav> */}
            <div>
                <label className="input">Name:
                <input type="text" name="name" onChange={this.handleChange} value={this.props.spot.name}></input>
                </label><br></br>
                <label className="input">Description: 
                <textarea type="text" name="description" onChange={this.handleChange} value={this.props.spot.description}></textarea>
                </label><br></br>
                <label className="input">Address: 
                <input type="text" name="address" onChange={this.handleChange} value={this.props.spot.address}></input>
                </label>
                <br/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
            </main>
        )
    }
}
