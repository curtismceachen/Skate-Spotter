import React from 'react';
import '../../pages/NewSpot/NewSpot.css'

class UserLogOut extends React.Component {
  handleLogout = () => {
    localStorage.removeItem('token')
    this.props.setUserInState(null)
  }
  
  render() {
    return (
      <button className="btn btn-light" onClick={this.handleLogout}>Logout</button>
    );
  }
}


export default UserLogOut;