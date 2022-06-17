import { Component } from 'react'
import { Link } from 'react-router-dom'
import UserLogOut from '../../components/UserLogOut/UserLogOut'
import React from 'react'
// import './NewSpot.css';
import './UpdateSpot.css'

export default class UpdateSpot extends Component {
    state = {
        name: "",
        description: "",
        address: "",
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = async () => {
        console.log(this.props.spot)
        let body = {
            name: this.state.name,
            description: this.state.description,
            address: this.state.address
        }
        let options = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        await fetch(`/api/spots/${this.props.spot._id}`, options)
            .then(res => res.json())
            await this.props.refresh()
    }

    componentDidMount() {
        this.setState({
            name: this.props.spot.name,
            description: this.props.spot.description,
            address: this.props.spot.address,
        })
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
                <label className="inputUD"><span className="label">Name:</span>
                <input type="text" name="name" onChange={this.handleChange} value={this.state.name}></input>
                </label><br></br>
                <label className="inputUD"><span className="label">Description:</span>
                <textarea type="text" name="description" onChange={this.handleChange} value={this.state.description}></textarea>
                </label><br></br>
                <label className="inputUD"><span className="label">Address:</span> 
                <input type="text" name="address" onChange={this.handleChange} value={this.state.address}></input>
                </label>
                <br/>
                <div><button className="button" onClick={this.handleSubmit}>Submit</button></div>
            </div>
            </main>
        )
    }
}
