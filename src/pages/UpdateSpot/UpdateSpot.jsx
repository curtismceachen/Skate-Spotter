import { Component } from 'react'
import React from 'react'
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
          <form onSubmit={this.handleSubmit}>
            <div>
              <div className="form-group name-update">
                <label className="inputUD"><span className="label"><b>Name</b></span></label>
                <input type="text" className="form-control" name="name" onChange={this.handleChange} value={this.state.name}></input>
              </div>
              <div className="form-group">
                <label className="inputUD"><span className="label"><b>Description</b></span></label>
                <textarea type="text" className="form-control" name="description" onChange={this.handleChange} value={this.state.description}></textarea>
              </div>
              <div className="form-group address-update">
                <label className="inputUD"><span className="label"><b>Address</b></span></label>
                <input type="text" className="form-control" name="address" onChange={this.handleChange} value={this.state.address}></input>
              </div>
              <input type="submit" className="btn btn-success"></input>
            </div>
          </form>
        )
    }
}
