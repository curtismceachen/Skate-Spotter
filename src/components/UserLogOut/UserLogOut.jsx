import React from 'react';

class UserLogOut extends React.Component {
  handleLogout = () => {
    localStorage.removeItem('token')
    this.props.setUserInState(null)
  }
  
  render() {
  return (
      <div>
        {/* <div>Name: {this.props.name}</div>
        <div>Email: {this.props.email}</div> */}
        <button onClick={this.handleLogout}>Logout</button>
      </div>
  );
  }
}


export default UserLogOut;