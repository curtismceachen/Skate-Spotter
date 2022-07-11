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
    }

    render() {
        return (
          <main>
            <nav className="navbar navbar-expand-lg navbar-light shadow p-3 mb-5 bg-white rounded">
              <div className="navbar-brand brand">SkateSpotter</div>
              <Link to="/spots">
                View Skate Spots
              </Link>
              <UserLogOut setUserInState={this.props.setUserInState}/>
            </nav>
            <main className="newspot-background-image">
             {/* <body style={{"backgroundImage: url('https://i.imgur.com/04NWxgG.jpg');"}}> */}
            <form onSubmit={this.handleSubmit}>
              <div className="container">
                  <div className="row">
                    <div className="col-md-6 fade-edge">
                        <h3 className="title">Add a spot</h3>
                        <div className="form-group">
                          <label className="input">Name</label>
                            <input type="text" className="form-control" name="name" onChange={this.handleChange} value={this.state.name}></input>
                        </div>
                        <div className="form-group">
                          <label className="input">Description</label>
                            <textarea type="text" className="form-control" name="description" onChange={this.handleChange} value={this.state.description}></textarea>
                        </div>
                        <div className="form-group">
                          <label className="input">Address</label>
                            <input type="text" className="form-control" name="address" onChange={this.handleChange} value={this.state.address}></input>
                        </div>
                        <input type="submit" className="btn btn-primary top-buffer-submit"></input>
                    </div>
                    {/* <div className="col-md-6"><img src="http://socialoffline.in/blog/wp-content/uploads/2017/04/Nikhil_2-e1491985779844.png" className="img-fluid" alt="alternatetext"></img></div> */}
                    {/* <div className="col-md-6">  
                      // style={{ background: `url('http://socialoffline.in/blog/wp-content/uploads/2017/04/Nikhil_2-e1491985779844.png')`, 
                      // backgroundRepeat:"no-repeat",
                      // backgroundSize: "contain", 
                      // width: "100vw", 
                      // height: "100vh", 
                      // backgroundPosition: "right"}}>

                    </div> */}
                  </div>
              </div>
            </form>
            </main>
            {/* <div style={{ backgroundImage: `url('http://socialoffline.in/blog/wp-content/uploads/2017/04/Nikhil_2-e1491985779844.png')`, 
              backgroundRepeat:"no-repeat",
              backgroundSize: "contain", 
              width: "100vw", 
              height: "100vh", 
              backgroundPosition: "right"}}>
            </div> */}
          </main>
        )
    }
}