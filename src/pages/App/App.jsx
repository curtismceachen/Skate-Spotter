import { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NewSpot from '../NewSpot/NewSpot';
import Spots from '../Spots/Spots';
import Auth from '../Auth/Auth';

export default class App extends Component {
  state = {
    user: null
  }

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData })
  }

  componentDidMount() {
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
    return (
      <div className="App">
        { this.state.user ? 
          <Routes>
            <Route path="/spots/new" element={<NewSpot user={this.state.user} setUserInState={this.setUserInState}/>} />
            <Route path="/spots" element={<Spots setUserInState={this.setUserInState}/>} />
            
            <Route path="*" element={<Navigate to="/spots" replace />} />
          </Routes>
            :
            <Auth setUserInState={this.setUserInState}/>
          }
      </div>
    ) 
  }
}
