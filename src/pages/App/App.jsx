import { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NewSpot from '../NewSpot/NewSpot';
import Spots from '../Spots/Spots';
import Auth from '../Auth/Auth';

export default class App extends Component {
  state = {
    spots: [],
    user: null
  }

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData })
  }

  getSpots = async () => {
    await fetch("/api/spots")
      .then(res => res.json())
      .then(data => this.setState({spots: data}))
  }

  componentDidMount() {
    this.getSpots()
    let token = localStorage.getItem('token')
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]))
      if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token')
        token = null
      } else {
        this.setState({ user: payload.user })
      }
    }
  }

  render() {
    // determination
    // console.log(this.state.user)
    return (
      <div className="App">
        {/* <button onClick={this.setUserInState(null)}>clickme</button> */}
        { this.state.user ? 
          <Routes>
            <Route path="/spots/new" element={<NewSpot user={this.state.user} setUserInState={this.setUserInState}/>} />
            <Route path="/spots" element={
              // {this.state.spots.map(p => (

              <Spots setUserInState={this.setUserInState}/>} />
            
            <Route path="*" element={<Navigate to="/spots" replace />} />
          </Routes>
          :
          <Auth setUserInState={this.setUserInState}/>
        }
      </div>
    ) 
  }
}
