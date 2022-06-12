import logo from './logo.svg';
import { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import NewSpotPage from './pages/NewSpotPage/NewSpotPage';
import SpotHistoryPage from './pages/SpotHistoryPage/SpotHistoryPage';
import AuthPage from './pages/AuthPage/AuthPage';

export default class App extends Component {
  state = {
    user: null,
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
            <Route path="/spots/new" element={<NewSpotPage setUserInState={this.setUserInState}/>} />
            <Route path="/spots" element={<SpotHistoryPage setUserInState={this.setUserInState}/>} />
            <Route path="*" element={<Navigate to="/spots" replace />} />
          </Routes>
          :
          <AuthPage setUserInState={this.setUserInState}/>
        }
      </div>
    )
  }
}
