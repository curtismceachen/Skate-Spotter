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
            .then(res => res.json())
            .then(() =>
                this.setState({
                    name: "",
                    description: "",
                    address: "",
                })
            )
    }


    render() {
        return (
          <main>
            <nav className="navbar navbar-expand-lg navbar-light shadow p-3 mb-5 bg-white rounded justify-content-between">
              <div className="navbar-brand theme-font">SkateSpotter</div>
              <ul className="nav navbar-nav mr-auto">
                <li className="nav-item">
              <Link to="/spots">
                View Skate Spots
              </Link>
                </li>
              </ul>
              <UserLogOut setUserInState={this.props.setUserInState}/>
            </nav>
            <main className="newspot-background-image">
            <form onSubmit={this.handleSubmit}>
              <div className="container">
                  <div className="row">
                    <div className="col-md-6 fade-edge">
                        <h3 className="title theme-font">Add A Spot</h3>
                        <div className="form-group">
                          <label className="input">Name</label>
                            <input type="text" className="form-control" name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name}></input>
                        </div>
                        <div className="form-group">
                          <label className="input">Description</label>
                            <textarea type="text" className="form-control" name="description" placeholder="Description" onChange={this.handleChange} value={this.state.description}></textarea>
                        </div>
                        <div className="form-group">
                          <label className="input">Address</label>
                            <input type="text" className="form-control" name="address" placeholder="Address" onChange={this.handleChange} value={this.state.address}></input>
                        </div>
                        <input type="submit" className="btn btn-primary top-buffer-submit"></input>
                    </div>
                  </div>
              </div>
            </form>
            </main>
          </main>
        )
    }
}