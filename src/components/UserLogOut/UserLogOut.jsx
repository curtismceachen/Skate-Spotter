import React from 'react';
import '../../pages/NewSpot/NewSpot.css'

class UserLogOut extends React.Component {
  handleLogout = () => {
    localStorage.removeItem('token')
    this.props.setUserInState(null)
  }
  
  render() {
  return (
      // <div className="logout-position">
      // <ul className="nav navbar-nav ml-auto">
          // <li className="nav-item">
        /* <div>Name: {this.props.name}</div>
        <div>Email: {this.props.email}</div> */
        <button className="btn btn-light" onClick={this.handleLogout}>Logout</button>
      // </li>
      // </ul>
  );
  }
}


export default UserLogOut;