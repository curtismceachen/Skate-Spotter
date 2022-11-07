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
        image: null
    }
    
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value })
    }

    handleFileChange = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    }

    handleSubmit = async () => {
        let chosenImage = this.state.image
        const formdata = new FormData()

        formdata.append('image', chosenImage)
        formdata.append('name', this.state.name)
        formdata.append('description', this.state.description)
        formdata.append('address', this.state.address)

        let options = {
            method: 'POST',
            body: formdata
        }
        
        await fetch("/api", options)
            .then(res => res.json())
            .then(() =>
                this.setState({
                    name: "",
                    description: "",
                    address: "",
                    image: null
                })
            )
    }


    render() {
        return (
          <main>
            <nav className="navbar navbar-expand-lg navbar-light shadow p-3 mb-5 bg-white rounded justify-content-between">
              <div className="navbar-brand theme-font"><Link to="/spots" style={{ color: 'inherit', textDecoration: 'inherit' }}>SkateSpotter</Link></div>
              <ul className="nav navbar-nav mr-auto">
                <li className="nav-item theme-font">
                  <Link to="/spots" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    View Skate Spots
                  </Link>
                </li>
              </ul>
              <UserLogOut setUserInState={this.props.setUserInState}/>
            </nav>
            <main className="newspot-background-image">
              <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 fade-edge">
                      <h3 className="title theme-font">Add A Spot</h3>
                      <div className="form-group secondary-font">
                        <label className="input"><b>Name</b></label>
                        <input type="text" className="form-control" name="name" placeholder="Name" onChange={this.handleChange} value={this.name}></input>
                      </div>
                      <div className="form-group secondary-font">
                        <label className="input"><b>Description</b></label>
                        <textarea type="text" className="form-control" name="description" placeholder="Description" onChange={this.handleChange} value={this.description}></textarea>
                      </div>
                      <div className="form-group secondary-font">
                        <label className="input"><b>Address</b></label>
                        <input type="text" className="form-control" name="address" placeholder="Address" onChange={this.handleChange} value={this.address}></input>
                      </div>
                      <div className="form-group secondary-font">
                        <label className="input"><b>Image</b></label>
                        <input type="file" accept=".png, .jpg, .jpeg" className="form-control" name="image" placeholder="Image" onChange={this.handleFileChange} required></input>
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