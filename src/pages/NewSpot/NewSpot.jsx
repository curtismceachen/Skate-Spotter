import { Component } from 'react'
import { Link } from 'react-router-dom'
import UserLogOut from '../../components/UserLogOut/UserLogOut'
import React from 'react'
import './NewSpot.css';

export default class NewSpot extends Component {
    state = {
        name: '',
        description: '',
        address: '',
    }
    
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value })
    }

    handleSubmit = async () => {
        let body = {
            name: this.state.name,
            description: this.state.description,
            address: this.state.address
        }
        let options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        await fetch("/api", options)
            // console.log("here here")
            .then(res => res.json())
            .then(() =>
                // this.setState({spot: data}))
                // // this.props.getSpots()
                this.setState({
                    name: "",
                    description: "",
                    address: "",
                    // spots: data
                })
            )
    }

    componentDidMount() {
        console.log(this.props.user)
        // if (!this.props.user) {
        //     window.location = '/login';
    }

    render() {
        return (
            <main>
            <nav className="nav">
            <Link to="/spots">
                View Skate Spots
            </Link>
            <UserLogOut setUserInState={this.props.setUserInState}/>
            </nav>
            <div>
                <label className="input">Name:
                <input type="text" name="name" onChange={this.handleChange} value={this.state.name}></input>
                </label><br></br>
                <label className="input">Description: 
                <textarea type="text" name="description" onChange={this.handleChange} value={this.state.description}></textarea>
                </label><br></br>
                <label className="input">Address: 
                <input type="text" name="address" onChange={this.handleChange} value={this.state.address}></input>
                </label>
                <br/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
            </main>
        )
    }
}